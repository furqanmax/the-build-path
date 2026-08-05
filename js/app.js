"use strict";
/* ============================================================
   HERO OUTLINE ICONS  (https://heroicons.com — outline set)
   ============================================================ */
const IC = {
  "academic-cap":"M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  "book-open":"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  "folder":"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z",
  "plus":"M12 4.5v15m7.5-7.5h-15",
  "bookmark":"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z",
  "copy":"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75",
  "pencil":"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125",
  "trash":"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0",
  "play":"M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z",
  "pause":"M15.75 5.25v13.5m-7.5-13.5v13.5",
  "arrow-left":"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18",
  "arrow-right":"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3",
  "arrow-top-right-on-square":"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
  "arrow-right-on-rectangle":"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
  "arrow-path":"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  "arrow-up-on-square":"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15",
  "check":"M4.5 12.75l6 6 9-13.5",
  "check-circle":"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "chevron-right":"M8.25 4.5l7.5 7.5-7.5 7.5",
  "chevron-down":"M19.5 8.25l-7.5 7.5-7.5-7.5",
  "chevron-up":"M4.5 15.75l7.5-7.5 7.5 7.5",
  "circle":"M12 3a9 9 0 100 18 9 9 0 000-18z",
  "clock":"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  "code-bracket":"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
  "document-text":"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  "ellipsis-vertical":"M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z",
  "exclamation-triangle":"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
  "eye":"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
  "globe-alt":"M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  "information-circle":"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
  "link":"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  "list-bullet":"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  "lock-closed":"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
  "magnifying-glass":"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  "map":"M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z",
  "photo":"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  "play-circle":"M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z",
  "plus-circle":"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  "queue-list":"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
  "rectangle-stack":"M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
  "sparkles":"M9.813 15.904L9.375 17.25a.75.75 0 01-.75.563h-.5a.75.75 0 01-.75-.75v-.344a1.125 1.125 0 00-.33-.797L2.823 12.22a.75.75 0 010-1.06l.698-.698a.75.75 0 000-1.061L4.72 8.26a.75.75 0 00.22-.53V7.33a.75.75 0 01.75-.75h.375a.75.75 0 00.75-.75V5.5a.75.75 0 011.125-.657l1.14.57a.75.75 0 01.466.757l-.09.681a.75.75 0 00.298.66l.723.53a.75.75 0 01.071 1.17l-.904.903a.75.75 0 00-.219.53v.09c0 .199.079.39.22.531l.354.354a.75.75 0 010 1.06l-.698.698a.75.75 0 01-1.061 0l-.354-.354zm2.813-2.375a.75.75 0 01.75.75v.344a.75.75 0 00.33.797l1.385 1.086a1.125 1.125 0 01.23 1.725l-.257.258a.75.75 0 000 1.06l.698.698a.75.75 0 010 1.06l-1.061 1.061a.75.75 0 01-1.06 0l-.698-.698a.75.75 0 00-1.06 0l-.257.258a1.125 1.125 0 01-1.726-.229l-1.086-1.385a.75.75 0 00-.797-.33h-.344a.75.75 0 01-.75-.75v-.3a.75.75 0 00-.33-.797l-1.385-1.086a1.125 1.125 0 01-.23-1.725l.257-.258a.75.75 0 000-1.06l-.698-.698a.75.75 0 010-1.061l1.061-1.061a.75.75 0 011.06 0l.698.698a.75.75 0 001.06 0l.258-.257a1.125 1.125 0 011.725.23l1.086 1.385a.75.75 0 00.797.33h.344z",
  "square-2-stack":"M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6",
  "user-circle":"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
  "video-camera":"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
  "x-mark":"M6 18L18 6M6 6l12 12"
};
function svg(name, cls){
  const d = IC[name] || "";
  return `<svg class="ic ${cls||""}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="${d}"></path></svg>`;
}

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (s, r) => (r||document).querySelector(s);
const $$ = (s, r) => Array.from((r||document).querySelectorAll(s));

/* Escape HTML text content — always use before inserting any
   untrusted string (Firestore data, pasted chapters, etc.). */
