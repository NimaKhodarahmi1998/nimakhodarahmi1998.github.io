// ============================================================
//  DATA
// ============================================================
const skills = [
  { name: "Swift", icon: "swift" },
  { name: "SwiftUI", icon: "swiftui" },
  { name: "Xcode", icon: "xcode" },
  { name: "UIKit", icon: "uikit" },
  { name: "Git", icon: "git" },
  { name: "Procreate", icon: "procreate", featured: true },
  { name: "Figma", icon: "figma" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "InDesign", icon: "indesign" },
  { name: "UI/UX Design", icon: "uiux" },
];

const links = [
  { name: "GitHub", icon: "github", url: "https://github.com/NimaKhodarahmi1998" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nima-khodarahmi1998/" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nimakhodarahmi1998/" },
  { name: "Email", icon: "mail", url: "mailto:7798.nima@gmail.com" },
];

// Brand & product design (logos, icons, branding) — shown in a side-scrolling rail
const design = [
  { type: "video", src: "assets/cow-workers.mp4", project: "Cow Workers Studio", caption: "Logo animation", tint: "#5d87a8", fit: "cover" },
  { type: "video", src: "assets/cow-workers-characters.mp4", project: "Cow Workers Studio", caption: "Studio characters", tint: "#5d87a8", fit: "cover" },
  { type: "image", src: "assets/cow-workers-display.png", project: "Cow Workers Studio", caption: "Brand lockup", tint: "#5d87a8" },
  { type: "image", src: "assets/cow-workers-logo.png", project: "Cow Workers Studio", caption: "The hard-hat cow mascot", tint: "#5d87a8" },
  { type: "image", src: "assets/grabeat.png", project: "GraBeat", caption: "Final glitch icon" },
  { type: "image", src: "assets/grabeat-icon-concept.png", project: "GraBeat", caption: "Early concept" },
  { type: "image", src: "assets/whispers-icon.png", project: "Whispers of the Garden", caption: "App icon" },
  { type: "image", src: "assets/pomero-icon.png", project: "Pomero", caption: "App icon" },
];

