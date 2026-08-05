"use strict";
/* ============================================================
   FIREBASE — AUTH / FIRESTORE / APP CHECK
   ------------------------------------------------------------
   Loaded after app.js (uses its globals: CACHE, toast,
   renderTopbar, renderView, saveLocalState, normalizeFsPath,
   genId, debounce).
   ============================================================ */
let firebaseApp = null, fAuth = null, fDb = null, unsubscribers = [];

/* ---------- Client-side write flood guard ----------
   Cheap defense-in-depth against runaway writes (e.g. a stuck
   interval or a malicious script). The real protection is
   Firestore rules + App Check (see firestore.rules). */
let writeTokens = [];
function writeOk(){
  const now = Date.now();
  writeTokens = writeTokens.filter(t => now - t < 5000);
  if(writeTokens.length >= 60) return false;
  writeTokens.push(now);
  return true;
}

function fbInit(){
  if(!USE_FIREBASE || !window.firebase || !window.firebase.auth) return;
  try{
    firebaseApp = window.firebase.initializeApp(FIREBASE_CONFIG);
    /* App Check — activate only if a site key is configured in config.js. */
    try{
      if(window.firebase.appCheck && APP_CHECK_SITE_KEY){
        window.firebase.appCheck(firebaseApp).activate(APP_CHECK_SITE_KEY, true);
      }
    }catch(e){ console.warn("App Check init failed", e); }
    fAuth = window.firebase.auth(firebaseApp);
    fDb = window.firebase.firestore(firebaseApp);
    try{ fDb.enablePersistence({ synchronizeTabs:true }); }catch(e){}
    fAuth.onAuthStateChanged(onAuthStateChanged);
  }catch(e){
    console.warn("Firebase init failed", e);
    toast("Firebase couldn't start — running in local mode.", "info");
  }
}
function signInGoogle(){
  if(!USE_FIREBASE || !fAuth){ toast("Connect Firebase first — see the FIREBASE_CONFIG block in js/config.js.", "info"); return; }
  const provider = new window.firebase.auth.GoogleAuthProvider();
  fAuth.signInWithPopup(provider)
    .then(r => toast(`Welcome, ${(r.user.displayName||"learner").split(" ")[0]}!`, "success"))
    .catch(err => {
      console.warn(err);
      if(err.code === "auth/popup-blocked") toast("Popup was blocked — allow popups for this site, or run over http(s):// (not file://).", "error");
      else if(err.code === "auth/operation-not-allowed") toast("Google sign-in is disabled in your Firebase console → Authentication → Sign-in method.", "error");
      else toast("Sign-in failed: " + (err.message || err.code), "error");
    });
}
function signOut(){
  if(fAuth){ fAuth.signOut().then(()=>toast("Signed out. Your data is safe.", "info")); }
}
function onAuthStateChanged(user){
  CACHE.user = user || null;
  unsubscribers.forEach(u=>{ try{u();}catch(e){} });
  unsubscribers = [];
  subscribePublicFirestore();
  if(user){
    try{
      const doc = fDb.collection("users").doc(user.uid);
      doc.set({ name: user.displayName||"", email: user.email||"", photoURL: user.photoURL||"", createdAt: window.firebase.firestore.FieldValue.serverTimestamp() }, { merge:true });
    }catch(e){}
    subscribeUserFirestore(user.uid);
    pushLocalProgressToCloud();
  }
  saveLocalState();
  renderTopbar();
  renderView();
}
let rulesWarnShown = false;
function publicStreamErr(kind, err){
  console.warn(`public ${kind} stream error:`, err);
  if(err && err.code === "permission-denied" && !rulesWarnShown){
    rulesWarnShown = true;
    toast(kind === "paths"
      ? "Public paths are hidden — your Firestore rules are missing the 'paths' read rule."
      : "Public courses are hidden — check your Firestore rules.", "error");
  }
}
function subscribePublicFirestore(){
  unsubscribers.push(fDb.collection("courses").where("visibility", "==", "public").onSnapshot(snap=>{
    const pub = {};
    snap.forEach(d=>{ pub[d.id] = normalizeFsCourse(d.id, d.data(), "public"); });
    for(const id in CACHE.firestoreCourses){
      if(CACHE.firestoreCourses[id] && CACHE.firestoreCourses[id].kind === "public" && !pub[id]) delete CACHE.firestoreCourses[id];
    }
    Object.assign(CACHE.firestoreCourses, pub);
    mergeCourses();
    renderView();
  }, err=>publicStreamErr("courses", err)));
  unsubscribers.push(fDb.collectionGroup("paths").where("visibility", "==", "public").onSnapshot(snap=>{
    const pub = {};
    snap.forEach(d=>{ pub[d.id] = normalizeFsPath(d.id, d.data(), "public"); });
    CACHE.publicPaths = pub;
    renderView();
  }, err=>publicStreamErr("paths", err)));
}
function subscribeUserFirestore(uid){
  unsubscribers.push(fDb.collection("courses").where("ownerId", "==", uid).onSnapshot(snap=>{
    const own = {};
    snap.forEach(d=>{ own[d.id] = normalizeFsCourse(d.id, d.data(), "mine"); });
    for(const id in CACHE.firestoreCourses){
      if(CACHE.firestoreCourses[id] && CACHE.firestoreCourses[id].kind === "mine" && !own[id]) delete CACHE.firestoreCourses[id];
    }
    Object.assign(CACHE.firestoreCourses, own);
    mergeCourses();
    renderView();
  }, err=>console.warn(err)));
  unsubscribers.push(fDb.collection("users").doc(uid).collection("myCourses").onSnapshot(snap=>{
    CACHE.myCourses = {};
    snap.forEach(d=>{ CACHE.myCourses[d.id] = normalizeFsCourse(d.id, d.data(), "copy"); });
    saveLocalState();
    mergeCourses();
    renderView();
  }, err=>console.warn(err)));
  unsubscribers.push(fDb.collection("users").doc(uid).collection("bookmarks").onSnapshot(snap=>{
    CACHE.bookmarks = {};
    snap.forEach(d=>{ CACHE.bookmarks[d.id] = { savedAt: d.data().savedAt || 0 }; });
    saveLocalState();
    renderView();
  }, err=>console.warn(err)));
  unsubscribers.push(fDb.collection("users").doc(uid).collection("paths").onSnapshot(snap=>{
    CACHE.paths = {};
    snap.forEach(d=>{ CACHE.paths[d.id] = normalizeFsPath(d.id, d.data(), "mine"); });
    saveLocalState();
    renderView();
  }, err=>console.warn(err)));
}