function esc(s){
  return String(s == null ? "" : s)
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
/* Alias for attribute-value contexts (same escaping covers quotes). */
function escAttr(s){ return esc(s); }

/* Sanitize a YouTube video id to a strict 11-char slug. Any other
   value (including attacker-controlled Firestore data) becomes "".
   This is the primary defense against stored XSS via thumbnails. */
function sanitizeVideoId(id){
  const s = String(id == null ? "" : id).trim();
  return /^[A-Za-z0-9_-]{11}$/.test(s) ? s : "";
}
/* Safe thumbnail URL — id is sanitized first, so the resulting
   URL can never carry quotes/angle brackets into the DOM. */
function thumb(videoId){
  const id = sanitizeVideoId(videoId);
  return id ? "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg" : "";
}
/* Safe inline style for course/row/video thumbnails. */
function bg(videoId){
  const url = thumb(videoId);
  if(!url) return "";
  return "background-image:url('" + url + "')";
}

function genId(p){ return (p||"id") + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function debounce(fn, ms){ let t; return function(){ clearTimeout(t); const a = arguments, s = this; t = setTimeout(()=>fn.apply(s, a), ms); }; }
function fmt(sec){
  sec = Math.floor(sec||0);
  const h = Math.floor(sec/3600), m = Math.floor((sec%3600)/60), s = sec%60;
  const mm = h ? String(m).padStart(2,"0") : m;
  const ss = String(s).padStart(2,"0");
  return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
function totalChapters(course){
  return (course && course.videos || []).reduce((n, v)=> n + (v.chapters||[]).length, 0);
}
function countVideos(course){ return (course && course.videos || []).length; }
function courseProgress(course){
  if(!course) return { pct:0, doneVideos:0, totalVideos:0 };
  const vids = course.videos || [];
  let sum = 0, done = 0;
  vids.forEach(v=>{
    const p = CACHE.progress[course.id] && CACHE.progress[course.id][v.videoId];
    const chs = v.chapters || [];
    let vpct = 0;
    if(p){
      if(p.completed) vpct = 100;
      else if(chs.length && p.chapterCompleted){
        const doneCh = chs.filter(ch=>p.chapterCompleted[ch.t]).length;
        vpct = Math.round((doneCh / chs.length) * 100);
      } else if(p.duration){
        vpct = Math.min(100, Math.round((p.time / p.duration) * 100));
      }
    }
    if(vpct >= 100) done++;
    sum += vpct;
  });
  return { pct: vids.length ? Math.round(sum / vids.length) : 0, doneVideos: done, totalVideos: vids.length };
}

/* ---------- YouTube helpers ---------- */
function extractVideoId(input){
  if(!input) return null;
  const s = String(input).trim();
  let m = s.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/|playlist\?.*)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if(m) return m[1];
  if(/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  return null;
}
async function fetchVideoMeta(videoId){
  try{
    const u = `https://www.youtube.com/oembed?url=${encodeURIComponent("https://www.youtube.com/watch?v="+videoId)}&format=json`;
    const r = await fetch(u);
    if(r.ok){ const j = await r.json(); return { title: j.title || "", thumb: thumb(videoId) }; }
  }catch(e){}
  return { title: "", thumb: thumb(videoId) };
}

/* ---------- Chapter parsing (tolerant) ---------- */
const MAX_CHAPTERS = 200;
const MAX_VIDEOS = 100;
const MAX_TITLE_LEN = 200;
const MAX_DESC_LEN = 2000;
const MAX_URL_LEN = 500;
const MAX_NAME_LEN = 60;

function toSeconds(v){
  if(typeof v === "number"){ return isFinite(v) ? Math.round(v) : null; }
  const s = String(v).trim();
  if(/^\d+(\.\d+)?$/.test(s)){ const n = parseFloat(s); return Math.round(n); }
  let m = s.match(/^(?:(\d{1,2}):)?(\d{1,2}):(\d{2}(?:[.,]\d+)?)$/);
  if(m){
    const h = m[1]?parseInt(m[1],10):0, mm = parseInt(m[2],10), ss = parseFloat(m[3].replace(",","."));
    return Math.round(h*3600 + mm*60 + ss);
  }
  return null;
}
const RESERVED_KEYS = new Set(["__proto__", "constructor", "prototype"]);
function flattenObj(o, prefix, out){
  out = out || Object.create(null);
  for(const k in o){
    if(RESERVED_KEYS.has(k)) continue;
    const v = o[k];
    const key = (prefix ? prefix + "_" + k : k).toLowerCase();
    if(v && typeof v === "object" && !Array.isArray(v)) flattenObj(v, key, out);
    else out[key] = v;
  }
  return out;
}
function pickTime(o){
  const order = ["seconds","t","time","start","start_time","starttime","startseconds","timestamp","ts","ms","start_ms","time_seconds","time_in_seconds"];
  for(const k of order){
    if(o[k] !== undefined && o[k] !== null && o[k] !== "") return toSeconds(o[k]);
  }
  return null;
}
function pickTitle(o){
  const order = ["l","label","title","name","text","heading","chapter","description","desc","chapter_title"];
  for(const k of order){
    if(o[k] && typeof o[k] === "string" && String(o[k]).trim()) return String(o[k]).trim();
  }
  return null;
}
function normalizeChapterArray(arr){
  const out = [];
  for(const raw of arr){
    if(!raw || typeof raw !== "object") continue;
    const o = flattenObj(raw);
    let t = pickTime(o);
    let title = pickTitle(o);
    if(title == null && t == null) continue;
    if(title == null){
      for(const k in o){
        const val = o[k];
        if(typeof val === "string" && val.trim() && toSeconds(val) === t && !/^\d+$/.test(val.trim())){
          title = val.trim(); break;
        }
      }
    }
    if(title == null){
      const anyStr = Object.values(o).find(v => typeof v === "string" && v.trim() && v.trim().length > 3);
      title = anyStr ? anyStr.trim() : "";
    }
    if(t != null && title) out.push({t, l: String(title).slice(0, MAX_TITLE_LEN)});
    if(out.length >= MAX_CHAPTERS) break;
  }
  out.sort((a,b)=>a.t-b.t);
  return out.length ? out : null;
}
function parseTextChapters(text){
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const out = [];
  let i = 0;
  while(i < lines.length && out.length < MAX_CHAPTERS){
    const line = lines[i];
    const cue = line.match(/^(\d{2}:\d{2}(?::\d{2})?)[,.]\d+\s*-->/);
    if(cue){
      let t = toSeconds(cue[1]);
      i++;
      if(i < lines.length && /^\d+$/.test(lines[i])) i++;
      const parts = [];
      while(i < lines.length){
        if(/^\d{2}:\d{2}(?::\d{2})?[,.]\d+\s*-->/.test(lines[i]) || /^\d+$/.test(lines[i]) && /^\d{2}:\d{2}/.test(lines[i+1]||"")) break;
        if(/^\d{2}:\d{2}(?::\d{2})?[,.]\d+\s*-->/.test(lines[i])) break;
        parts.push(lines[i]); i++;
      }
      if(parts.length && t != null) out.push({t, l: parts.join(" ").trim().slice(0, MAX_TITLE_LEN)});
      continue;
    }
    const m = line.match(/^(?:(\d{1,2}):)?(\d{1,2}):(\d{2})\s+(.+)$/);
    if(m){
      const h = m[1]?parseInt(m[1],10):0;
      out.push({ t: h*3600 + parseInt(m[2],10)*60 + parseInt(m[3],10), l: m[4].trim().slice(0, MAX_TITLE_LEN) });
    }
    i++;
  }
  out.sort((a,b)=>a.t-b.t);
  return out.length ? out : null;
}
function parseChapters(input){
  if(typeof input !== "string") return null;
  const text = input.trim();
  if(!text) return null;
  try{
    const data = JSON.parse(text);
    if(Array.isArray(data)){ const c = normalizeChapterArray(data); if(c) return c; }
    else if(data && typeof data === "object"){
      const keys = ["chapters","data","items","list","marks","markers","chapter","chaptersData","segments"];
      for(const k of keys){
        if(Array.isArray(data[k])){ const c = normalizeChapterArray(data[k]); if(c) return c; }
      }
      const c = normalizeChapterArray([data]);
      if(c) return c;
    }
  }catch(e){ /* not JSON — fall through to text parse */ }
  return parseTextChapters(text);
}

/* ============================================================
   LOCAL STORAGE LAYER  (works with or without Firebase)
   ============================================================ */
const LS = {
  courses: "bp_courses_v2",
  bookmarks: "bp_bookmarks_v2",
  myCourses: "bp_myCourses_v2",
  paths: "bp_paths_v2",
  progress: "bp_progress_v2",
  journey: "bp_journey_v2",
  lastActive: "bp_lastActive_v2"
};
function lsGet(key, fallback){
  try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e){ return fallback; }
}
function lsSet(key, val){
  try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){}
}

/* ============================================================
   APP STATE
   ============================================================ */
const CACHE = {
  user: null,
  allCourses: {},       // id -> course (merged, local + firestore)
  firestoreCourses: {}, // id -> course pulled from Firestore
  bookmarks: {},        // id -> { savedAt }
  myCourses: {},        // id -> copy snapshot
  paths: {},            // id -> path (own)
  publicPaths: {},      // id -> path (public, from other users)
  progress: {},         // courseId -> videoId -> progress
  journey: lsGet(LS.journey, { createCourse:false, createPath:false, startLearning:false }),
  lastActive: lsGet(LS.lastActive, null)
};
let viewName = "explore";
let learningTab = "courses";
let currentPathId = null;
let searchTerm = "";

/* hydration from local storage (guest data + offline cache) */
(function hydrateLocal(){
  const localCourses = lsGet(LS.courses, {});
  Object.assign(CACHE.allCourses, localCourses);
  const myCourses = lsGet(LS.myCourses, {});
  Object.assign(CACHE.allCourses, myCourses);
  CACHE.myCourses = myCourses;
  CACHE.bookmarks = lsGet(LS.bookmarks, {});
  CACHE.paths = lsGet(LS.paths, {});
  CACHE.progress = lsGet(LS.progress, {});
})();

function saveLocalState(){
  const localOnly = {};
  for(const id in CACHE.allCourses){
    const c = CACHE.allCourses[id];
    if(c && c.kind === "local") localOnly[id] = c;
  }
  lsSet(LS.courses, localOnly);
  lsSet(LS.myCourses, CACHE.myCourses);
  lsSet(LS.bookmarks, CACHE.bookmarks);
  lsSet(LS.paths, CACHE.paths);
  lsSet(LS.progress, CACHE.progress);
  lsSet(LS.journey, CACHE.journey);
  lsSet(LS.lastActive, CACHE.lastActive);
}

function isMine(course){
  if(!course) return false;
  if(CACHE.user && course.ownerId === CACHE.user.uid) return true;
  if(!CACHE.user && course.kind === "local") return true;
  return !!CACHE.myCourses[course.id];
}
function courseKindBadge(course){
  if(!course) return "";
  if(CACHE.myCourses[course.id] && course.kind === "copy") return `<span class="badge copy">${svg("copy","sm")} Copy</span>`;
  if(course.kind === "local") return `<span class="badge local">${svg("rectangle-stack","sm")} Local</span>`;
  return course.visibility === "public"
    ? `<span class="badge public">${svg("eye","sm")} Public</span>`
    : `<span class="badge private">${svg("lock-closed","sm")} Private</span>`;
}
function isMinePath(p){
  if(!p) return false;
  if(!CACHE.user) return true;
  return !!CACHE.paths[p.id] || p.ownerId === CACHE.user.uid;
}
function pathKindBadge(p){
  if(!p) return "";
  if(!CACHE.user) return `<span class="badge local">${svg("rectangle-stack","sm")} Local</span>`;
  return p.visibility === "public"
    ? `<span class="badge public">${svg("eye","sm")} Public</span>`
    : `<span class="badge private">${svg("lock-closed","sm")} Private</span>`;
}
function normalizeFsPath(id, data, kind){
  if(!data) return null;
  return {
    id,
    name: String(data.name || "Untitled path").slice(0, MAX_TITLE_LEN),
    description: String(data.description || "").slice(0, MAX_DESC_LEN),
    courseIds: Array.isArray(data.courseIds)
      ? data.courseIds.filter(x => typeof x === "string").slice(0, MAX_VIDEOS)
      : [],
    visibility: data.visibility === "public" ? "public" : "private",
    ownerId: data.ownerId || (kind === "mine" ? (CACHE.user ? CACHE.user.uid : "") : ""),
    ownerName: String(data.ownerName || (kind === "mine" ? (CACHE.user ? CACHE.user.displayName : "You") : "Anonymous")).slice(0, MAX_NAME_LEN),
    copiedFrom: data.copiedFrom || null,
    createdAt: data.createdAt || Date.now(),
    kind
  };
}
function resolvePathsList(){
  const mineId = CACHE.user ? CACHE.user.uid : null;
  return [
    ...Object.values(CACHE.paths).filter(Boolean),
    ...Object.values(CACHE.publicPaths).filter(Boolean).filter(p=> p && p.ownerId !== mineId && !CACHE.paths[p.id])
  ];
}

/* ============================================================
   TOASTS
   ============================================================ */
function toast(msg, type){
  type = type || "info";
  const root = $("#toastRoot");
  const el = document.createElement("div");
  el.className = "toast " + type;
  const ic = type === "success" ? "check-circle" : (type === "error" ? "exclamation-triangle" : "information-circle");
  el.innerHTML = svg(ic) + `<span>${esc(msg)}</span>`;
  root.appendChild(el);
  setTimeout(()=>{ el.style.opacity = "0"; el.style.transition = "opacity .3s"; setTimeout(()=>el.remove(), 300); }, 3200);
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function showView(name){
  viewName = name;
  $$(".view").forEach(v=>v.classList.remove("active"));
  const target = $("#view" + name.charAt(0).toUpperCase() + name.slice(1));
  if(target) target.classList.add("active");
  $$(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.nav === name));
  renderView();
  window.scrollTo(0,0);
}
function renderView(){
  if(viewName === "explore") renderExplore();
  else if(viewName === "learning") renderLearning();
  else if(viewName === "path") renderPath();
  else if(viewName === "player") renderPlayer();
}

/* ============================================================
   TOPBAR
   ============================================================ */
function safePhotoUrl(u){
  try{
    const url = new URL(String(u || ""), location.href);
    if(url.protocol === "http:" || url.protocol === "https:") return String(u);
  }catch(e){}
  return "";
}
function renderTopbar(){
  const area = $("#authArea");
  const user = CACHE.user;
  if(!user){
    area.innerHTML = `
      <button class="btn sm primary" data-action="signin">${svg("arrow-right-on-rectangle","sm")} Sign in with Google</button>`;
  }else{
    const photo = safePhotoUrl(user.photoURL)
      ? `<img class="avatar" src="${escAttr(safePhotoUrl(user.photoURL))}" alt="">`
      : `<span class="avatar" style="display:flex;align-items:center;justify-content:center;color:var(--accent)">${svg("user-circle","sm")}</span>`;
    area.innerHTML = `
      <button class="btn sm" data-action="create-menu">${svg("plus","sm")} Create</button>
      <button class="btn icon" data-action="toggle-menu">${photo}</button>
      <div class="auth-menu" id="authMenu" hidden>
        <div class="am-name">${esc(user.displayName || "Learner")}</div>
        <div class="am-email">${esc(user.email || "")}</div>
        <hr>
        <button class="btn sm ghost" data-action="signout" style="width:100%;justify-content:flex-start;">${svg("arrow-right-on-rectangle","sm")} Sign out</button>
      </div>`;
  }
  area.querySelectorAll("[data-action]").forEach(b=>{
    b.addEventListener("click", e=>{
      e.stopPropagation();
      const a = b.dataset.action;
      if(a === "signin") signInGoogle();
      else if(a === "signout"){ signOut(); hideAuthMenu(); }
      else if(a === "toggle-menu"){ toggleAuthMenu(); }
      else if(a === "create-menu"){ openCreateMenu(b); }
    });
  });
  function toggleAuthMenu(){
    const m = $("#authMenu"); if(!m) return;
    m.hidden = !m.hidden;
  }
  function hideAuthMenu(){ const m = $("#authMenu"); if(m) m.hidden = true; }
  function openCreateMenu(btn){
    if(!btn) return;
    const r = btn.getBoundingClientRect();
    // simple: two inline quick actions
    const menu = document.createElement("div");
    menu.className = "auth-menu";
    menu.style.top = "44px"; menu.style.left = "0"; menu.style.right = "auto";
    menu.innerHTML = `
      <button class="btn sm ghost" data-action="open-course-modal" style="width:100%;justify-content:flex-start;margin-bottom:4px;">${svg("video-camera","sm")} New course / playlist</button>
      <button class="btn sm ghost" data-action="open-path-modal" style="width:100%;justify-content:flex-start;">${svg("map","sm")} New path</button>`;
    btn.parentNode.appendChild(menu);
    const close = (e)=>{ if(!menu.contains(e.target) && e.target !== btn){ menu.remove(); document.removeEventListener("click", close); } };
    setTimeout(()=>document.addEventListener("click", close), 0);
    menu.querySelector("[data-action='open-course-modal']").onclick = ()=>{ menu.remove(); openCourseModal(); };
    menu.querySelector("[data-action='open-path-modal']").onclick = ()=>{ menu.remove(); openPathModal(); };
  }
}
document.addEventListener("click", (e)=>{
  const m = $("#authMenu");
  if(m && !m.hidden && !e.target.closest("#authArea")) m.hidden = true;
});

/* ============================================================
   JOURNEY
   ============================================================ */
function journeyHTML(){
  const j = CACHE.journey;
  if(j.createCourse && j.createPath && j.startLearning) return "";
  const steps = [
    { key:"createCourse", n:"Step 1", t:"Create a course", d:"Add a video link and paste its chapter JSON.", act:"open-course-modal", icon:"video-camera", go:"Create course" },
    { key:"createPath", n:"Step 2", t:"Build a path", d:"Group your courses into a learning path.", act:"open-path-modal", icon:"map", go:"Create path" },
    { key:"startLearning", n:"Step 3", t:"Start learning", d:"Open a course and watch — your progress auto-saves.", act:"open-any", icon:"play", go:"Pick a course" }
  ];
  return `
  <div class="journey">
    <div class="journey-head">
      ${svg("sparkles")}
      <h3>Your learning journey</h3>
      <span class="j-hint">3 quick steps to get going</span>
    </div>
    <div class="j-steps">
      ${steps.map(s=>`
        <div class="j-step ${j[s.key]?'done':''}">
          <span class="j-ic">${j[s.key] ? svg("check-circle") : svg(s.icon)}</span>
          <div style="flex:1">
            <div class="j-num">${s.n}</div>
            <div class="j-t">${s.t}</div>
            <div class="j-d">${s.d}</div>
            ${j[s.key] ? `<div class="j-d" style="color:var(--good);display:flex;align-items:center;gap:5px;margin-top:6px;">${svg("check","sm")} Done</div>`
                        : `<button class="btn sm primary j-go" data-action="${s.act}">${s.go}</button>`}
          </div>
        </div>`).join("")}
    </div>
  </div>`;
}

/* ============================================================
   EXPLORE
   ============================================================ */
function resolveCoursesList(){
  return Object.values(CACHE.allCourses).filter(Boolean);
}
function renderExplore(){
  const root = $("#exploreRoot");
  const user = CACHE.user;
  const courses = resolveCoursesList();
  const paths = resolvePathsList();
  const q = searchTerm.trim().toLowerCase();
  const matchCourse = c=> !q || (c.title+" "+(c.description||"")).toLowerCase().includes(q);
  const matchPath = p=> {
    if(!q) return true;
    const names = (p.courseIds||[]).map(id=>CACHE.allCourses[id]).filter(Boolean).map(c=>c.title).join(" ");
    return (p.name+" "+(p.description||"")+" "+names).toLowerCase().includes(q);
  };
  const items = [
    ...courses.filter(matchCourse).map(c=>({ kind:"course", item:c, t:c.createdAt||0 })),
    ...paths.filter(matchPath).map(p=>({ kind:"path", item:p, t:p.createdAt||0 }))
  ];
  items.sort((a,b)=> b.t - a.t);
  const empty = courses.length === 0 && paths.length === 0;

  let hero = "";
  if(!user && empty){
    hero = `
    <div class="hero">
      <span class="h-icon">${svg("academic-cap","xl")}</span>
      <h2>Build your own path to mastery.</h2>
      <p>Create courses from any YouTube video, bring in its chapters in one paste, bundle them into learning paths, and track your progress. Everything is saved for you.</p>
      <div class="actions">
        <button class="btn primary" data-action="signin">${svg("arrow-right-on-rectangle")} Sign in with Google</button>
        <button class="btn" data-action="open-course-modal">${svg("video-camera")} Or start building right away</button>
      </div>
      <div class="step-line">${svg("queue-list")} <span><b>1.</b> Paste a video link &nbsp;·&nbsp; <b>2.</b> Grab chapters JSON at y2tool.com &nbsp;·&nbsp; <b>3.</b> Start learning</span></div>
    </div>`;
  } else if(!user){
    hero = `
    <div class="hero">
      <span class="h-icon">${svg("user-circle","xl")}</span>
      <h2>You're exploring as a guest.</h2>
      <p>Sign in with Google to sync your courses, paths and progress across devices with Firebase.</p>
      <div class="actions"><button class="btn primary" data-action="signin">${svg("arrow-right-on-rectangle")} Sign in with Google</button></div>
    </div>`;
  } else if(empty){
    hero = `
    <div class="hero">
      <span class="h-icon">${svg("sparkles","xl")}</span>
      <h2>Welcome. Let's build your first course.</h2>
      <p>There's nothing here yet — that's the point. Paste a YouTube link, add its chapters, and build the learning path that fits you.</p>
      <div class="actions"><button class="btn primary" data-action="open-course-modal">${svg("video-camera")} Create your first course</button></div>
    </div>`;
  }

  const journey = journeyHTML();
  const laCourse = (CACHE.lastActive && CACHE.allCourses[CACHE.lastActive.courseId]) || null;
  let resumeCard = "";
  if(laCourse){
    const cp = courseProgress(laCourse);
    resumeCard = `
    <div class="resume-card">
      <button class="btn primary" data-action="resume">${svg("play")} Resume · ${esc(laCourse.title)}</button>
      <div class="resume-prog">
        <div class="mc-progress"><b style="width:${cp.pct}%"></b></div>
        <span class="rc-pct">${cp.pct}% complete · ${cp.doneVideos} of ${cp.totalVideos} video${cp.totalVideos===1?"":"s"} done</span>
      </div>
    </div>`;
  }

  const noResults = q && items.length === 0;

  root.innerHTML = `
    ${hero}
    ${journey}
    <div class="search">${svg("magnifying-glass")}<input type="text" id="exploreSearch" placeholder="Search courses, playlists and paths…" value="${esc(searchTerm)}"></div>
    ${resumeCard ? `<div style="margin-bottom:20px;">${resumeCard}</div>` : ""}
    <div class="section-title">
      ${svg("book-open")} <h3>Courses, playlists &amp; paths</h3>
      <span class="n">${items.length} total</span>
      <span class="right">
        <button class="btn sm" data-action="open-course-modal">${svg("plus","sm")} New course</button>
        <button class="btn sm" data-action="open-path-modal">${svg("plus","sm")} New path</button>
      </span>
    </div>
    ${noResults
      ? `<div class="empty"><span class="e-ic">${svg("magnifying-glass","xl")}</span><h4>No results for “${esc(searchTerm)}”</h4><p>Try a different title, description, or path name.</p></div>`
      : items.length
        ? `<div class="grid">${items.map(i=> i.kind === "path" ? pathCard(i.item) : courseCard(i.item)).join("")}</div>`
        : `<div class="empty"><span class="e-ic">${svg("book-open","xl")}</span><h4>Nothing here yet</h4><p>Create a course from a YouTube video + its chapter JSON, or bundle courses into a learning path.</p><div style="display:flex; gap:10px; justify-content:center;"><button class="btn primary" data-action="open-course-modal">${svg("video-camera")} New course</button><button class="btn" data-action="open-path-modal">${svg("map")} New path</button></div></div>`}
  `;
  const inp = $("#exploreSearch");
  if(inp) inp.addEventListener("input", e=>{
    searchTerm = e.target.value;
    renderExplore();
    const ni = $("#exploreSearch");
    if(ni){ ni.focus(); const len = ni.value.length; ni.setSelectionRange(len, len); }
  });
  attachCourseActions(root);
}
function courseCard(c){
  const vids = c.videos || [];
  const first = vids[0];
  const t = first ? thumb(first.videoId) : "";
  const chCount = totalChapters(c);
  const isBookmarked = !!CACHE.bookmarks[c.id];
  const mine = isMine(c);
  return `
  <div class="course-card" data-course-id="${escAttr(c.id)}">
    <div class="cc-thumb" style="${first ? bg(first.videoId) : ""}">
      ${t ? "" : svg("video-camera","xl")}
      <span class="cc-count">${svg("queue-list","sm")} ${vids.length} video${vids.length===1?"":"s"}</span>
    </div>
    <div class="cc-body">
      <h4>${esc(c.title)}</h4>
      ${c.description ? `<p class="cc-desc">${esc(c.description)}</p>` : `<p class="cc-desc">${vids.length} video${vids.length===1?"":"s"} · ${chCount} chapter${chCount===1?"":"s"}</p>`}
      <div class="cc-meta">
        <span class="badge course">${svg("video-camera","sm")} Course</span>
        ${courseKindBadge(c)}
        <span class="badge">${svg("document-text","sm")} ${chCount} ch.</span>
        <span class="badge">${svg("user-circle","sm")} ${esc(c.ownerName || "You")}</span>
      </div>
      <div class="cc-actions">
        <button class="btn sm primary" data-action="open-course" data-id="${escAttr(c.id)}">${svg("play","sm")} Learn</button>
        <button class="btn sm icon ${isBookmarked?"":"ghost"}" data-action="bookmark" data-id="${escAttr(c.id)}" title="${isBookmarked?"Remove bookmark":"Bookmark"}" style="${isBookmarked?"color:var(--accent);":""}">${svg("bookmark","sm")}</button>
        <button class="btn sm icon ghost" data-action="copy-course" data-id="${escAttr(c.id)}" title="Make a copy">${svg("copy","sm")}</button>
        ${mine ? `<button class="btn sm icon ghost" data-action="edit-course" data-id="${escAttr(c.id)}" title="Edit">${svg("pencil","sm")}</button>
                  <button class="btn sm icon ghost" data-action="delete-course" data-id="${escAttr(c.id)}" title="Delete">${svg("trash","sm")}</button>` : ""}
      </div>
    </div>
  </div>`;
}
function pathCard(p){
  const refs = (p.courseIds||[]).map(id=>CACHE.allCourses[id]).filter(Boolean);
  const nCourses = (p.courseIds||[]).length;
  const vCount = refs.reduce((n,c)=>n+(c.videos||[]).length,0);
  const chCount = refs.reduce((n,c)=>n+totalChapters(c),0);
  const missing = nCourses - refs.length;
  const mine = isMinePath(p);
  const ownerBadge = (!mine && p.ownerName) ? `<span class="badge" title="Owner">${svg("user-circle","sm")} ${esc(p.ownerName)}</span>` : "";
  return `
  <div class="course-card path-card" data-path-id="${escAttr(p.id)}">
    <div class="cc-thumb path-thumb">${svg("map","xl")}
      <span class="cc-count">${svg("map","sm")} Path · ${nCourses} course${nCourses===1?"":"s"}</span>
    </div>
    <div class="cc-body">
      <h4>${esc(p.name || "Untitled path")}</h4>
      ${p.description ? `<p class="cc-desc">${esc(p.description)}</p>` : `<p class="cc-desc">${vCount} video${vCount===1?"":"s"} · ${chCount} chapter${chCount===1?"":"s"}${missing ? ` · +${missing} unavailable` : ""}</p>`}
      <div class="cc-meta">
        <span class="badge path">${svg("map","sm")} Path</span>
        ${pathKindBadge(p)}
        ${ownerBadge}
        <span class="badge">${svg("queue-list","sm")} ${vCount} vid</span>
        <span class="badge">${svg("document-text","sm")} ${chCount} ch.</span>
      </div>
      <div class="cc-actions">
        <button class="btn sm primary" data-action="open-path" data-id="${escAttr(p.id)}">${svg("folder","sm")} Open</button>
        ${mine
          ? `<button class="btn sm icon ghost" data-action="edit-path" data-id="${escAttr(p.id)}" title="Edit">${svg("pencil","sm")}</button>
             <button class="btn sm icon ghost" data-action="delete-path" data-id="${escAttr(p.id)}" title="Delete">${svg("trash","sm")}</button>`
          : `<button class="btn sm" data-action="copy-path" data-id="${escAttr(p.id)}">${svg("copy","sm")} Make a copy</button>`}
      </div>
    </div>
  </div>`;
}
function attachCourseActions(root){
  if(root.dataset.bound) return;
  root.dataset.bound = "1";
  root.addEventListener("click", e=>{
    const b = e.target.closest("[data-action]");
    if(!b) return;
    const a = b.dataset.action, id = b.dataset.id;
    if(a === "signin") signInGoogle();
    else if(a === "open-course") openCourse(id);
    else if(a === "resume"){ const la = CACHE.lastActive; if(la) openCourse(la.courseId, la.videoId); }
    else if(a === "bookmark"){ id ? toggleBookmark(id) : toast("Bookmark unavailable", "info"); }
    else if(a === "copy-course") copyCourse(id);
    else if(a === "edit-course") openCourseModal(id);
    else if(a === "delete-course") confirmDeleteCourse(id);
    else if(a === "open-path") openPath(id);
    else if(a === "edit-path") openPathModal(id);
    else if(a === "delete-path") confirmDeletePath(id);
    else if(a === "copy-path") copyPath(id);
    else if(a === "open-course-modal") openCourseModal();
    else if(a === "open-path-modal") openPathModal();
    else if(a === "open-any"){ const any = resolveCoursesList()[0]; if(any) openCourse(any.id); else openCourseModal(); }
  });
}

/* ============================================================
   BOOKMARKS / COPIES / DELETE
   ============================================================ */
function toggleBookmark(courseId){
  const exists = !!CACHE.bookmarks[courseId];
  if(exists) delete CACHE.bookmarks[courseId];
  else CACHE.bookmarks[courseId] = { savedAt: Date.now() };
  if(CACHE.user && fDb){
    const ref = fDb.collection("users").doc(CACHE.user.uid).collection("bookmarks").doc(courseId);
    if(!writeOk()){ toast("Too many changes — slow down.", "error"); }
    else if(exists) ref.delete().catch(()=>{});
    else ref.set({ savedAt: Date.now() }).catch(()=>{});
  }
  saveLocalState();
  toast(exists ? "Bookmark removed" : "Course bookmarked", "success");
  renderView();
}
function copyCourse(courseId){
  const src = CACHE.allCourses[courseId];
  if(!src){ toast("Course not found.", "error"); return; }
  const copy = JSON.parse(JSON.stringify(src));
  copy.id = genId("c");
  copy.kind = "copy";
  copy.title = (src.title || "Course").slice(0, MAX_TITLE_LEN) + " (copy)";
  copy.ownerId = CACHE.user ? CACHE.user.uid : "";
  copy.ownerName = CACHE.user ? (CACHE.user.displayName || "You").slice(0, MAX_NAME_LEN) : "You";
  copy.visibility = "private";
  copy.copiedFrom = src.id;
  copy.createdAt = Date.now();
  copy.originalId = src.id;
  copy.videos = (copy.videos||[]).slice(0, MAX_VIDEOS).map(v=>({
    videoId: sanitizeVideoId(v.videoId),
    url: String(v.url||"").slice(0, MAX_URL_LEN),
    title: String(v.title||"Video").slice(0, MAX_TITLE_LEN),
    chapters: (v.chapters||[]).slice(0, MAX_CHAPTERS).map(x=>({ t:+x.t||0, l:String(x.l||"").slice(0, MAX_TITLE_LEN) }))
  }));
  CACHE.myCourses[copy.id] = copy;
  CACHE.allCourses[copy.id] = copy;
  if(CACHE.user && fDb){
    if(writeOk()) fDb.collection("users").doc(CACHE.user.uid).collection("myCourses").doc(copy.id).set(firestoreCourseData(copy)).catch(err=>toast(err.message, "error"));
  }
  saveLocalState();
  toast("Copy saved to My Courses", "success");
  renderView();
}
function copyPath(pathId){
  const src = resolvePathsList().find(p=>p.id === pathId) || CACHE.paths[pathId];
  if(!src){ toast("Path not found.", "error"); return; }
  const copy = {
    id: genId("p"),
    name: (src.name || "Untitled path").slice(0, MAX_TITLE_LEN) + " (copy)",
    description: String(src.description || "").slice(0, MAX_DESC_LEN),
    courseIds: (src.courseIds||[]).filter(id=>CACHE.allCourses[id]).slice(0, MAX_VIDEOS),
    visibility: "private",
    ownerId: CACHE.user ? CACHE.user.uid : "",
    ownerName: CACHE.user ? (CACHE.user.displayName || "You").slice(0, MAX_NAME_LEN) : "You",
    copiedFrom: src.id,
    createdAt: Date.now()
  };
  CACHE.paths[copy.id] = copy;
  savePathToBackend(copy.id);
  saveLocalState();
  toast("Path copied to My Paths", "success");
  renderView();
}
function confirmDeleteCourse(id){
  const c = CACHE.allCourses[id];
  if(!c) return;
  const isCopy = !!CACHE.myCourses[id];
  const msg = isCopy
    ? `Delete your copy of "${c.title}"? This removes it from your library.`
    : `Delete "${c.title}"? Other users' bookmarks will no longer resolve.`;
  openConfirm(msg, ()=>{
    delete CACHE.allCourses[id];
    if(isCopy){
      delete CACHE.myCourses[id];
      if(CACHE.user && fDb && writeOk()) fDb.collection("users").doc(CACHE.user.uid).collection("myCourses").doc(id).delete().catch(()=>{});
    }else{
      if(CACHE.user && fDb && c.ownerId === CACHE.user.uid && writeOk()) fDb.collection("courses").doc(id).delete().catch(()=>{});
      // clean up references inside paths
      for(const pid in CACHE.paths){
        const p = CACHE.paths[pid];
        if(p.courseIds) p.courseIds = p.courseIds.filter(x=>x!==id);
        savePathToBackend(pid);
      }
      delete CACHE.bookmarks[id];
    }
    saveLocalState();
    toast("Course deleted", "info");
    renderView();
  });
}

/* ============================================================
   MY LEARNING
   ============================================================ */
function renderLearning(){
  const root = $("#learningRoot");
  const user = CACHE.user;
  if(!user){
    root.innerHTML = `
      <div class="hero">
        <span class="h-icon">${svg("square-2-stack","xl")}</span>
        <h2>Your library lives here.</h2>
        <p>Sign in with Google to save courses, copies, bookmarks and paths to Firebase — and keep them in sync across every device.</p>
        <div class="actions"><button class="btn primary" data-action="signin">${svg("arrow-right-on-rectangle")} Sign in with Google</button></div>
      </div>`;
    root.querySelector("[data-action='signin']").onclick = signInGoogle;
    return;
  }
  const journey = journeyHTML();
  const tabs = [
    { key:"courses", label:"My Courses", icon:"video-camera" },
    { key:"saved", label:"Saved", icon:"bookmark" },
    { key:"paths", label:"Paths", icon:"map" }
  ];
  const ownedIds = new Set(Object.values(CACHE.allCourses).filter(c=> c && c.kind !== "copy" && isMine(c)).map(c=>c.id));
  const counts = {
    courses: ownedIds.size + Object.keys(CACHE.myCourses).length,
    saved: Object.keys(CACHE.bookmarks).length,
    paths: Object.keys(CACHE.paths).length
  };
  if(!root.dataset.bound){
    root.dataset.bound = "1";
    root.addEventListener("click", e=>{
      const b = e.target.closest("[data-action]");
      if(!b) return;
      const a = b.dataset.action;
      if(a === "open-course-modal") openCourseModal();
      else if(a === "open-path-modal") openPathModal();
      else if(a === "open-any"){ const any = resolveCoursesList()[0]; if(any) openCourse(any.id); else openCourseModal(); }
      else if(a === "signin") signInGoogle();
    });
  }
  root.innerHTML = `${journey}<div class="tabs">
      ${tabs.map(t=>`<button class="tab ${learningTab===t.key?"active":""}" data-tab="${t.key}">${svg(t.icon,"sm")} ${t.label} <span class="cnt">${counts[t.key]}</span></button>`).join("")}
    </div>
    <div id="learningBody"></div>`;
  $$(".tab", root).forEach(t=> t.addEventListener("click", ()=>{ learningTab = t.dataset.tab; renderLearning(); }));
  renderLearningBody($("#learningBody"));
}
function renderLearningBody(body){
  if(learningTab === "courses"){
    const allOwned = Object.values(CACHE.allCourses).filter(c=> c && c.kind !== "copy" && isMine(c));
    const all = [...allOwned, ...Object.values(CACHE.myCourses)];
    if(!all.length){
      body.innerHTML = `<div class="empty"><span class="e-ic">${svg("video-camera","xl")}</span><h4>You don't have any courses yet</h4><p>Create one from a YouTube link + chapter JSON, or copy one from Explore to keep as your own editable version.</p><button class="btn primary" data-action="open-course-modal">${svg("plus")} Create a course</button></div>`;
      body.querySelector("[data-action='open-course-modal']").onclick = openCourseModal;
      return;
    }
    body.innerHTML = `<div class="list">${all.map(c=>rowCourseCard(c)).join("")}</div>`;
    attachCourseActions(body);
  }
  else if(learningTab === "saved"){
    const saved = Object.keys(CACHE.bookmarks).map(id=>CACHE.allCourses[id]).filter(Boolean);
    if(!saved.length){
      body.innerHTML = `<div class="empty"><span class="e-ic">${svg("bookmark","xl")}</span><h4>Nothing saved yet</h4><p>Tap the bookmark icon on any course in Explore to keep it here for quick access.</p><button class="btn" data-action="go-explore">${svg("globe-alt")} Browse courses</button></div>`;
      body.querySelector("[data-action='go-explore']").onclick = ()=>showView("explore");
      return;
    }
    body.innerHTML = `<div class="list">${saved.map(c=>rowCourseCard(c, true)).join("")}</div>`;
    attachCourseActions(body);
  }
  else{
    const paths = Object.values(CACHE.paths);
    if(!paths.length){
      body.innerHTML = `<div class="empty"><span class="e-ic">${svg("map","xl")}</span><h4>No paths yet</h4><p>A path groups several courses into one curriculum — great for learning tracks.</p><button class="btn primary" data-action="open-path-modal">${svg("plus")} Create a path</button></div>`;
      body.querySelector("[data-action='open-path-modal']").onclick = openPathModal;
      return;
    }
    body.innerHTML = `<div class="list">${paths.map(pathRow).join("")}</div>
      <div style="margin-top:14px;"><button class="btn" data-action="open-path-modal">${svg("plus")} New path</button></div>`;
    attachCourseActions(body);
  }
}
function rowCourseCard(c, isSaved){
  const vids = c.videos || [];
  const t = vids[0] ? thumb(vids[0].videoId) : "";
  const isCopy = !!CACHE.myCourses[c.id];
  const isBookmarked = !!CACHE.bookmarks[c.id];
  const cp = courseProgress(c);
  return `
  <div class="row-card">
    <div class="rc-thumb" style="${vids[0] ? bg(vids[0].videoId) : ""}">${t?"":svg("video-camera")}</div>
    <div class="rc-main">
      <div class="rc-title">${esc(c.title)}</div>
      <div class="rc-sub">
        <span>${vids.length} video${vids.length===1?"":"s"}</span><span>·</span><span>${totalChapters(c)} chapters</span>
        ${courseKindBadge(c)}
      </div>
      <div class="rc-prog">
        <div class="mc-progress"><b style="width:${cp.pct}%"></b></div>
        <span class="rc-pct">${cp.pct}%</span>
      </div>
    </div>
    <div class="rc-btns">
      <button class="btn sm" data-action="open-course" data-id="${escAttr(c.id)}">${svg("play","sm")} Learn</button>
      ${isCopy ? `<button class="btn sm icon ghost" data-action="edit-course" data-id="${escAttr(c.id)}" title="Edit">${svg("pencil","sm")}</button>` : ""}
      ${isCopy ? `<button class="btn sm icon ghost" data-action="delete-course" data-id="${escAttr(c.id)}" title="Delete">${svg("trash","sm")}</button>`
        : isSaved ? `<button class="btn sm icon ghost" data-action="bookmark" data-id="${escAttr(c.id)}" title="Remove bookmark" style="color:var(--accent);">${svg("bookmark","sm")}</button>`
        : `<button class="btn sm icon ghost" data-action="copy-course" data-id="${escAttr(c.id)}" title="Make a copy">${svg("copy","sm")}</button>`}
    </div>
  </div>`;
}
function pathRow(p){
  const refs = (p.courseIds||[]).map(id=>CACHE.allCourses[id]).filter(Boolean);
  const missing = (p.courseIds||[]).length - refs.length;
  const names = refs.slice(0,3).map(c=>esc(c.title)).join(", ") + (refs.length > 3 ? "…" : "") + (missing ? ` +${missing} unavailable` : "");
  return `
  <div class="row-card">
    <div class="rc-thumb" style="justify-content:flex-start;padding:10px;align-items:center;">${svg("map")}</div>
    <div class="rc-main">
      <div class="rc-title">${esc(p.name || "Untitled path")}</div>
      <div class="rc-sub"><span>${(p.courseIds||[]).length} course${(p.courseIds||[]).length===1?"":"s"}</span><span>·</span><span>${esc(names || "empty path")}</span>${pathKindBadge(p)}</div>
    </div>
    <div class="rc-btns">
      <button class="btn sm" data-action="open-path" data-id="${escAttr(p.id)}">${svg("folder","sm")} Open</button>
      <button class="btn sm icon ghost" data-action="edit-path" data-id="${escAttr(p.id)}" title="Edit">${svg("pencil","sm")}</button>
      <button class="btn sm icon ghost" data-action="delete-path" data-id="${escAttr(p.id)}" title="Delete">${svg("trash","sm")}</button>
    </div>
  </div>`;
}

/* ============================================================
   PATH VIEW
   ============================================================ */
function openPath(id){
  currentPathId = id;
  showView("path");
}
function renderPath(){
  const root = $("#pathRoot");
  const p = resolvePathsList().find(x=>x.id === currentPathId) || CACHE.paths[currentPathId];
  if(!p){
    root.innerHTML = `<div class="empty"><h4>Path not found</h4><p>It may have been deleted.</p><button class="btn" data-action="back-learning">Back to My Learning</button></div>`;
    root.querySelector("[data-action='back-learning']").onclick = ()=>showView("learning");
    return;
  }
  const mine = isMinePath(p);
  const items = (p.courseIds||[]).map(id=>CACHE.allCourses[id]).filter(Boolean);
  const missingCount = (p.courseIds||[]).length - items.length;
  root.innerHTML = `
    <div class="crumbs"><button data-nav="learning">My Learning</button> / <button data-nav="explore">Explore</button> / <span>${esc(p.name)}</span></div>
    <div class="path-head">
      <div class="ph-t">
        <h2>${esc(p.name || "Untitled path")}</h2>
        ${p.description ? `<div class="sub">${esc(p.description)}</div>` : ""}
        <div class="sub">${pathKindBadge(p)} ${!mine && p.ownerName ? `<span class="badge">${svg("user-circle","sm")} ${esc(p.ownerName)}</span>` : ""} ${items.length} course${items.length===1?"":"s"} · ${items.reduce((n,c)=>n+totalChapters(c),0)} chapters</div>
      </div>
      <div style="display:flex;gap:8px;">
        ${mine
          ? `<button class="btn" data-action="edit-path" data-id="${escAttr(p.id)}">${svg("pencil")} Edit</button>
             <button class="btn danger" data-action="delete-path" data-id="${escAttr(p.id)}">${svg("trash")} Delete</button>`
          : `<button class="btn" data-action="copy-path" data-id="${escAttr(p.id)}">${svg("copy")} Make a copy</button>`}
      </div>
    </div>
    ${items.length ? `<div class="list">
      ${items.map((c,i)=>`
        <div class="row-card">
          <div class="rc-thumb" style="${c.videos && c.videos[0] ? bg(c.videos[0].videoId) : ""}">${c.videos&&c.videos[0]?"":svg("video-camera")}</div>
          <div class="rc-main">
            <div class="rc-title">${esc(c.title)}</div>
            <div class="rc-sub"><span>${(c.videos||[]).length} videos</span><span>·</span><span>${totalChapters(c)} chapters</span>${courseKindBadge(c)}</div>
          </div>
          ${mine ? `<div class="order-actions">
            <button class="btn sm icon ghost" data-action="move-up" data-id="${escAttr(p.id)}" data-i="${i}" ${i===0?"disabled":""} title="Move up">${svg("chevron-up","sm")}</button>
            <button class="btn sm icon ghost" data-action="move-down" data-id="${escAttr(p.id)}" data-i="${i}" ${i===items.length-1?"disabled":""} title="Move down">${svg("chevron-down","sm")}</button>
          </div>` : ""}
          <div class="rc-btns">
            <button class="btn sm" data-action="open-course" data-id="${escAttr(c.id)}">${svg("play","sm")} Learn</button>
            ${mine ? `<button class="btn sm icon ghost" data-action="remove-from-path" data-id="${escAttr(p.id)}" data-course="${escAttr(c.id)}" title="Remove">${svg("x-mark","sm")}</button>` : ""}
          </div>
        </div>`).join("")}
      ${missingCount ? `<div class="row-card"><div class="rc-main"><div class="rc-sub">${missingCount} course${missingCount===1?"":"s"} in this path are no longer available.</div></div></div>` : ""}
    </div>` : `<div class="empty"><span class="e-ic">${svg("map","xl")}</span><h4>This path is empty</h4><p>Add courses to turn it into a curriculum.</p></div>`}
    ${mine ? `<div style="margin-top:16px;"><button class="btn primary" data-action="edit-path" data-id="${escAttr(p.id)}">${svg("plus")} Add courses to this path</button></div>` : ""}
  `;
  $$(".crumbs button", root).forEach(b=>b.addEventListener("click", ()=>showView(b.dataset.nav)));
  root.addEventListener("click", e=>{
    const b = e.target.closest("[data-action]");
    if(!b) return;
    const a = b.dataset.action, pid = b.dataset.id;
    const cur = resolvePathsList().find(x=>x.id === pid);
    if(a === "open-course") openCourse(b.dataset.course);
    else if(a === "edit-path"){ if(isMinePath(cur)) openPathModal(pid); }
    else if(a === "delete-path"){ if(isMinePath(cur)) confirmDeletePath(pid); }
    else if(a === "copy-path") copyPath(pid);
    else if(a === "remove-from-path"){
      const p2 = CACHE.paths[pid]; if(!p2) return;
      p2.courseIds = (p2.courseIds||[]).filter(x=>x!==b.dataset.course);
      savePathToBackend(pid); saveLocalState(); renderPath();
    }
    else if(a === "move-up" || a === "move-down"){
      const p3 = CACHE.paths[pid]; if(!p3) return;
      const ids = p3.courseIds||[], i = +b.dataset.i;
      const j = a === "move-up" ? i-1 : i+1;
      if(j < 0 || j >= ids.length) return;
      const resolved = items;
      const moved = resolved[i], swap = resolved[j];
      const mi = ids.indexOf(moved.id), mj = ids.indexOf(swap.id);
      [ids[mi], ids[mj]] = [ids[mj], ids[mi]];
      savePathToBackend(pid); saveLocalState(); renderPath();
    }
  });
}
function confirmDeletePath(pid){
  const p = CACHE.paths[pid]; if(!p) return;
  openConfirm(`Delete path "${p.name || "Untitled"}?" This does not delete the courses in it.`, ()=>{
    delete CACHE.paths[pid];
    if(CACHE.user && fDb && writeOk()) fDb.collection("users").doc(CACHE.user.uid).collection("paths").doc(pid).delete().catch(()=>{});
    saveLocalState();
    toast("Path deleted", "info");
    if(viewName === "path" && currentPathId === pid) showView("learning");
    else renderView();
  });
}
function warnPrivateCoursesInPath(path, privateCourses, onDecision){
  const owned = privateCourses.filter(c=> c && isMine(c) && c.kind !== "copy" && c.kind !== "local");
  const cant = privateCourses.filter(c=> c && !(isMine(c) && c.kind !== "copy" && c.kind !== "local"));
  const overlay = openModal(genId("pathwarn"));
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-head"><h3>${svg("exclamation-triangle")} Private courses in a public path</h3><button class="btn icon ghost" data-close>${svg("x-mark")}</button></div>
      <div class="modal-body" style="font-size:0.9rem;line-height:1.6;">
        <p>Your path "<b>${esc(path.name)}</b>" is Public, but it contains <b>${privateCourses.length}</b> private course${privateCourses.length===1?"":"s"}. Other users won't be able to view them.</p>
        ${privateCourses.length ? `
          <ul class="warn-list">
            ${privateCourses.map(c=>`<li>${esc(c.title)} ${!(isMine(c) && c.kind !== "copy" && c.kind !== "local") ? `<em>(can't be shared)</em>` : ""}</li>`).join("")}
          </ul>` : ""}
        ${cant.length ? `<p class="hint">${cant.length === 1 ? "One course" : `${cant.length} courses`} marked <em>(can't be shared)</em> are copies or local-only — they stay private, but path viewers will see them as unavailable.</p>` : ""}
        <p>What would you like to do?</p>
      </div>
      <div class="modal-foot" style="flex-wrap:wrap;">
        <button class="btn" data-close>Cancel</button>
        <button class="btn" data-dec="private">${svg("lock-closed")} Keep path private</button>
        ${owned.length ? `<button class="btn" data-dec="public">${svg("eye")} Make ${owned.length} course${owned.length===1?"":"s"} public</button>` : ""}
        <button class="btn primary" data-dec="anyway">${svg("check")} Save anyway</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close]").onclick = ()=>closeModal(overlay.id);
  $$("[data-dec]", overlay).forEach(b=> b.addEventListener("click", ()=>{
    closeModal(overlay.id);
    onDecision(b.dataset.dec);
  }));
}

