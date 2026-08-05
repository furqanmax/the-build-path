"use strict";
/* ============================================================
   INIT — bootstrap the app (runs last, after all scripts)
   ============================================================ */
(function(){
  if(location.protocol === "file:"){
    console.warn("Running from file:// — Firebase and sign-in will not work.");
    toast("Run this app over http(s):// — Firebase refuses file:// origins.", "error");
  }
  renderTopbar();
  showView("explore");
  fbInit();
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);
})();
