/* ============================================================
   louigene. — site config + behavior
   ------------------------------------------------------------
   👉 EDIT YOUR LINKS HERE. This is the only place you need to
      change. Paste your real URLs between the quotes. Set a
      link to "" (empty) to hide that button automatically.
   ============================================================ */

const CONFIG = {
  // --- Streaming ---
  appleMusic: "https://music.apple.com/us/artist/louigene/1773989164",
  spotifyArtist: "https://open.spotify.com/artist/3E8BM0SlLwXmY3JNFhoUsU",
  // For the embedded Spotify player, paste your artist embed id (the part
  // after /artist/). Leave "" to hide the Spotify player entirely.
  spotifyEmbedId: "3E8BM0SlLwXmY3JNFhoUsU",

  // --- Social ---
  instagram: "https://www.instagram.com/drlouigene/",
  youtube:   "https://www.youtube.com/channel/UCL4fT0_eBY19Cy190RpmRvA",
  tiktok:    "https://www.tiktok.com/@paullouigene",
};

/* ------------------------------------------------------------
   Below this line you normally don't need to touch anything.
   ------------------------------------------------------------ */

const ICONS = {
  instagram: '<svg class="social__icon" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.62c-3.14 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.9 2.9 0 0 0-.68-1.06 2.9 2.9 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.6-.07-4.74-.07zm0 2.76a5.42 5.42 0 1 1 0 10.84 5.42 5.42 0 0 1 0-10.84zm0 8.94a3.52 3.52 0 1 0 0-7.04 3.52 3.52 0 0 0 0 7.04zm5.63-9.13a1.27 1.27 0 1 1-2.54 0 1.27 1.27 0 0 1 2.54 0z"/></svg>',
  spotify: '<svg class="social__icon" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.59 14.44a.62.62 0 0 1-.86.21c-2.35-1.44-5.3-1.76-8.79-.96a.62.62 0 1 1-.28-1.22c3.82-.87 7.1-.5 9.72 1.1.3.18.4.57.21.87zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.65-6.79-2.13-9.97-1.17a.78.78 0 1 1-.45-1.5c3.63-1.1 8.15-.56 11.24 1.34.37.23.49.71.25 1.07zm.11-2.84C14.8 8.96 9.34 8.78 6.26 9.71a.94.94 0 1 1-.54-1.8c3.54-1.07 9.57-.86 13.34 1.38a.94.94 0 0 1-.96 1.61z"/></svg>',
  appleMusic: '<svg class="social__icon" viewBox="0 0 24 24"><path d="M17.2 3.2 8.9 4.9c-.5.1-.8.5-.8 1v9.4a3 3 0 1 0 1.5 2.6V8.3l6.9-1.4v6.2a3 3 0 1 0 1.5 2.6V4.2c0-.7-.6-1.2-1.3-1z"/></svg>',
  youtube: '<svg class="social__icon" viewBox="0 0 24 24"><path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 0 0 1 7.5 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.5a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23.5 12 31 31 0 0 0 23 7.5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>',
  tiktok: '<svg class="social__icon" viewBox="0 0 24 24"><path d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.3v12.1a2.4 2.4 0 1 1-2.4-2.4c.24 0 .47.03.7.1v-3.4a5.8 5.8 0 1 0 5 5.7V9.3a7.5 7.5 0 0 0 4.4 1.4V7.3a4.3 4.3 0 0 1-3.4-1.5z"/></svg>',
};

/* ----- Build social buttons ----- */
const SOCIAL_ORDER = [
  { key: "instagram",  label: "Instagram",   sub: "Follow @drlouigene" },
  { key: "spotify",    label: "Spotify",     sub: "Stream & save",     url: "spotifyArtist" },
  { key: "appleMusic", label: "Apple Music", sub: "Full catalog",      url: "appleMusic" },
  { key: "youtube",    label: "YouTube",     sub: "Watch & subscribe" },
  { key: "tiktok",     label: "TikTok",      sub: "Behind the music" },
];

function buildSocials() {
  const wrap = document.getElementById("socials");
  if (!wrap) return;
  SOCIAL_ORDER.forEach((s) => {
    const url = CONFIG[s.url || s.key];
    if (!url) return; // hide if no link set
    const a = document.createElement("a");
    a.className = "social";
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `${ICONS[s.key] || ""}<span class="social__meta">${s.label}<small>${s.sub}</small></span>`;
    wrap.appendChild(a);
  });
}

