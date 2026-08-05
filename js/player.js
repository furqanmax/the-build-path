"use strict";
/* ============================================================
   PLAYER — YouTube IFrame API + chapter controls
   ------------------------------------------------------------
   Loaded after app.js and firebase.js. Depends on globals:
   CACHE, current (defined here), showView, esc, escAttr, svg,
   fmt, toast, sanitizeVideoId, saveLocalState.
   ============================================================ */
const current = { courseId: null, videoId: null };
let player = null, apiReady = false, trackTimer = null;
let expandedVideos = new Set();
let currentChStart = 0, currentChEnd = Infinity;

function currentCourse(){ return CACHE.allCourses[current.courseId]; }
function currentVideo(){
  const c = currentCourse();
  if(!c) return null;
  return c.videos.find(v=>v.videoId === current.videoId) || c.videos[0] || null;
}
function progressFor(courseId, videoId){
  if(!CACHE.progress[courseId]) CACHE.progress[courseId] = {};
  if(!CACHE.progress[courseId][videoId]) CACHE.progress[courseId][videoId] = { time:0, duration:0, completed:false, chapterCompleted:{}, lastChapter:0 };
  return CACHE.progress[courseId][videoId];
}
function saveProgressNow(courseId, videoId){
  saveLocalState();
  debouncedProgressWrite(courseId, videoId);
}

function openCourse(courseId, videoId){
  const c = CACHE.allCourses[courseId];
  if(!c){
    toast("Course not found.", "error");
    if(viewName === "player") showView("explore");
    return;
  }
  current.courseId = courseId;
  current.videoId = videoId || (c.videos[0] ? c.videos[0].videoId : null);
  CACHE.lastActive = { courseId, videoId: current.videoId };
  CACHE.journey.startLearning = true;
  saveLocalState();
  if(CACHE.user && fDb){
    try{ fDb.collection("users").doc(CACHE.user.uid).set({ lastActive: { courseId, videoId: current.videoId } }, { merge:true }); }catch(e){}
  }
  expandedVideos.clear();
  expandedVideos.add(current.videoId);
  showView("player");
}

