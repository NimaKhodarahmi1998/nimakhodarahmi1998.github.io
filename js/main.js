// ============================================================
//  DATA
// ============================================================
const skills = [
  // Core strengths: highlighted
  { name: "SwiftUI", icon: "swiftui", featured: true },
  { name: "Human Interface Guidelines", icon: "hig", featured: true },
  { name: "Accessibility", icon: "accessibility", featured: true },
  { name: "UI/UX Design", icon: "uiux", featured: true },
  { name: "Procreate", icon: "procreate", featured: true },
  // Supporting skills
  { name: "Swift", icon: "swift" },
  { name: "Xcode", icon: "xcode" },
  { name: "UIKit", icon: "uikit" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "InDesign", icon: "indesign" },
];

const links = [
  { name: "GitHub", icon: "github", url: "https://github.com/NimaKhodarahmi1998" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nima-khodarahmi1998/" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nimakhodarahmi1998/" },
  { name: "Email", icon: "mail", url: "mailto:7798.nima@gmail.com" },
];

// Brand & product design (logos, icons, branding): shown in a side-scrolling rail
const design = [
  { type: "video", src: "assets/cow-workers.mp4", project: "Cow Workers Studio", caption: "Logo animation", tint: "#5d87a8", fit: "cover" },
  { type: "video", src: "assets/cow-workers-characters.mp4", project: "Cow Workers Studio", caption: "Studio characters", tint: "#5d87a8", fit: "cover" },
  { type: "image", src: "assets/cow-workers-display.png", project: "Cow Workers Studio", caption: "Brand lockup", tint: "#5d87a8" },
  { type: "image", src: "assets/cow-workers-logo.png", project: "Cow Workers Studio", caption: "The hard-hat cow mascot", tint: "#5d87a8" },
  { type: "image", src: "assets/grabeat.png", project: "GraBeat", caption: "Final glitch icon" },
  { type: "image", src: "assets/grabeat-icon-concept.png", project: "GraBeat", caption: "Early concept" },
  { type: "image", src: "assets/whispers-icon.png", project: "Whispers of the Garden", caption: "App icon" },
  { type: "image", src: "assets/magrana-icon.png", project: "Magrana", caption: "App icon" },
  { type: "image", src: "assets/roka.png", project: "Roka", caption: "App icon" },
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
  { type: "image", src: "assets/illustration-stage-fright.jpg", caption: "Stage fright, an editorial illustration", project: "Codle Talks" },
  { type: "image", src: "assets/cow-workers-logo.png", caption: "The hard-hat cow mascot", project: "Cow Workers Studio", tint: "#5d87a8" },
];

const languages = [
  { name: "Persian", level: "Native", pct: 100 },
  { name: "English", level: "C2", pct: 95 },
  { name: "Italian", level: "B2", pct: 65 },
  { name: "Spanish", level: "A2", pct: 30 },
];

const experience = [
  { role: "Co-founder, Developer & Designer", org: "Cow Workers Studio", period: "2025 to Now" },
  { role: "Tourist Guide", org: "Amalfi Coast", period: "2025 to Now" },
  { role: "Guide Writer", org: "TheGamer (Valnet)", period: "2024" },
  { role: "Head Critic & Designer", org: "SargarME", period: "2021 to 2024" },
  { role: "English Teacher", org: "Ministry of Education", period: "2017 to 2023" },
];

const education = [
  { role: "Student", org: "Apple Developer Academy at UniNA", period: "2025 to Now" },
  { role: "MA, Languages & Literatures for European Plurilingualism", org: "University of Naples \"Federico II\"", period: "2024 to Now" },
  { role: "BA, English Language & Literature", org: "Azad University, Iran", period: "2016 to 2020" },
];