/* ----- Spotify player + catalog link ----- */
function buildSpotify() {
  if (CONFIG.spotifyEmbedId) {
    const wrap = document.getElementById("spotify-wrap");
    const frame = document.getElementById("spotify-embed");
    frame.src = `https://open.spotify.com/embed/artist/${CONFIG.spotifyEmbedId}?utm_source=generator&theme=0`;
    wrap.hidden = false;
  }
  if (CONFIG.spotifyArtist) {
    const link = document.querySelector('[data-link="spotify"]');
    if (link) { link.href = CONFIG.spotifyArtist; link.hidden = false; }
  }
}

/* ----- QR code (points to this site's root) ----- */
function buildQR() {
  const el = document.getElementById("qrcode");
  if (!el || typeof QRCode === "undefined") return;
  const url = window.location.origin + window.location.pathname.replace(/index\.html$/, "");
  const qr = new QRCode(el, {
    text: url,
    width: 190,
    height: 190,
    colorDark: "#0c0a09",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M,
  });

  document.getElementById("qr-download").addEventListener("click", () => {
    const img = el.querySelector("img") || el.querySelector("canvas");
    if (!img) return;
    const src = img.tagName === "IMG" ? img.src : img.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = src;
    a.download = "louigene-qr.png";
    a.click();
  });
}

/* ----- Scroll reveal ----- */
function buildReveals() {
  const targets = document.querySelectorAll(
    ".hero__text > *, .section__head, .track, .track--featured, .about__img, .about__text, .gallery__item, .signup-inner, .connect > *"
  );
  if (!("IntersectionObserver" in window)) return;
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach((el) => io.observe(el));
}

/* ----- Email signup (Netlify Forms, AJAX for inline success) ----- */
function buildSignup() {
  const form = document.getElementById("signup-form");
  const msg = document.getElementById("signup-msg");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new URLSearchParams(new FormData(form)).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data })
      .then(() => { form.hidden = true; if (msg) msg.hidden = false; })
      .catch(() => { form.submit(); });
  });
}

/* ----- Hero parallax (scroll depth + subtle mouse drift) ----- */
function buildHeroMotion() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const hero = document.querySelector(".hero");
  const media = document.querySelector(".hero__media");
  const inner = document.querySelector(".hero__inner");
  if (!hero || !media) return;
  let mx = 0, my = 0, py = 0, ticking = false;
  const touch = window.matchMedia("(hover: none)").matches;

  function apply() {
    media.style.transform = `translate3d(${mx * 6}px, ${py * 0.18 + my * 6}px, 0)`;
    if (inner) {
      inner.style.transform = `translate3d(0, ${py * 0.05}px, 0)`;
      inner.style.opacity = Math.max(0, 1 - py / 700).toFixed(3);
    }
    ticking = false;
  }
  function schedule() { if (!ticking) { requestAnimationFrame(apply); ticking = true; } }

  window.addEventListener("scroll", () => { py = window.scrollY; schedule(); }, { passive: true });
  if (!touch) {
    hero.addEventListener("mousemove", (e) => {
      const r = hero.getBoundingClientRect();
      mx = -((e.clientX - r.left) / r.width - 0.5);
      my = -((e.clientY - r.top) / r.height - 0.5);
      schedule();
    });
    hero.addEventListener("mouseleave", () => { mx = 0; my = 0; schedule(); });
  }
  apply();
}