/* Normalize + sanitize every course read from Firestore.
   Untrusted fields (titles, urls, videoIds, chapters) are
   coerced to safe values BEFORE they can reach the DOM. */
function normalizeFsCourse(id, data, kind){
  if(!data) return null;
  const videos = Array.isArray(data.videos) ? data.videos.slice(0, MAX_VIDEOS).map(v => ({
    videoId: sanitizeVideoId(v.videoId || ""),
    url: String(v.url || "").slice(0, MAX_URL_LEN),
    title: String(v.title || "Video").slice(0, MAX_TITLE_LEN),
    chapters: Array.isArray(v.chapters)
      ? v.chapters.slice(0, MAX_CHAPTERS).map(c => ({ t: Math.max(0, +c.t || 0), l: String(c.l || "").slice(0, MAX_TITLE_LEN) }))
      : []
  })) : [];
  return {
    id,
    ownerId: data.ownerId || (kind === "copy" ? (CACHE.user ? CACHE.user.uid : "") : ""),
    ownerName: String(data.ownerName || "Anonymous").slice(0, MAX_NAME_LEN),
    title: String(data.title || "Untitled course").slice(0, MAX_TITLE_LEN),
    description: String(data.description || "").slice(0, MAX_DESC_LEN),
    visibility: data.visibility === "public" ? "public" : "private",
    videos,
    kind,
    copiedFrom: data.copiedFrom || null,
    createdAt: data.createdAt || Date.now()
  };
}
function mergeCourses(){
  // Firestore wins over local cache for the same id
  for(const id in CACHE.firestoreCourses){
    const c = CACHE.firestoreCourses[id];
    if(c) CACHE.allCourses[id] = c;
  }
  for(const id in CACHE.myCourses){
    CACHE.allCourses[id] = CACHE.myCourses[id];
  }
}
function pushLocalProgressToCloud(){
  if(!CACHE.user || !fDb) return;
  const uid = CACHE.user.uid;
  for(const courseId in CACHE.progress){
    for(const videoId in CACHE.progress[courseId]){
      const p = CACHE.progress[courseId][videoId];
      try{
        fDb.collection("users").doc(uid).collection("progress").doc(courseId).collection("videos").doc(videoId)
          .set({ time:p.time, duration:p.duration, completed:!!p.completed, chapterCompleted:p.chapterCompleted||{}, lastChapter:p.lastChapter||0, updatedAt: Date.now() }, { merge:true });
      }catch(e){}
    }
  }
}
function fsWriteProgress(courseId, videoId, p){
  if(!CACHE.user || !fDb) return;
  if(!writeOk()) return;
  try{
    fDb.collection("users").doc(CACHE.user.uid).collection("progress").doc(courseId).collection("videos").doc(videoId)
      .set({ time:p.time, duration:p.duration, completed:!!p.completed, chapterCompleted:p.chapterCompleted||{}, lastChapter:p.lastChapter||0, updatedAt: Date.now() }, { merge:true });
  }catch(e){}
}
const debouncedProgressWrite = debounce((courseId, videoId)=>{
  const p = CACHE.progress[courseId] && CACHE.progress[courseId][videoId];
  if(p) fsWriteProgress(courseId, videoId, p);
}, 1500);