// Selected work: first item is the studio (featured)
const work = [
  {
    name: "Cow Workers Studio",
    kind: "Studio · Co-founder",
    desc: "An indie game studio I co-founded. I do the brand, draw the art, and build the games.",
    long: [
      "Cow Workers is a small game studio I co-founded, and it's where I get to wear every hat at once. I shape the brand, draw the characters by hand, and build the games in Swift. It all revolves around a hard-hat cow mascot and a soft spot for small games with personality.",
      "Co-founding it meant owning the whole look and feel, from the logo and colours to the in-game art and the way we prototype each idea. We're still heads-down on our first releases, but the identity and the little world around it already feel alive.",
      "Honestly it's the most fun I've had making things. There's no brief to answer to, just us deciding what feels right and drawing until it does.",
    ],
    thumb: "assets/cow-workers-icon.png",
    links: [{ label: "Branding & art", icon: "procreate", to: "#design" }],
    featured: true,
  },
  {
    name: "GraBeat",
    kind: "iPad & Mac game",
    desc: "A two-player camera game. You pinch to catch neon notes on the beat. Built with Swift, SwiftUI and Vision hand-tracking. I made all the graphics.",
    long: [
      "GraBeat is a two-player camera game for iPad and Mac. You catch neon notes by pinching your fingers in time with the beat, tracked live through the camera with no controllers at all. It's built with Swift, SwiftUI and Apple's Vision framework for hand-tracking.",
      "My side of it was the visual identity: the glitchy neon look, the note graphics, and the little hit feedback that makes a pinch feel like you actually caught something. It was a fun chance to see how playful a hand-tracked interface could get.",
      "It started as a small experiment with hand tracking and kind of snowballed into a real game. Watching someone catch their first note and break into a grin is still the best part.",
    ],
    thumb: "assets/grabeat.png",
    links: [
      { label: "iOS & iPadOS", icon: "appstore", url: "https://apps.apple.com/it/app/grabeat-play-pinch-repeat/id6774738003" },
      { label: "macOS", icon: "appstore", url: "https://apps.apple.com/it/app/grabeat-play-pinch-repeat/id6774738003?l=en-GB" },
      { label: "Code", icon: "github", url: "https://github.com/whyzii/Grabeat" },
      { label: "Graphics by me", icon: "procreate", to: "#design" },
    ],
  },
  {
    name: "Whispers of the Garden",
    kind: "iPad & iPhone game",
    desc: "Persian poetry turned into a game you walk through, set in gardens I drew by hand in Procreate.",
    long: [
      "Whispers of the Garden is a Persian poetry app that's live on the App Store. It puts classical verse inside hand-drawn gardens you move through as you play, so reading poetry becomes something you explore instead of scroll past.",
      "I painted every scene by hand in Procreate: the courtyards and pools, the lotuses, the songbirds, the Khayyam verses unfurling across the screen. It's the project where my writing, my drawing and my SwiftUI finally came together in one place.",
      "It's the project closest to me. The poems are ones I grew up reading, so drawing the world around them felt like giving something back to them.",
    ],
    thumb: "assets/whispers.jpg",
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/whispers-of-the-garden/id6760307230" },
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden" },
    ],
  },
  {
    name: "Roka",
    kind: "iPad & iPhone game",
    desc: "A small word game about staying focused. You sort cards into the categories they fit. I did the owl and the whole paper notebook look.",
    long: [
      "Roka is a word game I helped make for iPhone, and it's out on the App Store now. You get a stack of word cards and sort each one into the categories it belongs to. A lot of words fit more than one, so you actually have to read and think instead of going on autopilot. It's built in SwiftUI.",
      "I wasn't on the code side of this one. My part was the art and the look: the owl icon I drew by hand, the lined paper, the typewriter feel. Same kind of role I had on GraBeat, where I made the graphics and the team built the game.",
      "I wanted it to feel like a worn paper notebook, the kind you'd actually doodle an owl in the margin of. Lined paper, typewriter text, a bit of softness everywhere.",
    ],
    thumb: "assets/roka.png",
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/roka-word-sorting/id6760015996" },
      { label: "Code", icon: "github", url: "https://github.com/J-C-1020/Roka-Word-Sorting" },
      { label: "Graphics by me", icon: "procreate", to: "#design" },
    ],
  },
  {
    name: "Magrana",
    kind: "watchOS",
    desc: "A little watchOS app for staying close to the people who matter most.",
    long: [
      "Magrana is a watchOS app for staying close to the people who matter most, right from your wrist. It boils reaching out down to a glance and a tap, so keeping in touch doesn't have to wait until you pick up your phone.",
      "I built it in SwiftUI for the watch and kept it deliberately small. It's the kind of app that does one warm thing well instead of fighting for your attention. Designing for a screen that tiny made every tap earn its place.",
      "I wanted it to feel warm, not like one more notification asking for your time. A glance, a tap, and the people you love know you're thinking of them.",
    ],
    thumb: "assets/magrana.png",
    links: [{ label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-Magrana" }],
  },
];

// ============================================================
//  HELPERS
// ============================================================
const icon = (key) => `<span class="ico">${ICONS[key] || ""}</span>`;

function linkHTML(l) {
  if (l.soon) return `<span class="taglink taglink--soon">${icon(l.icon)}${l.label}</span>`;
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

  // Master: a compact, tappable list of every project
  const list = work
    .map((w, i) => {
      const num = String(i + 1).padStart(2, "0");
      return `
      <li>
        <button class="worklist__item${i === 0 ? " is-active" : ""}" data-i="${i}" type="button">
          <span class="worklist__index">${num}</span>
          <span class="worklist__text">
            <span class="worklist__name">${w.name}</span>
            <span class="worklist__kind">${w.kind}</span>
          </span>
        </button>
      </li>`;
    })
    .join("");

  // Detail: the full write-up of each project, only the active one shown
  const views = work
    .map((w, i) => {
      const media = w.thumb
        ? `<img class="workview__img" src="${w.thumb}" alt="${w.name}" loading="lazy" />`
        : `<span class="workview__initial" style="background:${w.tint}">${w.name[0]}</span>`;
      const paras = (w.long || [w.desc]).map((p) => `<p>${p}</p>`).join("");
      return `
      <article class="workview${i === 0 ? " is-active" : ""}" data-i="${i}">
        <div class="workview__head">
          <div class="workview__icon">${media}</div>
          <div class="workview__meta">
            <h3 class="workview__name">${w.name}</h3>
            <span class="workview__kind">${w.kind}</span>
            <div class="workview__links">${w.links.map(linkHTML).join("")}</div>
          </div>
        </div>
        <div class="workview__paras">${paras}</div>
      </article>`;
    })
    .join("");

  el.innerHTML = `<ul class="worklist">${list}</ul><div class="work__detail">${views}</div>`;
}

function thumbHTML(g, i) {
  const fit = g.fit || (g.tint ? "contain" : "cover");
  const tintStyle = g.tint ? ` style="background:${g.tint}"` : "";
  const mediaCls = "gallery__thumb-el" + (fit === "contain" ? " is-contain" : "");
  const data =
    ` data-type="${g.type}" data-src="${g.src}" data-caption="${g.caption}"` +
    (g.project ? ` data-project="${g.project}"` : "") +
    (g.tint ? ` data-tint="${g.tint}"` : "") +
    (fit === "contain" ? ` data-fit="contain"` : "");
  return `
    <li>
      <button class="gallery__thumb${i === 0 ? " is-active" : ""}" type="button"${data}>
        <span class="gallery__thumb-media"${tintStyle}>${mediaHTML(g, mediaCls)}</span>
      </button>
    </li>`;
}

function renderRail(id, items) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = `
    <div class="gallery__stage" role="button" tabindex="0" aria-label="Open full size"></div>
    <ul class="gallery__thumbs">${items.map(thumbHTML).join("")}</ul>`;
}