// Hand-drawn illustrations (the centrepiece)
const illustrations = [
  { type: "video", src: "assets/illustration-garden.mp4", caption: "The garden, in motion", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-garden-courtyard.jpg", caption: "A Persian courtyard", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-garden-pool.jpg", caption: "Lotuses on the courtyard pool", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-whispers-verse.jpg", caption: "A Khayyam verse, unfurled", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-lotus.jpg", caption: "Lotus", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-lilypad.jpg", caption: "Lily pad", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-bird.jpg", caption: "Songbird", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-owl.jpg", caption: "Owl", project: "Whispers of the Garden" },
  { type: "image", src: "assets/illustration-stage-fright.jpg", caption: "Stage fright — editorial illustration", project: "Codle Talks" },
  { type: "image", src: "assets/cow-workers-logo.png", caption: "The hard-hat cow mascot", project: "Cow Workers Studio", tint: "#5d87a8" },
];

const languages = [
  { name: "Persian", level: "Native", pct: 100 },
  { name: "English", level: "C2", pct: 95 },
  { name: "Italian", level: "B2", pct: 65 },
  { name: "Spanish", level: "A2", pct: 30 },
];

const experience = [
  { role: "Co-founder, Developer & Designer", org: "Cow Workers Studio", period: "2025 — Now" },
  { role: "Junior iOS Developer", org: "Apple Developer Academy", period: "2025 — Now" },
  { role: "Tourist Guide", org: "Amalfi Coast", period: "2025 — Now" },
  { role: "Guide Writer", org: "TheGamer (Valnet)", period: "2024" },
  { role: "Head Critic & Designer", org: "SargarME", period: "2021 — 24" },
  { role: "English Teacher", org: "Ministry of Education", period: "2017 — 23" },
];

// Selected work — first item is the studio (featured)
const work = [
  {
    name: "Cow Workers Studio",
    kind: "Studio · Co-founder",
    desc: "An indie game studio I co-founded. I shape the brand, draw the art, and build the games.",
    thumb: "assets/cow-workers-icon.png",
    links: [{ label: "Branding & art", icon: "procreate", to: "#design" }],
    featured: true,
  },
  {
    name: "GraBeat",
    kind: "iPad & Mac game",
    desc: "A two-player camera game — catch neon notes by pinching, to the beat. Swift, SwiftUI & Vision hand-tracking. I designed all the graphics.",
    thumb: "assets/grabeat.png",
    links: [
      { label: "Code", icon: "github", url: "https://github.com/whyzii/Grabeat" },
      { label: "Graphics by me", icon: "procreate", to: "#design" },
    ],
  },
  {
    name: "Whispers of the Garden",
    kind: "iOS · App Store",
    desc: "Gamified Persian poetry in hand-drawn gardens. Every scene painted by hand in Procreate.",
    thumb: "assets/whispers.jpg",
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/whispers-of-the-garden/id6760307230" },
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden" },
    ],
  },
  {
    name: "Pomero",
    kind: "watchOS",
    desc: "A native watchOS app for staying close to the people who matter most.",
    thumb: "assets/pomero.png",
    links: [{ label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-Pomero" }],
  },
];

// ============================================================
//  HELPERS
// ============================================================
const icon = (key) => `<span class="ico">${ICONS[key] || ""}</span>`;

function linkHTML(l) {
  if (l.to) return `<a class="taglink" href="${l.to}">${icon(l.icon)}${l.label}<span class="arr">↗</span></a>`;
  const ext = l.url && l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
  return `<a class="taglink" href="${l.url}"${ext}>${icon(l.icon)}${l.label}<span class="arr">↗</span></a>`;
}

function mediaHTML(g, cls) {
  return g.type === "video"
    ? `<video class="${cls}" src="${g.src}" autoplay muted loop playsinline></video>`
    : `<img class="${cls}" src="${g.src}" alt="${g.caption}" loading="lazy" />`;
}

// ============================================================
//  RENDERERS
// ============================================================
function renderWork() {
  const el = document.getElementById("work-panels");
  if (!el) return;
  el.innerHTML = work
    .map((w, i) => {
      const num = String(i + 1).padStart(2, "0");
      const thumb = w.thumb
        ? `<img class="panel__icon" src="${w.thumb}" alt="${w.name}" loading="lazy" />`
        : `<span class="panel__initial" style="background:${w.tint}">${w.name[0]}</span>`;
      return `
      <article class="panel${w.featured ? " panel--featured" : ""}">
        <div class="panel__media">${thumb}</div>
        <div class="panel__body">
          <span class="panel__index">${num}${w.featured ? " · Studio" : ""}</span>
          <h3 class="panel__name">${w.name}</h3>
          <p class="panel__kind">${w.kind}</p>
          <p class="panel__desc">${w.desc}</p>
          <div class="panel__links">${w.links.map(linkHTML).join("")}</div>
        </div>
      </article>`;
    })
    .join("");
}

function railCard(g) {
  const fit = g.fit || (g.tint ? "contain" : "cover");
  const tintStyle = g.tint ? ` style="background:${g.tint}"` : "";
  const mediaCls = "art-card__img" + (fit === "contain" ? " art-card__img--contain" : "");
  return `
    <figure class="art-card">
      <div class="art-card__media"${tintStyle}>${mediaHTML(g, mediaCls)}</div>
      <figcaption class="art-card__cap">
        ${g.project ? `<span class="art-card__project">${g.project}</span>` : ""}
        <span class="art-card__title">${g.caption}</span>
      </figcaption>
    </figure>`;
}

function renderRail(id, items) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = items.map(railCard).join("");
}

function renderSkills() {
  const el = document.getElementById("skills");
  if (!el) return;
  el.innerHTML = skills
    .map((s) => `<li class="chip${s.featured ? " is-featured" : ""}">${icon(s.icon)}${s.name}</li>`)
    .join("");
}

function renderExperience() {
  const el = document.getElementById("path");
  if (!el) return;
  el.innerHTML = experience
    .map(
      (e) => `
      <li class="path__item">
        <span class="path__period">${e.period}</span>
        <span class="path__role">${e.role}</span>
        <span class="path__org">${e.org}</span>
      </li>`
    )
    .join("");
}

function renderLanguages() {
  const el = document.getElementById("languages");
  if (!el) return;
  el.innerHTML = languages
    .map(
      (l) => `
      <li class="lang">
        <div class="lang__top"><span class="lang__name">${l.name}</span><span class="lang__lvl">${l.level}</span></div>
        <div class="lang__bar"><span data-pct="${l.pct}"></span></div>
      </li>`
    )
    .join("");
}

function renderLinks() {
  document.querySelectorAll("[data-links]").forEach((el) => {
    el.innerHTML = links
      .map((l) => {
        const ext = l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
        return `<a href="${l.url}"${ext}>${icon(l.icon)}<span>${l.name}</span></a>`;
      })
      .join("");
  });
}

// ============================================================
//  THEME
// ============================================================
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(stored || (prefersDark ? "dark" : "light"));
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }
}

