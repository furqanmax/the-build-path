"use strict";
/* ============================================================
   CONFIG TEMPLATE — copy this file to config.js
   ------------------------------------------------------------
   1. Copy this file:
         cp js/example.config.js js/config.js
   2. Fill in your Firebase project credentials below.
   3. NEVER commit js/config.js — it is gitignored, so your
      credentials stay out of version control.

   Setup steps:
   - Create a project at https://console.firebase.google.com
   1. Add a Web app  →  copy its firebaseConfig values below.
   2. Authentication → Sign-in method → enable "Google".
   3. Firestore Database → Create database (production mode).
   4. Add your origin to Authentication → Authorized domains:
        localhost, 127.0.0.1, and the domain you host the app on.
      Run this app over https:// (or http://localhost locally),
      NOT via file:// — Firebase refuses file:// origins.
   5. Paste the hardened Security Rules from firestore.rules
      (Firestore → Rules). See that file for full setup steps:
      App Check, API-key restrictions, and quota/budget alerts.

   Until you fill in real values, the app runs in local
   (browser-only) mode and still works end to end.
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_PROJECT:web:YOUR_APP_ID",
};
const USE_FIREBASE = !!(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId);

/* ============================================================
   APP CHECK (recommended for public deployments)
   ------------------------------------------------------------
   App Check stops anyone outside this app from calling your
   Firestore with your project ID (the single biggest abuse
   vector for a public single-page app).

   To enable:
   1. Firebase console → App Check → Apps → your web app → Register.
   2. Choose "reCAPTCHA Enterprise", create a key, paste it below.
   3. Console → App Check → your app → Enforce & monitor → Enforce.

   Leave APP_CHECK_SITE_KEY as "" to keep running WITHOUT App
   Check (usable for local testing only).
   ============================================================ */
const APP_CHECK_SITE_KEY = "";

/* ============================================================
   API KEY RESTRICTION (do this in Google Cloud Console)
   ------------------------------------------------------------
   Your Firebase web app's apiKey is public by design (it is not
   a secret) — security comes from Firestore rules + App Check.
   Still, restrict the key so it can only be used from your site:

   1. Google Cloud console → APIs & Services → Credentials.
   2. Find the API key used by this app → Edit API key.
   3. Application restrictions → HTTP referrers (websites) → Add
      your domain (e.g. https://yourdomain.com/PATH) and
      http://localhost for local dev. Save.
   4. Optionally set "API restrictions" to only the Firebase
      APIs this app uses (Identity Toolkit, Firestore, App Check).
   ============================================================ */

/* ============================================================
   QUOTA / COST PROTECTION (do this in Firebase console)
   ------------------------------------------------------------
   - Console → Usage & billing → set a Budget alert (e.g. $1/day)
     so unexpected Firestore usage notifies you immediately.
   - Console → Firestore → Usage, or set per-request quotas.
   The client also rate-limits its own writes (see firebase.js).
   ============================================================ */
