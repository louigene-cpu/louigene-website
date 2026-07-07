# louigene. — Official Website

A fast, static artist site: hero, live music players, bio, social links, and a
scannable QR code. No frameworks, no build step — just HTML, CSS, and a little JS.

---

## ✅ Step 1 — Add your real links (2 minutes)

Open **`js/main.js`** and edit the `CONFIG` block at the very top. Paste your
URLs between the quotes. Leave anything you don't use as `""` and its button
disappears automatically.

```js
const CONFIG = {
  appleMusic:     "https://music.apple.com/us/artist/louigene/1773989164", // ✅ already set
  spotifyArtist:  "",   // your Spotify artist page URL
  spotifyEmbedId: "",   // the id after /artist/ in that URL (turns on the player)
  instagram:      "https://instagram.com/YOUR_HANDLE",
  youtube:        "",
  tiktok:         "",
};
```

**How to find your Spotify id:** open your artist page, copy the link. It looks
like `https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4`. Paste the whole
link into `spotifyArtist`, and paste just the `3TVXtAsR1Inumwj472S9r4` part into
`spotifyEmbedId`.

Your 6 Apple Music singles are already embedded and playable. To add/remove a
track later, edit the `<iframe>` blocks in the `#music` section of `index.html`.

---

## 🖥️ Step 2 — Preview it locally

Double-click `index.html`, or run a tiny local server (better — some players
need it):

```bash
cd louigene-website
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 🚀 Step 3 — Deploy with GitHub + Netlify

**A. Put it on GitHub**

```bash
cd louigene-website
git init
git add .
git commit -m "Initial louigene. website"
# create an empty repo at github.com/new called "louigene-website", then:
git remote add origin https://github.com/YOUR_USERNAME/louigene-website.git
git branch -M main
git push -u origin main
```

**B. Connect to Netlify**

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
2. Choose **GitHub**, authorize, and pick `louigene-website`.
3. Build settings: leave **build command empty**, set **publish directory** to `.` (already in `netlify.toml`).
4. Click **Deploy**. You'll get a URL like `louigene.netlify.app`.

Every time you `git push`, Netlify redeploys automatically.

**Rename the URL:** Site configuration → Domain management → Options → Edit site
name → make it `louigene`.

**Custom domain later:** when you buy `louigene.com`, add it under Domain
management and Netlify walks you through DNS + free HTTPS.

---

## 📱 The QR code

The QR on the site is generated automatically and points to whatever URL the
page is served from — so once it's live on Netlify it will link to your real
site. Click **Download QR** to save a PNG for flyers, stories, or business cards.

---

## 📂 Files

```
louigene-website/
├── index.html          # the page
├── css/style.css       # all styling
├── js/main.js          # YOUR LINKS live here + QR logic
├── assets/             # album artwork
├── netlify.toml        # deploy config (no build step)
└── README.md
```