function destroyPlayer(){
  clearInterval(trackTimer); trackTimer = null;
  if(player){
    try{ player.destroy(); }catch(e){}
    player = null;
  }
}
function renderPlayer(){
  destroyPlayer();
  const c = currentCourse();
  const v = currentVideo();
  if(!c || !v){
    $("#playerRoot").innerHTML = `<div class="view-inner"><div class="empty"><h4>Nothing to play</h4><p>This course has no videos yet.</p><button class="btn" data-back>Back</button></div></div>`;
    const b = $("#playerRoot [data-back]");
    if(b) b.onclick = ()=>showView("explore");
    return;
  }
  const vIdx = c.videos.indexOf(v);
  const p = progressFor(c.id, v.videoId);
  const chs = v.chapters || [];
  const curCh = currentChapterIndex(chs, p.time);
  const hasCh = chs.length > 0;
  currentChStart = hasCh ? chs[curCh].t : 0;
  currentChEnd = hasCh ? chapterEnd(chs, chs[curCh].t) : Infinity;
  const chKey = hasCh ? chs[curCh].t : null;
  const chDone = chKey != null && !!p.chapterCompleted[chKey];

  let sidebar = `
    <div class="sidebar">
      <button class="back" data-nav="explore">${svg("arrow-left","sm")} ${esc(c.title)}</button>
      <div class="side-course-title">${esc(c.title)}</div>
      <div class="side-course-sub">${c.videos.length} video${c.videos.length===1?"":"s"} · ${totalChapters(c)} chapters · ${courseKindBadge(c).replace(/<span/g,"<span style='vertical-align:middle'")}</div>`;

  c.videos.forEach((vid, i)=>{
    const vp = progressFor(c.id, vid.videoId);
    const isCurrent = vid.videoId === v.videoId;
    const isOpen = expandedVideos.has(vid.videoId) || isCurrent;
    const chs2 = vid.chapters || [];
    const pct = vp.completed ? 100 : (vp.duration ? Math.min(100, Math.round((vp.time / vp.duration) * 100)) : 0);
    const status = vp.completed
      ? `<span style="color:var(--good)">${svg("check-circle","sm")}</span>`
      : (vp.time > 0 ? `<span style="color:var(--accent)">${svg("play-circle","sm")}</span>` : `<span style="color:var(--muted-2)">${svg("circle","sm")}</span>`);
    sidebar += `
      <div class="vid-card ${isCurrent?"active":""} ${isOpen?"open":""}">
        <button class="vid-head" data-vid-toggle="${escAttr(vid.videoId)}">
          ${status}
          <span class="v-title">${esc(vid.title || "Video " + (i+1))}</span>
          <span class="v-chev">${svg("chevron-right","sm")}</span>
        </button>
        ${isOpen ? `<div class="vid-chapters">${chs2.length
            ? chs2.map((ch,idx)=>{
                const done = vp.chapterCompleted[ch.t];
                let cur = -1;
                if(isCurrent && p.time > 0){ for(let k=chs2.length-1;k>=0;k--){ if(p.time >= chs2[k].t){ cur=k; break; } } }
                const ind = done ? `<span style="color:var(--good)">${svg("check-circle","sm")}</span>`
                  : (idx===cur ? `<span style="color:var(--accent)">${svg("play-circle","sm")}</span>` : `<span style="color:var(--muted-2)">${svg("circle","sm")}</span>`);
                return `<button class="chapter-row ${(isCurrent && idx===cur)?"current":""}" data-chapter="${ch.t}">
                  <span class="ch-indicator">${ind}</span><span class="ch-time mono">${fmt(ch.t)}</span><span class="ch-title">${esc(ch.l)}</span>
                </button>`;
              }).join("")
            : `<div style="color:var(--muted-2);font-size:0.78rem;padding:4px 8px;font-style:italic;">No chapters</div>`}
        </div>` : ""}
        <div class="mc-progress"><b style="width:${pct}%"></b></div>
      </div>`;
  });
  sidebar += `</div>`;

  const prevCh = hasCh && curCh > 0;
  const nextCh = hasCh && curCh >= 0 && curCh < chs.length - 1;
  const chTime = hasCh ? fmt(Math.max(0, p.time - currentChStart)) + " / " + fmt(isFinite(currentChEnd) ? currentChEnd - currentChStart : v.duration || 0) : fmt(p.time) + " / " + fmt(v.duration || 0);

  $("#playerRoot").innerHTML = `
  <div class="app">
    ${sidebar}
    <main class="main">
      <div class="crumbs"><button data-nav="explore">Explore</button> / <span>${esc(c.title)}</span></div>
      <div class="title-row">
        <div>
          <h2 id="videoTitle">${esc(v.title || "Untitled video")}</h2>
          <div class="title-sub" id="videoSub">Video ${vIdx+1} of ${c.videos.length}${hasCh ? ` · ${chs.length} chapters` : ""}</div>
        </div>
        <label class="complete-toggle ${chDone?"done":""}" id="completeToggle">
          <input type="checkbox" id="completeCheckbox" ${chDone?"checked":""}>
          <span id="completeLabel">${chKey != null ? (chDone ? "Chapter done" : "Mark chapter done") : (p.completed ? "Completed" : "Mark complete")}</span>
        </label>
      </div>
      <div class="player-wrap"><div id="player"></div></div>
      <div class="chapter-bar" id="chapterBar">
        <button class="ch-play-btn" id="chPlayBtn">${svg("play")}</button>
        <div class="ch-progress-track" id="chProgressTrack"><div class="ch-progress-fill" id="chProgressFill"></div></div>
        <span class="ch-time-display mono" id="chTimeDisplay">${chTime}</span>
      </div>
      <div class="nav-buttons">
        <button class="nav-btn" id="prevBtn" ${prevCh?"":"disabled"}><span class="lbl">← Previous chapter</span><span class="val" id="prevVal">${prevCh ? esc(chs[curCh-1].l) : "—"}</span></button>
        <button class="nav-btn right" id="nextBtn" ${nextCh?"":"disabled"}><span class="lbl">Next chapter →</span><span class="val" id="nextVal">${nextCh ? esc(chs[curCh+1].l) : "—"}</span></button>
      </div>
    </main>
  </div>`;

  // listeners
  $$("[data-nav]", $("#playerRoot")).forEach(b=> b.addEventListener("click", ()=>{
    if(b.dataset.nav === "explore") showView("explore");
  }));
  $$("[data-vid-toggle]", $("#playerRoot")).forEach(b=> b.addEventListener("click", ()=>{
    const vidId = b.dataset.vidToggle;
    expandedVideos.has(vidId) ? expandedVideos.delete(vidId) : expandedVideos.add(vidId);
    renderPlayer();
  }));
  $$("[data-chapter]", $("#playerRoot")).forEach(b=> b.addEventListener("click", ()=>{
    const t = +b.dataset.chapter;
    const vv = currentVideo();
    const pp = progressFor(current.courseId, vv.videoId);
    pp.time = t; pp.lastChapter = t;
    saveProgressNow(current.courseId, vv.videoId);
    renderPlayer();
  }));
  $("#completeCheckbox").addEventListener("change", e=>{
    const vv = currentVideo();
    const pp = progressFor(current.courseId, vv.videoId);
    const chs2 = vv.chapters || [];
    const curCh2 = currentChapterIndex(chs2, pp.time);
    const chKey2 = chs2[curCh2] ? chs2[curCh2].t : null;
    if(chKey2 != null){
      if(e.target.checked) pp.chapterCompleted[chKey2] = true;
      else delete pp.chapterCompleted[chKey2];
      pp.completed = chs2.every(c => pp.chapterCompleted[c.t]);
    }else{
      pp.completed = !!e.target.checked;
    }
    saveProgressNow(current.courseId, vv.videoId);
    renderPlayer();
  });
  $("#chPlayBtn").addEventListener("click", ()=>{
    if(!player) return;
    if(player.getPlayerState() === 1) player.pauseVideo(); else player.playVideo();
  });
  $("#chProgressTrack").addEventListener("mousedown", e=>{
    if(!player) return;
    const rect = e.currentTarget.getBoundingClientRect();
    seekInChapter((e.clientX - rect.left) / rect.width);
    const onMove = ev=> seekInChapter((ev.clientX - rect.left) / rect.width);
    const onUp = ()=>{ saveProgressNow(current.courseId, current.videoId); document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseup", onUp); };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
  $("#chProgressTrack").addEventListener("touchstart", e=>{
    if(!player) return;
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    seekInChapter((touch.clientX - rect.left) / rect.width);
    const onMove = ev=>{ ev.preventDefault(); const t = ev.touches[0]; seekInChapter((t.clientX - rect.left) / rect.width); };
    const onEnd = ()=>{ saveProgressNow(current.courseId, current.videoId); document.removeEventListener("touchmove", onMove); document.removeEventListener("touchend", onEnd); };
    document.addEventListener("touchmove", onMove, { passive:false });
    document.addEventListener("touchend", onEnd);
  });
  $("#prevBtn").onclick = ()=>{ if(!prevCh) return; const pp = progressFor(current.courseId, v.videoId); pp.time = chs[curCh-1].t; pp.lastChapter = chs[curCh-1].t; saveProgressNow(current.courseId, v.videoId); renderPlayer(); };
  $("#nextBtn").onclick = ()=>{ if(!nextCh) return; const pp = progressFor(current.courseId, v.videoId); pp.time = chs[curCh+1].t; pp.lastChapter = chs[curCh+1].t; saveProgressNow(current.courseId, v.videoId); renderPlayer(); };

  updateChapterControls();
  ensurePlayer();
}

function currentChapterIndex(chs, t){
  if(!chs || !chs.length) return -1;
  for(let i = chs.length - 1; i >= 0; i--){ if(t >= chs[i].t) return i; }
  return 0;
}
function chapterEnd(chs, chT){
  if(!chs) return Infinity;
  for(let i = 0; i < chs.length - 1; i++){ if(chs[i].t === chT) return chs[i+1].t; }
  return Infinity;
}
function updateChapterControls(){
  const vv = currentVideo();
  if(!vv) return;
  const p = progressFor(current.courseId, vv.videoId);
  const chs = vv.chapters || [];
  const hasBounds = isFinite(currentChEnd) && chs.length > 0;
  const chDuration = hasBounds ? currentChEnd - currentChStart : (p.duration || 0);
  const t = hasBounds ? Math.min(currentChEnd, p.time || 0) : (p.time || 0);
  const pct = chDuration > 0 ? Math.min(100, Math.max(0, ((t - (hasBounds ? currentChStart : 0)) / chDuration) * 100)) : 0;
  const fill = $("#chProgressFill");
  if(fill) fill.style.width = pct + "%";
  const disp = $("#chTimeDisplay");
  if(disp) disp.textContent = hasBounds
    ? fmt(Math.max(0, p.time - currentChStart)) + " / " + fmt(chDuration)
    : fmt(p.time) + " / " + fmt(chDuration);
  const btn = $("#chPlayBtn");
  if(btn && player){
    btn.innerHTML = player.getPlayerState() === 1 ? svg("pause") : svg("play");
  }
}
function seekInChapter(pct){
  if(!player) return;
  const vv = currentVideo();
  if(!vv) return;
  const p = progressFor(current.courseId, vv.videoId);
  const chs = vv.chapters || [];
  const hasBounds = isFinite(currentChEnd) && chs.length > 0;
  const chDuration = hasBounds ? currentChEnd - currentChStart : (p.duration || 0);
  const seekTime = (hasBounds ? currentChStart : 0) + Math.max(0, Math.min(1, pct)) * chDuration;
  player.seekTo(seekTime);
  p.time = seekTime;
  updateChapterControls();
}
function ensurePlayer(){
  if(!apiReady || !window.YT || !currentVideo()) return;
  if(player && player.loadVideoById){
    const opts = { videoId: sanitizeVideoId(current.videoId), startSeconds: Math.floor(currentChStart) };
    if(isFinite(currentChEnd)) opts.endSeconds = Math.ceil(currentChEnd);
    player.loadVideoById(opts);
    return;
  }
  if(player) return;
  const p = progressFor(current.courseId, current.videoId);
  player = new YT.Player("player", {
    videoId: sanitizeVideoId(current.videoId),
    playerVars: { start: Math.floor(currentChStart), controls: 0, rel: 0, modestbranding: 1 },
    events: { "onReady": ()=> startTracking(), "onStateChange": onPlayerStateChange }
  });
}
/* Called by the YouTube IFrame API when its script is ready. */
function onYouTubeIframeAPIReady(){
  apiReady = true;
  if(viewName === "player") ensurePlayer();
}
function onPlayerStateChange(e){
  if(e.data === YT.PlayerState.PLAYING){
    startTracking();
    updateChapterControls();
  }
  if(e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED){
    persistCurrentTime();
    updateChapterControls();
    if(e.data === YT.PlayerState.ENDED){
      if(isFinite(currentChEnd)){
        if(player){
          player.seekTo(currentChEnd - 0.5);
          player.pauseVideo();
        }
        const p = progressFor(current.courseId, current.videoId);
        p.time = currentChEnd - 0.5;
        saveProgressNow(current.courseId, current.videoId);
        updateChapterControls();
      }else{
        const p = progressFor(current.courseId, current.videoId);
        p.completed = true;
        saveProgressNow(current.courseId, current.videoId);
        renderPlayer();
      }
    }
  }
}
function startTracking(){
  clearInterval(trackTimer);
  trackTimer = setInterval(persistCurrentTime, 3000);
}
function persistCurrentTime(){
  if(!player || !player.getCurrentTime) return;
  const t = player.getCurrentTime();
  const d = player.getDuration ? player.getDuration() : 0;
  if(!t && !d) return;
  const vv = currentVideo();
  if(!vv) return;
  const p = progressFor(current.courseId, vv.videoId);
  p.time = t;
  if(d) p.duration = d;
  if(d && t/d > 0.95 && !isFinite(currentChEnd)) p.completed = true;
  CACHE.lastActive = { courseId: current.courseId, videoId: vv.videoId };
  saveProgressNow(current.courseId, vv.videoId);
  updateChapterControls();
}

/* keyboard shortcuts */
document.addEventListener("keydown", e=>{
  if(viewName !== "player") return;
  if(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if(!player) return;
  const vv = currentVideo();
  if(!vv) return;
  const p = progressFor(current.courseId, vv.videoId);
  const chs = vv.chapters || [];
  const hasBounds = isFinite(currentChEnd) && chs.length > 0;
  const maxTime = hasBounds ? currentChEnd : (p.duration || Infinity);
  switch(e.key){
    case " ": case "k":
      e.preventDefault();
      if(player.getPlayerState() === 1) player.pauseVideo(); else player.playVideo();
      break;
    case "ArrowLeft": case "j":
      e.preventDefault();
      player.seekTo(Math.max(hasBounds ? currentChStart : 0, (p.time||0) - 5));
      p.time = Math.max(hasBounds ? currentChStart : 0, (p.time||0) - 5);
      updateChapterControls();
      break;
    case "ArrowRight": case "l":
      e.preventDefault();
      player.seekTo(Math.min(maxTime, (p.time||0) + 5));
      p.time = Math.min(maxTime, (p.time||0) + 5);
      updateChapterControls();
      break;
  }
});