/* ============================================================
   COURSE / VIDEO / PATH MODALS
   ============================================================ */
let courseDraft = null;   // { id, title, description, visibility, videos:[...] }
let videoDraft = null;    // { videoId, url, title, chapters:[...] }
let pathDraft = null;     // { id, name, description, courseIds:Set }
let confirmCb = null;

function openModal(id){
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay show";
  overlay.id = id;
  overlay.addEventListener("mousedown", e=>{ if(e.target === overlay) closeModal(id); });
  $("#modalRoot").appendChild(overlay);
  document.addEventListener("keydown", escHandler);
  return overlay;
}
function closeModal(id){
  const m = $("#" + id);
  if(m) m.remove();
  document.removeEventListener("keydown", escHandler);
}
function escHandler(e){ if(e.key === "Escape"){ const open = $("#modalRoot .modal-overlay"); if(open) closeModal(open.id); } }

function openConfirm(msg, cb){
  const overlay = openModal(genId("confirm"));
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-head"><h3>${svg("exclamation-triangle")} Confirm</h3></div>
      <div class="modal-body" style="font-size:0.9rem;line-height:1.6;">${esc(msg)}</div>
      <div class="modal-foot">
        <button class="btn" data-close>Cancel</button>
        <button class="btn danger" data-ok>Delete</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close]").onclick = ()=>closeModal(overlay.id);
  overlay.querySelector("[data-ok]").onclick = ()=>{ closeModal(overlay.id); cb && cb(); };
}

