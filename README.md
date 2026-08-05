# The Build Path

**CREATE · CURATE · LEARN**

A client-side learning hub that turns any YouTube video into a structured course. Paste a video link, import its chapters as JSON (or plain `0:00 Title` lines), bundle courses into learning paths, and track your progress across every device.

![Stack](https://img.shields.io/badge/stack-vanilla%20JS%20%2B%20Firebase-FFCA28)

---

## What it does

- **Courses & playlists** — a course is one or more YouTube videos, each with its own chapter list (timestamps + titles).
- **Chapter import** — paste chapter JSON from [y2tool's Chapter Extractor](https://y2tool.com/tools/chapter) or plain timestamp text; the app parses, normalizes, and lets you reorder/rename chapters.
- **Chapter-aware player** — a custom YouTube player that scopes playback to the current chapter (prev/next chapter, seek within chapter, per-chapter progress) and supports keyboard shortcuts (`Space`/`k` play/pause, `j`/`←` back 5s, `l`/`→` forward 5s).
- **Learning paths** — group courses into a curriculum, reorder them, and share them publicly.
- **Progress tracking** — auto-saved watch progress per video/chapter, completion toggles, and a "Resume" card.
- **Bookmarks & copies** — bookmark any course for quick access, or copy one to keep your own editable version.
- **Cloud sync** — sign in with Google to sync courses, paths, bookmarks, and progress across devices via Firebase. Works fully in local browser-only mode without signing in.

---

## Tech stack

- **Frontend**: vanilla HTML/CSS/JS (ES6+), zero frameworks, zero build step, no external JS libraries beyond Firebase.
- **Backend**: [Firebase](https://firebase.google.com) — Authentication (Google), Cloud Firestore, optional App Check.
- **Security**: hardened Firestore rules (`firestore.rules`) with write-shape validation, input sanitization/XSS defenses, client-side rate limiting, and a strict CSP in `index.html`.

---

## Project structure

```
the-build-path/
├── index.html              # Single page, all views (explore / learning / path / player)
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── config.js           # REAL credentials — gitignored, never commit
│   ├── example.config.js   # Committed template — copy to config.js & fill in
│   ├── app.js              # UI logic: views, cards, modals, local storage
│   ├── firebase.js         # Auth / Firestore / App Check wiring + serializers
│   ├── player.js           # YouTube IFrame API player + chapter controls
│   └── init.js             # Bootstrap (runs last)
├── firestore.rules         # Firestore security rules (paste into Firebase console)
└── .gitignore              # Ignores js/config.js
```

---

## Prerequisites

- A [Firebase](https://console.firebase.google.com) project (free tier is fine).
- A way to serve the site over `http://localhost` (or HTTPS in production). Firebase refuses `file://` origins.
- `Node.js` is **not required** to run the app — only any static file server (see [Running](#running)).

---

## Setup

### 1. Configure your Firebase credentials

The app reads its credentials from `js/config.js`, which **holds real keys and is gitignored**. It is not in the repository.

```bash
cp js/example.config.js js/config.js
```

Open `js/config.js` and fill in the `FIREBASE_CONFIG` block from your Firebase project:

| Variable          | Where to get it                                                        |
| ----------------- | ---------------------------------------------------------------------- |
| `apiKey`          | Firebase console → Project settings → General → Your apps → Web app    |
| `authDomain`      | `YOUR_PROJECT.firebaseapp.com` (same page)                             |
| `projectId`       | Firebase console → Project settings → General                          |
| `storageBucket`   | `YOUR_PROJECT.firebasestorage.app` (same page)                          |
| `messagingSenderId` | Same page (click "Config" snippet)                                   |
| `appId`           | Same page                                                               |

> **Never commit `js/config.js`.** It is already ignored by `.gitignore`. If you ever need to recreate it, re-run the `cp` command above.

### 2. Enable Google sign-in

1. Firebase console → **Authentication** → **Sign-in method**.
2. Enable **Google**, and add your domains under **Authorized domains** (e.g. `localhost`, `127.0.0.1`, and your production domain).

### 3. Create the Firestore database

1. Firebase console → **Firestore Database** → **Create database** (choose *production mode*).
2. **Rules** → replace the editor contents with everything in `firestore.rules` → **Publish**.

> These rules enforce per-user privacy on the `users/{uid}` subtree, validate every write shape (types, lengths, the strict 11-char YouTube `videoId` pattern), keep `ownerId` immutable, and deny everything else by default.

### 4. (Recommended) Hardening

- **App Check** — console → App Check → register your web app → create a reCAPTCHA Enterprise key and paste it as `APP_CHECK_SITE_KEY` in `js/config.js`; then enforce. Blocks calls to your Firestore from outside this app.
- **API key restriction** — Google Cloud console → APIs & Services → Credentials → edit the key → restrict to your domain's HTTP referrer and only the Firebase APIs in use.
- **Budget alert** — Firebase console → Usage & billing → set a budget alert (e.g. $1/day).

---

## Running

Because the app talks to Firebase and the YouTube IFrame API, it must be served over HTTP(S) — **not opened via `file://`**. Any static server works:

**Option A — Python (usually preinstalled):**

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

**Option B — npx:**

```bash
npx serve .
# open the printed URL
```

**Option C — production:** deploy the folder as-is to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

---

## How it works

- **Local-first:** everything is cached in `localStorage` (`bp_*` keys), so the app is fully usable as a guest with no backend.
- **Sync:** on sign-in, `firebase.js` pushes local progress to the user's Firestore subtree and subscribes to live snapshots (courses, paths, bookmarks, progress) — changes appear in real time across devices.
- **Public catalog:** public courses live in `/courses` and public paths in each owner's `users/{uid}/paths` (found via `collectionGroup("paths")`), both readable by anyone but writable only by their owner.
- **Player:** `player.js` builds a YouTube IFrame player scoped to the current chapter (`startSeconds`/`endSeconds`), tracks time every 3s, and writes progress through a debounced, rate-limited Firestore path.

---

## Troubleshooting

| Problem | Fix |
| --- | --- |
| "Connect Firebase first — see the FIREBASE_CONFIG block" | `js/config.js` is missing or empty — run `cp js/example.config.js js/config.js` and fill in real values. |
| "Run this app over http(s)://" | You opened the HTML via `file://`. Serve the folder with a static server (see [Running](#running)). |
| Google sign-in popup fails / "Popup was blocked" | Allow popups for the site, and confirm the domain is in Authentication → Authorized domains. |
| "operation-not-allowed" | Google sign-in is not enabled in Authentication → Sign-in method. |
| Public courses/paths are hidden | Firestore rules not published — paste `firestore.rules` into Firestore → Rules and publish. |

---

## Security notes

- The Firebase web `apiKey` is **public by design** — it ships in the browser and is not a secret. Real protection comes from the Firestore rules + App Check + API key referrer restrictions.
- Moving credentials into the gitignored `js/config.js` keeps them out of version control and code sharing, but anyone viewing the deployed page can still read them. Do not store genuinely private secrets (service-account keys, DB passwords) in a client-side app — those require a backend.
- All Firestore data is sanitized on read (`app.js`) and validated on write (`firestore.rules`) to close stored-XSS and shape-abuse vectors.