/* ----- Gallery lightbox ----- */
function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  if (!grid || !lb || !lbImg) return;
  const btns = [...grid.querySelectorAll(".gallery__item")];
  const imgs = btns.map((b) => b.querySelector("img"));
  let idx = 0;

  function open(i) {
    idx = (i + imgs.length) % imgs.length;
    lbImg.src = imgs[idx].src;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btns.forEach((b, i) => b.addEventListener("click", () => open(i)));
  document.getElementById("lightbox-close").addEventListener("click", close);
  document.getElementById("lightbox-prev").addEventListener("click", (e) => { e.stopPropagation(); open(idx - 1); });
  document.getElementById("lightbox-next").addEventListener("click", (e) => { e.stopPropagation(); open(idx + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") open(idx + 1);
    else if (e.key === "ArrowLeft") open(idx - 1);
  });
}

/* ----- Init ----- */
document.addEventListener("DOMContentLoaded", () => {
  buildSocials();
  buildSpotify();
  buildQR();
  buildReveals();
  buildSignup();
  buildHeroMotion();
  buildGallery();
  buildThemeToggle();
  buildMobileMenu();
  buildScrollUI();
  buildOutboundUTM();
  buildCookie();
  buildPreloader();
  buildInterstitials();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ----- Interstitial apparitions: gentle scroll drift ----- */
function buildInterstitials() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const items = [...document.querySelectorAll(".interstitial")];
  if (!items.length) return;
  let ticking = false;
  function update() {
    const vh = window.innerHeight;
    items.forEach((it) => {
      const r = it.getBoundingClientRect();
      if (r.bottom < -40 || r.top > vh + 40) return;
      const prog = (r.top + r.height / 2 - vh / 2) / vh; // ~-0.5..0.5
      const img = it.querySelector(".interstitial__img");
      if (img) img.style.transform = `scale(1.06) translateY(${(prog * -3).toFixed(2)}%)`;
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();
}

/* ============================================================
   UI ENHANCEMENTS
   ============================================================ */

/* ----- Theme toggle (dark default, remembered) ----- */
function buildThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("louigene-theme", next); } catch (e) {}
  });
}

/* ----- Mobile menu ----- */
function buildMobileMenu() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => menu.classList.add("is-open"));
    } else {
      menu.classList.remove("is-open");
      setTimeout(() => { if (!document.body.classList.contains("menu-open")) menu.hidden = true; }, 300);
    }
  }
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("menu-open")) setOpen(false); });
}

/* ----- Scroll UI: progress bar, sticky-header state, back-to-top, contact fab ----- */
function buildScrollUI() {
  const bar = document.getElementById("scroll-progress");
  const nav = document.querySelector(".nav");
  const top = document.getElementById("fab-top");
  const contact = document.getElementById("fab-contact");
  let ticking = false;

  function update() {
    const st = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
    if (nav) nav.classList.toggle("nav--scrolled", st > 10);
    if (top) top.hidden = st < 600;
    if (contact) {
      const show = st > 300;
      contact.style.opacity = show ? "1" : "0";
      contact.style.pointerEvents = show ? "auto" : "none";
    }
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  if (top) top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  update();
}

/* ----- UTM on outbound links (helps track where fans come from) ----- */
function buildOutboundUTM() {
  const host = location.hostname;
  const params = { utm_source: host || "louigene", utm_medium: "website", utm_campaign: "artist_site" };
  document.querySelectorAll('a[href^="http"]').forEach((a) => {
    let url;
    try { url = new URL(a.href); } catch (e) { return; }
    if (url.hostname === host) return; // internal only
    Object.entries(params).forEach(([k, v]) => { if (!url.searchParams.has(k)) url.searchParams.set(k, v); });
    a.href = url.toString();
  });
}

/* ----- Cookie / storage notice ----- */
function buildCookie() {
  const el = document.getElementById("cookie");
  const ok = document.getElementById("cookie-ok");
  if (!el || !ok) return;
  let seen = false;
  try { seen = localStorage.getItem("louigene-cookie") === "1"; } catch (e) {}
  if (seen) return;
  setTimeout(() => { el.hidden = false; }, 1200);
  ok.addEventListener("click", () => {
    el.hidden = true;
    try { localStorage.setItem("louigene-cookie", "1"); } catch (e) {}
  });
}

/* ----- Preloader fade-out ----- */
function buildPreloader() {
  const el = document.getElementById("preloader");
  if (!el) return;
  const done = () => setTimeout(() => {
    el.classList.add("is-done");
    setTimeout(() => { el.style.display = "none"; }, 600);
  }, 250);
  if (document.readyState === "complete") done();
  else window.addEventListener("load", done);
  // Safety: never let the preloader trap the page
  setTimeout(() => { el.classList.add("is-done"); setTimeout(() => (el.style.display = "none"), 600); }, 4000);
}