/* ---------- COURSE MODAL ---------- */
function openCourseModal(courseId){
  const existing = courseId ? CACHE.allCourses[courseId] : null;
  courseDraft = existing ? JSON.parse(JSON.stringify(existing)) : { id:null, title:"", description:"", visibility:"private", videos:[] };
  if(courseDraft.kind) delete courseDraft.kind;
  courseDraft.visibility = courseDraft.visibility === "public" ? "public" : "private";
  const overlay = openModal("courseModal");
  overlay.classList.add("show");
  overlay.innerHTML = `
    <div class="modal wide">
      <div class="modal-head"><h3>${existing ? "Edit course" : "Create a course / playlist"}</h3><button class="btn icon ghost" data-close>${svg("x-mark")}</button></div>
      <div class="modal-body">
        <div class="field"><label>Course title</label><input class="input" id="mc-title" placeholder="e.g. Python for AI — Full Course" value="${escAttr(courseDraft.title)}"></div>
        <div class="field"><label>Description (optional)</label><textarea class="textarea" id="mc-desc" placeholder="What will learners get out of this course?">${esc(courseDraft.description)}</textarea></div>
        <div class="field">
          <label>Visibility</label>
          <div class="vis-toggle">
            <button type="button" class="vis-opt ${courseDraft.visibility==="public"?"on":""}" data-vis="public">${svg("eye")} Public — anyone can find it</button>
            <button type="button" class="vis-opt priv ${courseDraft.visibility==="private"?"on priv":""}" data-vis="private">${svg("lock-closed")} Private — just you</button>
          </div>
        </div>
        <div class="field">
          <label>Videos (${courseDraft.videos.length})</label>
          <div id="mc-videos"></div>
          <button class="btn sm" data-action="add-video">${svg("plus","sm")} Add video</button>
        </div>
      </div>
      <div class="modal-foot">
        <span class="hint" style="margin-right:auto;align-self:center;">A course can hold one or many videos — each with its own chapters.</span>
        <button class="btn" data-close>Cancel</button>
        <button class="btn primary" data-save>${svg("check")} Save course</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close]").onclick = ()=>closeModal(overlay.id);
  $$(".vis-opt", overlay).forEach(b=> b.addEventListener("click", ()=>{
    courseDraft.visibility = b.dataset.vis;
    $$(".vis-opt", overlay).forEach(o=> o.classList.toggle("on", o.dataset.vis === courseDraft.visibility));
  }));
  renderCourseVideos();
  overlay.querySelector("[data-action='add-video']").onclick = ()=>openVideoModal();
  overlay.querySelector("[data-save]").onclick = ()=>{
    courseDraft.title = $("#mc-title").value.trim();
    courseDraft.description = $("#mc-desc").value.trim();
    if(!courseDraft.title){ toast("Please give your course a title.", "error"); return; }
    if(!courseDraft.videos.length){ toast("Add at least one video first.", "error"); return; }
    saveCourse(courseDraft);
  };
}
function renderCourseVideos(){
  const box = $("#mc-videos");
  if(!box) return;
  box.innerHTML = courseDraft.videos.length ? courseDraft.videos.map((v,i)=>`
    <div class="vid-row">
      <div class="vr-thumb" style="${v.videoId ? bg(v.videoId) : ""}">${thumb(v.videoId)?"":svg("video-camera")}</div>
      <div class="vr-main">
        <div class="vr-title">${esc(v.title || "Untitled video")}</div>
        <div class="vr-sub">${esc(v.url||"")} · ${(v.chapters||[]).length} chapters</div>
      </div>
      <div class="vr-actions">
        <button class="btn sm icon ghost" data-vid="${i}" data-vidact="edit" title="Edit video">${svg("pencil","sm")}</button>
        <button class="btn sm icon ghost" data-vid="${i}" data-vidact="del" title="Remove video">${svg("x-mark","sm")}</button>
      </div>
    </div>`).join("") : `<p class="hint" style="margin-bottom:10px;">No videos yet — add one below.</p>`;
  $$("[data-vid]", box).forEach(b=> b.addEventListener("click", ()=>{
    const i = +b.dataset.vid;
    if(b.dataset.vidact === "del"){ courseDraft.videos.splice(i,1); renderCourseVideos(); }
    else openVideoModal(courseDraft.videos[i]);
  }));
}
function saveCourse(draft){
  const now = Date.now();
  const isCopy = !!CACHE.myCourses[draft.id];
  const videos = (draft.videos||[]).slice(0, MAX_VIDEOS).map(v=>({
    videoId: sanitizeVideoId(v.videoId || extractVideoId(v.url || "")),
    url: String(v.url||"").slice(0, MAX_URL_LEN),
    title: String(v.title||"Video").slice(0, MAX_TITLE_LEN),
    chapters: (v.chapters||[]).slice(0, MAX_CHAPTERS).map(c=>({ t: Math.max(0, +c.t||0), l: String(c.l||"").slice(0, MAX_TITLE_LEN) }))
  }));
  const course = {
    id: draft.id || genId("c"),
    ownerId: CACHE.user ? CACHE.user.uid : "",
    ownerName: CACHE.user ? (CACHE.user.displayName || "You").slice(0, MAX_NAME_LEN) : "You",
    title: String(draft.title || "").trim().slice(0, MAX_TITLE_LEN),
    description: String(draft.description || "").trim().slice(0, MAX_DESC_LEN),
    visibility: draft.visibility === "public" ? "public" : "private",
    videos,
    kind: isCopy ? "copy" : (CACHE.user ? "mine" : "local"),
    createdAt: draft.createdAt || now
  };
  CACHE.allCourses[course.id] = course;
  if(isCopy){
    CACHE.myCourses[course.id] = course;
    if(CACHE.user && fDb){
      if(!writeOk()){ toast("Too many changes — slow down.", "error"); }
      else fDb.collection("users").doc(CACHE.user.uid).collection("myCourses").doc(course.id)
        .set(firestoreCourseData(course)).then(()=>toast("Copy updated in Firebase", "success")).catch(err=>toast("Saved locally — " + err.message, "info"));
    }else{
      toast("Copy saved (local mode)", "success");
    }
  }else if(CACHE.user && fDb){
    if(!writeOk()){ toast("Too many changes — slow down.", "error"); }
    else fDb.collection("courses").doc(course.id).set(firestoreCourseData(course)).then(()=>toast("Course saved to Firebase", "success")).catch(err=>toast("Saved locally — " + err.message, "info"));
  }else{
    toast("Course saved (local mode)", "success");
  }
  CACHE.journey.createCourse = true;
  saveLocalState();
  closeModal("courseModal");
  if(viewName === "player" && current.courseId === course.id) renderPlayer();
  else renderView();
}

/* ---------- VIDEO MODAL ---------- */
const Y2TOOL_URL = "https://y2tool.com/tools/chapter";
function openVideoModal(editVideo){
  videoDraft = editVideo ? JSON.parse(JSON.stringify(editVideo)) : { videoId:"", url:"", title:"", chapters:[] };
  const overlay = openModal("videoModal");
  overlay.innerHTML = `
    <div class="modal wide">
      <div class="modal-head"><h3>${editVideo ? "Edit video" : "Add a video"}</h3><button class="btn icon ghost" data-close>${svg("x-mark")}</button></div>
      <div class="modal-body">
        <div class="field">
          <label>YouTube video link</label>
          <input class="input" id="mv-url" placeholder="https://www.youtube.com/watch?v=…" value="${escAttr(videoDraft.url)}">
        </div>
        <div class="y2-box">
          <div class="y2-title">${svg("sparkles")} Grab the chapters</div>
          <ol>
            <li>Paste your video link into <b>y2tool's Chapter Extractor</b> (opens in a new tab).</li>
            <li>Set <b>Export Format → JSON</b>, then copy the result.</li>
            <li>Paste the JSON below — plain <span class="mono">0:00 Title</span> lines work too.</li>
          </ol>
          <div style="margin-top:10px;"><a class="btn sm" id="mv-y2" href="${Y2TOOL_URL}" target="_blank" rel="noopener">${svg("arrow-top-right-on-square","sm")} Open Chapter Extractor</a></div>
        </div>
        <div class="field">
          <label>Chapters — paste JSON or text</label>
          <textarea class="textarea mono" id="mv-chapters" placeholder='[{"t":0,"l":"Introduction"},{"t":120,"l":"Chapter 1"},…]'></textarea>
          <button class="btn sm" id="mv-parse" style="margin-top:8px;">${svg("check")} Parse &amp; preview</button>
        </div>
        <div class="ch-preview" id="mv-preview"></div>
      </div>
      <div class="modal-foot">
        <span class="hint" style="margin-right:auto;align-self:center;">Chapters are optional — a video without chapters still works.</span>
        <button class="btn" data-close>Cancel</button>
        <button class="btn primary" data-save>${svg("check")} ${editVideo ? "Update video" : "Add video to course"}</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close]").onclick = ()=>closeModal(overlay.id);
  overlay.querySelector("#mv-y2").href = `${Y2TOOL_URL}?url=${encodeURIComponent(videoDraft.url||"")}`;
  const urlInp = overlay.querySelector("#mv-url");
  urlInp.addEventListener("input", ()=>{
    overlay.querySelector("#mv-y2").href = `${Y2TOOL_URL}?url=${encodeURIComponent(urlInp.value.trim())}`;
  });
  overlay.querySelector("#mv-parse").onclick = async ()=>{
    const parsed = parseChapters(overlay.querySelector("#mv-chapters").value);
    if(parsed && parsed.length){
      videoDraft.chapters = parsed;
      renderVideoPreview();
      toast(`Parsed ${parsed.length} chapters`, "success");
    }else{
      toast("Couldn't detect chapters. Paste JSON from y2tool or lines like 0:00 Title.", "error");
    }
  };
  overlay.querySelector("[data-save]").onclick = async ()=>{
    const url = urlInp.value.trim();
    const videoId = extractVideoId(url);
    if(!videoId){ toast("That doesn't look like a valid YouTube link.", "error"); return; }
    videoDraft.videoId = sanitizeVideoId(videoId);
    videoDraft.url = url.slice(0, MAX_URL_LEN);
    videoDraft.title = String(videoDraft.title || "").slice(0, MAX_TITLE_LEN);
    if(!videoDraft.title){
      const meta = await fetchVideoMeta(videoDraft.videoId);
      videoDraft.title = (meta.title || "Video").slice(0, MAX_TITLE_LEN);
    }
    if(editVideo){
      const idx = courseDraft.videos.indexOf(editVideo);
      if(idx > -1) courseDraft.videos[idx] = videoDraft;
    }else{
      if(courseDraft.videos.length >= MAX_VIDEOS){ toast(`A course can hold at most ${MAX_VIDEOS} videos.`, "error"); return; }
      courseDraft.videos.push(videoDraft);
    }
    closeModal("videoModal");
    renderCourseVideos();
  };
}
function renderVideoPreview(){
  const box = $("#mv-preview");
  if(!box) return;
  if(!videoDraft.chapters.length){
    box.innerHTML = "";
    return;
  }
  box.innerHTML = `
    <div class="cp-head"><h4>${svg("list-bullet","sm")} Chapter preview</h4><span class="hint">${videoDraft.chapters.length} chapters</span></div>
    <div id="chRows">${videoDraft.chapters.map((c,i)=>chRowHTML(c,i)).join("")}</div>`;
  $$(".ch-row", box).forEach(row=>{
    const i = +row.dataset.i;
    const tInp = row.querySelector(".ch-t"), lInp = row.querySelector(".ch-l");
    tInp.addEventListener("input", ()=>{ const s = toSeconds(tInp.value); if(s != null) videoDraft.chapters[i].t = s; });
    lInp.addEventListener("input", ()=> videoDraft.chapters[i].l = lInp.value);
    row.querySelector("[data-cr='up']").onclick = ()=> moveChapter(i, -1);
    row.querySelector("[data-cr='down']").onclick = ()=> moveChapter(i, 1);
    row.querySelector("[data-cr='del']").onclick = ()=>{ videoDraft.chapters.splice(i,1); renderVideoPreview(); };
  });
}
function chRowHTML(c, i){
  return `
  <div class="ch-row" data-i="${i}">
    <input class="input ch-t" value="${fmt(c.t)}" title="Timestamp">
    <input class="input ch-l" value="${escAttr(c.l)}" placeholder="Chapter title" title="Title">
    <button class="btn icon ghost" data-cr="up" title="Move up">${svg("chevron-up","sm")}</button>
    <button class="btn icon ghost" data-cr="down" title="Move down">${svg("chevron-down","sm")}</button>
    <button class="btn icon ghost" data-cr="del" title="Remove">${svg("trash","sm")}</button>
  </div>`;
}
function moveChapter(i, dir){
  const j = i + dir;
  if(j < 0 || j >= videoDraft.chapters.length) return;
  const a = videoDraft.chapters[i];
  videoDraft.chapters[i] = videoDraft.chapters[j];
  videoDraft.chapters[j] = a;
  renderVideoPreview();
}