/* ---------- Data serializers sent to Firestore ---------- */
function firestoreCourseData(c){
  return {
    ownerId: c.ownerId || (CACHE.user ? CACHE.user.uid : ""),
    ownerName: c.ownerName || (CACHE.user ? CACHE.user.displayName : "You"),
    title: c.title,
    description: c.description || "",
    visibility: c.visibility === "public" ? "public" : "private",
    videos: (c.videos||[]).slice(0, MAX_VIDEOS).map(v=>({
      videoId: sanitizeVideoId(v.videoId),
      url: String(v.url||"").slice(0, MAX_URL_LEN),
      title: String(v.title||"Video").slice(0, MAX_TITLE_LEN),
      chapters: (v.chapters||[]).slice(0, MAX_CHAPTERS).map(x=>({ t: Math.max(0, +x.t||0), l: String(x.l||"").slice(0, MAX_TITLE_LEN) }))
    })),
    copiedFrom: c.copiedFrom || null,
    createdAt: c.createdAt || Date.now()
  };
}
function savePathToBackend(pid){
  if(CACHE.user && fDb){
    if(!writeOk()){ toast("Too many changes — slow down.", "error"); return; }
    const p = CACHE.paths[pid];
    if(p) fDb.collection("users").doc(CACHE.user.uid).collection("paths").doc(pid).set({
      name: String(p.name || "Untitled path").slice(0, MAX_TITLE_LEN),
      description: String(p.description || "").slice(0, MAX_DESC_LEN),
      courseIds: Array.isArray(p.courseIds) ? p.courseIds.slice(0, MAX_VIDEOS) : [],
      visibility: p.visibility === "public" ? "public" : "private",
      ownerId: p.ownerId || CACHE.user.uid,
      ownerName: String(p.ownerName || (CACHE.user.displayName || "You")).slice(0, MAX_NAME_LEN),
      createdAt: p.createdAt || Date.now()
    }).catch(()=>{});
  }
}
function makeCoursePublic(c){
  if(!c || !CACHE.user || !fDb || !isMine(c) || c.kind === "copy" || c.kind === "local") return;
  if(!writeOk()){ toast("Too many changes — slow down.", "error"); return; }
  c.visibility = "public";
  fDb.collection("courses").doc(c.id).set(firestoreCourseData(c)).catch(()=>{});
  saveLocalState();
}