// ============================================================
//  NAV (scrolled state + mobile menu)
// ============================================================
function initNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  const burger = document.getElementById("nav-burger");
  burger?.addEventListener("click", () => nav.classList.toggle("is-open"));
  nav.querySelectorAll(".nav__links a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("is-open"))
  );
}

// ============================================================
//  LANGUAGE BARS
// ============================================================
function animateLanguages() {
  const bars = document.querySelectorAll(".lang__bar span");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fill = (el) => { el.style.width = (el.dataset.pct || 0) + "%"; };
  if (reduce || !("IntersectionObserver" in window)) { bars.forEach(fill); return; }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach((e) => { if (e.isIntersecting) { fill(e.target); o.unobserve(e.target); } });
  }, { threshold: 0.4 });
  bars.forEach((b) => obs.observe(b));
}

// ============================================================
//  RAILS — click-and-drag horizontal scrolling (wheel scrolls page)
// ============================================================
function initRailDrag() {
  document.querySelectorAll(".art-rail").forEach((rail) => {
    let down = false, startX = 0, startLeft = 0;
    rail.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") return; // native touch scroll
      down = true; startX = e.clientX; startLeft = rail.scrollLeft;
      rail.setPointerCapture(e.pointerId);
      rail.classList.add("is-dragging");
    });
    rail.addEventListener("pointermove", (e) => {
      if (!down) return;
      rail.scrollLeft = startLeft - (e.clientX - startX);
    });
    const end = (e) => {
      if (!down) return;
      down = false;
      try { rail.releasePointerCapture(e.pointerId); } catch (_) {}
      rail.classList.remove("is-dragging");
    };
    rail.addEventListener("pointerup", end);
    rail.addEventListener("pointercancel", end);
    rail.addEventListener("dragstart", (e) => e.preventDefault());
  });
}

// ============================================================
//  MOTION — Lenis smooth scroll + GSAP ScrollTrigger
//  (uses gsap.from so content stays visible if GSAP fails to load)
// ============================================================
function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = window.gsap && window.ScrollTrigger;

  // Smooth scroll (Lenis). Falls back to native scroll if unavailable.
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    if (hasGSAP) {
      lenis.on("scroll", () => window.ScrollTrigger.update());
      window.gsap.ticker.add((t) => lenis.raf(t * 1000));
      window.gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  // Anchor links -> smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -10 });
      else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  if (!hasGSAP || reduce) return; // content already visible; no animations
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  // Hero name lines
  gsap.from(".hero__name .line > span", {
    yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.12, delay: 0.15,
  });
  gsap.from(".hero__meta, .hero__role, .hero__links, .hero__cv, .hero__scroll", {
    y: 24, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.5,
  });
  gsap.from(".hero__art", { scale: 1.12, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.2 });

  // Hero art parallax
  gsap.to(".hero__art img", {
    yPercent: 18, ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });

  // Section labels & titles reveal
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  // Work panels
  gsap.utils.toArray(".panel").forEach((p) => {
    gsap.from(p, {
      y: 70, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: p, start: "top 82%" },
    });
  });

  // About text + photo
  gsap.from(".about__photo", {
    y: 60, opacity: 0, duration: 1, ease: "power3.out",
    scrollTrigger: { trigger: ".about", start: "top 75%" },
  });

  // Rail cards (Art + Design) rise as each rail scrolls into view
  gsap.utils.toArray(".art-rail").forEach((rail) => {
    gsap.from(rail.querySelectorAll(".art-card"), {
      y: 60, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.08,
      scrollTrigger: { trigger: rail, start: "top 85%" },
    });
  });

  ScrollTrigger.refresh();
}

// ============================================================
//  BOOT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderWork();
  renderRail("art-rail", illustrations);
  renderRail("design-rail", design);
  renderSkills();
  renderExperience();
  renderLanguages();
  renderLinks();
  initTheme();
  initNav();
  animateLanguages();
  initRailDrag();
  // Motion last, after content exists. Wait a tick for CDN scripts.
  if (document.readyState === "complete") initMotion();
  else window.addEventListener("load", initMotion);
});