/* ---------- PATH MODAL ---------- */
function openPathModal(pathId){
  const existing = pathId ? CACHE.paths[pathId] : null;
  pathDraft = existing ? { id: existing.id, name: existing.name, description: existing.description, visibility: existing.visibility || "private", courseIds: new Set(existing.courseIds||[]) } : { id:null, name:"", description:"", visibility:"private", courseIds:new Set() };
  const options = resolveCoursesList();
  const overlay = openModal("pathModal");
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-head"><h3>${existing ? "Edit path" : "Create a path"}</h3><button class="btn icon ghost" data-close>${svg("x-mark")}</button></div>
      <div class="modal-body">
        <div class="field"><label>Path name</label><input class="input" id="mp-name" placeholder="e.g. AI Engineering Track" value="${escAttr(pathDraft.name)}"></div>
        <div class="field"><label>Description (optional)</label><textarea class="textarea" id="mp-desc" placeholder="What will this path take a learner from → to?">${esc(pathDraft.description)}</textarea></div>
        <div class="field">
          <label>Visibility</label>
          <div class="vis-toggle">
            <button type="button" class="vis-opt ${pathDraft.visibility==="public"?"on":""}" data-vis="public">${svg("eye")} Public — anyone can find it</button>
            <button type="button" class="vis-opt priv ${pathDraft.visibility==="private"?"on priv":""}" data-vis="private">${svg("lock-closed")} Private — just you</button>
          </div>
        </div>
        <div class="field"><label>Courses in this path</label>
          ${options.length ? `<div class="pick-list">${options.map(c=>`
            <label class="pick-item ${pathDraft.courseIds.has(c.id)?"on":""}">
              <input type="checkbox" data-course="${escAttr(c.id)}" ${pathDraft.courseIds.has(c.id)?"checked":""}>
              <span class="pi-t">${esc(c.title)}</span>
              <span class="pi-m">${(c.videos||[]).length} vid · ${totalChapters(c)} ch</span>
            </label>`).join("")}</div>`
            : `<p class="hint">You don't have any courses yet. <button class="btn sm" data-action="goto-course">${svg("plus","sm")} Create one</button></p>`}
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn" data-close>Cancel</button>
        <button class="btn primary" data-save>${svg("check")} Save path</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close]").onclick = ()=>closeModal(overlay.id);
  $$(".vis-opt", overlay).forEach(b=> b.addEventListener("click", ()=>{
    pathDraft.visibility = b.dataset.vis;
    $$(".vis-opt", overlay).forEach(o=> o.classList.toggle("on", o.dataset.vis === pathDraft.visibility));
  }));
  $$(".pick-item input", overlay).forEach(inp=> inp.addEventListener("change", ()=>{
    const id = inp.dataset.course;
    if(inp.checked) pathDraft.courseIds.add(id);
    else pathDraft.courseIds.delete(id);
    inp.closest(".pick-item").classList.toggle("on", inp.checked);
  }));
  const goCreate = overlay.querySelector("[data-action='goto-course']");
  if(goCreate) goCreate.onclick = ()=>{ closeModal("pathModal"); openCourseModal(); };
  overlay.querySelector("[data-save]").onclick = ()=>{
    pathDraft.name = $("#mp-name").value.trim();
    pathDraft.description = $("#mp-desc").value.trim();
    if(!pathDraft.name){ toast("Give your path a name.", "error"); return; }
    const path = {
      id: pathDraft.id || genId("p"),
      name: pathDraft.name.slice(0, MAX_TITLE_LEN),
      description: pathDraft.description.slice(0, MAX_DESC_LEN),
      courseIds: Array.from(pathDraft.courseIds).slice(0, MAX_VIDEOS),
      visibility: pathDraft.visibility === "public" ? "public" : "private",
      ownerId: CACHE.user ? CACHE.user.uid : "",
      ownerName: CACHE.user ? (CACHE.user.displayName || "You").slice(0, MAX_NAME_LEN) : "You",
      createdAt: existing ? existing.createdAt : Date.now()
    };
    const commit = ()=>{
      CACHE.paths[path.id] = path;
      CACHE.journey.createPath = true;
      savePathToBackend(path.id);
      saveLocalState();
      closeModal("pathModal");
      toast("Path saved", "success");
      if(viewName === "path") renderPath();
      else renderLearning();
    };
    const privateCourses = (path.courseIds||[]).map(id=>CACHE.allCourses[id]).filter(c=> c && c.visibility !== "public");
    if(path.visibility === "public" && privateCourses.length && CACHE.user && fDb){
      warnPrivateCoursesInPath(path, privateCourses, decision=>{
        if(decision === "private"){
          pathDraft.visibility = "private";
          $$(".vis-opt", overlay).forEach(o=> o.classList.toggle("on", o.dataset.vis === "private"));
          toast("Path kept private.", "info");
        }else if(decision === "public"){
          privateCourses.filter(c=> isMine(c) && c.kind !== "copy" && c.kind !== "local").forEach(makeCoursePublic);
          commit();
        }else{
          commit();
        }
      });
    }else{
      commit();
    }
  };
}

/* ============================================================
   GLOBAL NAV
   ============================================================ */
document.addEventListener("click", e=>{
  const brand = e.target.closest(".brand");
  if(brand){ showView("explore"); return; }
  const nav = e.target.closest("[data-nav]");
  if(nav && nav.dataset.nav === "explore"){ showView("explore"); }
  else if(nav && nav.dataset.nav === "learning"){ showView("learning"); }
});