// ============================================================
//  LIGHTBOX: opens a piece large on screen (shared by all galleries)
// ============================================================
function makeLightbox() {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lightbox__close" type="button" aria-label="Close">✕</button>
    <figure class="lightbox__fig">
      <div class="lightbox__media"></div>
      <figcaption class="lightbox__cap"></figcaption>
    </figure>`;
  document.body.appendChild(lb);
  const mediaEl = lb.querySelector(".lightbox__media");
  const capEl = lb.querySelector(".lightbox__cap");
  const open = (d) => {
    if (!d || !d.src) return;
    const tint = d.tint ? ` style="background:${d.tint}"` : "";
    const inner = d.type === "video"
      ? `<video src="${d.src}" autoplay muted loop playsinline controls></video>`
      : `<img src="${d.src}" alt="${d.caption || ""}" />`;
    mediaEl.innerHTML = `<div class="lightbox__frame${d.fit === "contain" ? " is-contain" : ""}"${tint}>${inner}</div>`;
    capEl.innerHTML =
      (d.project ? `<span class="lightbox__project">${d.project}</span>` : "") +
      `<span class="lightbox__title">${d.caption || ""}</span>`;
    lb.classList.add("is-open");
    document.body.classList.add("lightbox-open");
  };
  const close = () => {
    lb.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    mediaEl.innerHTML = ""; // unload media (stops video)
  };
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lightbox__close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("is-open")) close();
  });
  return { open };
}

// ============================================================
//  GALLERIES: featured piece + thumbnails. Hover/click a thumb to
//  feature it; click the featured piece to open it large.
// ============================================================
function initGalleries() {
  const galleries = document.querySelectorAll(".gallery");
  if (!galleries.length) return;
  const lightbox = makeLightbox();

  galleries.forEach((gallery) => {
    const stage = gallery.querySelector(".gallery__stage");
    const thumbs = Array.from(gallery.querySelectorAll(".gallery__thumb"));
    if (!stage || !thumbs.length) return;

    const feature = (thumb) => {
      const d = thumb.dataset;
      const tint = d.tint ? ` style="background:${d.tint}"` : "";
      const inner = d.type === "video"
        ? `<video src="${d.src}" autoplay muted loop playsinline></video>`
        : `<img src="${d.src}" alt="${d.caption || ""}" />`;
      stage.innerHTML = `
        <div class="gallery__stage-media${d.fit === "contain" ? " is-contain" : ""}"${tint}>${inner}</div>
        <div class="gallery__stage-cap">
          ${d.project ? `<span class="gallery__stage-project">${d.project}</span>` : ""}
          <span class="gallery__stage-title">${d.caption || ""}</span>
        </div>`;
      Object.assign(stage.dataset, d); // remember current piece for the lightbox
      thumbs.forEach((t) => t.classList.toggle("is-active", t === thumb));
    };

    thumbs.forEach((t) => {
      t.addEventListener("mouseenter", () => feature(t));
      t.addEventListener("click", () => feature(t));
      t.addEventListener("focus", () => feature(t));
    });
    stage.addEventListener("click", () => lightbox.open(stage.dataset));
    stage.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); lightbox.open(stage.dataset); }
    });

    feature(thumbs[0]);
  });
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

function renderEducation() {
  const el = document.getElementById("education");
  if (!el) return;
  el.innerHTML = education
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
//  RAILS: click-and-drag horizontal scrolling (wheel scrolls page)
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
//  HERO: cursor-reactive 3D tilt + light that follows the pointer
// ============================================================
function initHeroTilt() {
  const art = document.querySelector(".hero__art");
  if (!art) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const noHover = window.matchMedia("(hover: none)").matches;
  if (reduce || noHover) return;

  const MAX = 7; // max tilt in degrees
  let raf = null, px = 0.5, py = 0.3;
  const render = () => {
    raf = null;
    const ry = (px - 0.5) * MAX * 2;   // left/right -> rotateY
    const rx = (0.5 - py) * MAX * 2;   // up/down   -> rotateX
    art.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
    art.style.setProperty("--my", (py * 100).toFixed(1) + "%");
    art.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
  };
  art.addEventListener("pointermove", (e) => {
    const r = art.getBoundingClientRect();
    px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    art.classList.add("is-tilting");
    if (!raf) raf = requestAnimationFrame(render);
  });
  art.addEventListener("pointerleave", () => {
    art.classList.remove("is-tilting");
    art.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    art.style.removeProperty("--mx");
    art.style.removeProperty("--my");
  });
}

// Box-wide light that follows the cursor and recolors the content under it
function initHeroBox() {
  const box = document.getElementById("hero-box");
  if (!box) return;
  if (window.matchMedia("(hover: none)").matches) return;
  let raf = null, bx = 50, by = 0;
  const render = () => {
    raf = null;
    box.style.setProperty("--bx", bx.toFixed(1) + "%");
    box.style.setProperty("--by", by.toFixed(1) + "%");
  };
  box.addEventListener("pointermove", (e) => {
    const r = box.getBoundingClientRect();
    bx = ((e.clientX - r.left) / r.width) * 100;
    by = ((e.clientY - r.top) / r.height) * 100;
    box.classList.add("is-live");
    if (!raf) raf = requestAnimationFrame(render);
  });
  box.addEventListener("pointerleave", () => box.classList.remove("is-live"));
}

// ============================================================
//  MOTION: Lenis smooth scroll + GSAP ScrollTrigger
//  (uses gsap.from so content stays visible if GSAP fails to load)
// ============================================================
function initMotion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = window.gsap && window.ScrollTrigger;

  // Smooth scroll (Lenis) only on mobile, where the page scrolls as one column.
  // On desktop each open panel scrolls internally, so page-level smoothing is skipped.
  const mobile = window.matchMedia("(max-width: 900px)").matches;
  if (window.Lenis && !reduce && mobile) {
    const lenis = new window.Lenis({ duration: 1.1, smoothWheel: true });
    if (hasGSAP) {
      lenis.on("scroll", () => window.ScrollTrigger.update());
      window.gsap.ticker.add((t) => lenis.raf(t * 1000));
      window.gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  if (!hasGSAP || reduce) return; // content already visible; no animations

  // Only time-based intro animations here. Scroll-triggered reveals are omitted
  // on purpose: panels live in collapsed columns that never "scroll into view",
  // so a ScrollTrigger reveal would leave their content stuck hidden.
  const { gsap } = window;

  // Hero intro
  gsap.from(".hero__name .line > span", {
    yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.12, delay: 0.15,
  });
  gsap.from(".hero__meta, .hero__role, .hero__links, .hero__cv, .hero__hint", {
    y: 24, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.5,
  });
  gsap.from(".hero__art", { scale: 1.12, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.2 });
}

// ============================================================
//  ACCORDION: click a spine to open its panel; the rest collapse
// ============================================================
function initAccordion() {
  const root = document.getElementById("accordion");
  if (!root) return;
  const panels = Array.from(root.querySelectorAll("[data-panel]"));
  if (!panels.length) return;

  const open = (panel) => {
    if (!panel) return;
    panels.forEach((p) => {
      const isOpen = p === panel;
      p.classList.toggle("is-open", isOpen);
      const spine = p.querySelector("[data-spine]");
      if (spine) spine.setAttribute("aria-expanded", String(isOpen));
    });
    // Reset the freshly opened panel's scroll position to the top
    const body = panel.querySelector(".acc-panel__body");
    if (body) body.scrollTop = 0;
    // On mobile the panel grows downward; bring it into view
    if (window.matchMedia("(max-width: 900px)").matches) {
      requestAnimationFrame(() =>
        panel.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  };

  // Spine click toggles the panel open
  panels.forEach((panel) => {
    const spine = panel.querySelector("[data-spine]");
    spine?.addEventListener("click", () => open(panel));
  });

  // Hash links (nav + in-panel "Branding & art" etc.) open the target's panel
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id.length < 2) return;
      const target = document.querySelector(id);
      const panel = target?.closest("[data-panel]");
      if (!panel) return;
      e.preventDefault();
      open(panel);
    });
  });
}

// ============================================================
//  PROJECTS: master–detail. Click a project to show its write-up
// ============================================================
function initWork() {
  const items = Array.from(document.querySelectorAll("#work-panels .worklist__item"));
  const views = Array.from(document.querySelectorAll("#work-panels .workview"));
  if (!items.length) return;
  const activate = (btn) => {
    const i = btn.dataset.i;
    items.forEach((b) => b.classList.toggle("is-active", b === btn));
    views.forEach((v) => v.classList.toggle("is-active", v.dataset.i === i));
  };
  items.forEach((btn) => {
    // Hover to open on pointer devices; click still works (and covers touch)
    btn.addEventListener("mouseenter", () => activate(btn));
    btn.addEventListener("click", () => activate(btn));
    btn.addEventListener("focus", () => activate(btn));
  });
}

// The intro overlay animates purely in CSS; this just removes the node
// once it's done (or after a safety timeout) so it can't trap clicks.
function initIntro() {
  const intro = document.getElementById("intro");
  if (!intro) return;
  // On phones the spine is a bar across the top, so the overlay collapses
  // upward into it — pin the end height to the real spine's height.
  if (window.matchMedia("(max-width: 900px)").matches) {
    const spine = document.querySelector(".acc-panel--hero .acc-spine");
    if (spine) {
      intro.style.setProperty("--intro-h", Math.round(spine.getBoundingClientRect().height) + "px");
    }
  }
  let cleared = false;
  const done = () => {
    if (cleared) return;
    cleared = true;
    intro.remove();
  };
  intro.addEventListener("animationend", (e) => {
    if (e.animationName === "introHide") done();
  });
  setTimeout(done, 2600);
}

// ============================================================
//  BOOT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initIntro();
  renderWork();
  renderRail("art-rail", illustrations);
  renderRail("design-rail", design);
  initGalleries();
  renderSkills();
  renderExperience();
  renderEducation();
  renderLanguages();
  renderLinks();
  initTheme();
  initNav();
  initAccordion();
  initWork();
  animateLanguages();
  initRailDrag();
  initHeroBox();
  // Motion last, after content exists. Wait a tick for CDN scripts.
  if (document.readyState === "complete") initMotion();
  else window.addEventListener("load", initMotion);
});
