// ===== Skills — edit this list (icon = key in ICONS, js/icons.js) =====
// Code skills filter the work list (highlight the projects that use them).
// Design skills (gallery: true) open the design gallery instead.
const skills = [
  { name: "Swift", icon: "swift" },
  { name: "SwiftUI", icon: "swiftui" },
  { name: "Xcode", icon: "xcode" },
  { name: "UIKit", icon: "uikit" },
  { name: "Git", icon: "git" },
  { name: "Procreate", icon: "procreate", featured: true, gallery: true },
  { name: "Figma", icon: "figma", gallery: true },
  { name: "Photoshop", icon: "photoshop", gallery: true },
  { name: "Illustrator", icon: "illustrator", gallery: true },
  { name: "InDesign", icon: "indesign", gallery: true },
  { name: "UI/UX Design", icon: "uiux", gallery: true },
];

// ===== Links — edit this list =====
const links = [
  { name: "Design", icon: "procreate", gallery: true },
  { name: "GitHub", icon: "github", url: "https://github.com/NimaKhodarahmi1998" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nima-khodarahmi1998/" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nimakhodarahmi1998/" },
  { name: "Email", icon: "mail", url: "mailto:7798.nima@gmail.com" },
];

// ===== Design gallery (opens in a full-screen overlay) — add more pieces here =====
const gallery = [
  { type: "video", src: "assets/cow-workers.mp4", caption: "Cow Workers Studio logo animation" },
  { type: "video", src: "assets/cow-workers-characters.mp4", caption: "Cow Workers Studio characters" },
  { type: "image", src: "assets/cow-workers-display.png", caption: "Cow Workers Studio brand lockup" },
  { type: "image", src: "assets/cow-workers-logo.png", caption: "Cow Workers Studio mascot", tint: "#5d87a8" },
  { type: "image", src: "assets/grabeat.png", caption: "GraBeat — app icon, the final glitch mark" },
  { type: "image", src: "assets/grabeat-icon-concept.png", caption: "GraBeat — early synthwave icon concept" },
];

// ===== Illustrations — standalone art, shown as its own gallery section =====
// To add a piece: drop the image in assets/ and add a line here, e.g.
//   { type: "image", src: "assets/my-art.png", caption: "Title of the piece" }
// (videos work too: { type: "video", src: "assets/clip.mp4", caption: "…" })
const illustrations = [
  { type: "video", src: "assets/illustration-garden.mp4", caption: "Whispers of the Garden — the garden, in motion" },
  { type: "image", src: "assets/illustration-garden-courtyard.jpg", caption: "A Persian courtyard — hand-painted scene art" },
  { type: "image", src: "assets/illustration-garden-pool.jpg", caption: "Lotuses on the courtyard pool" },
  { type: "image", src: "assets/illustration-whispers-verse.jpg", caption: "A Khayyam verse, unfurled in the garden" },
  { type: "image", src: "assets/illustration-lotus.jpg", caption: "Lotus — painted in Procreate" },
  { type: "image", src: "assets/illustration-lilypad.jpg", caption: "Lily pad" },
  { type: "image", src: "assets/illustration-bird.jpg", caption: "Songbird" },
  { type: "image", src: "assets/illustration-owl.jpg", caption: "Owl" },
  { type: "image", src: "assets/illustration-stage-fright.jpg", caption: "Stage fright — editorial illustration" },
];

// ===== Languages (pct = bar fill) =====
const languages = [
  { name: "Persian", level: "Native", pct: 100 },
  { name: "English", level: "C2", pct: 95 },
  { name: "Italian", level: "B2", pct: 65 },
  { name: "Spanish", level: "A2", pct: 30 },
];

// ===== Experience (most recent first) =====
const experience = [
  { role: "Co-founder, Developer & Designer", org: "Cow Workers Studio", period: "2025–Now" },
  { role: "Junior iOS Developer", org: "Apple Developer Academy", period: "2025–Now" },
  { role: "Tourist Guide", org: "Amalfi Coast", period: "2025–Now" },
  { role: "Guide Writer", org: "TheGamer (Valnet)", period: "2024" },
  { role: "Head Critic & Designer", org: "SargarME", period: "2021–24" },
  { role: "English Teacher", org: "Ministry of Education", period: "2017–23" },
];

// ===== Selected work — edit this list (each link: {label, icon, url}) =====
// Each item gets a thumbnail: `thumb` = image path, or `tint` = a CSS gradient
// behind the app's initial. To use a real screenshot, set `thumb: "assets/<file>"`.
// The studio is shown as a featured banner above the project list.
const studio = {
  name: "Cow Workers Studio",
  role: "Co-founder · Developer & Designer",
  desc: "An indie game studio I co-founded. I shape the brand, draw the art, and build the games.",
  thumb: "assets/cow-workers-icon.png",
  tags: ["Swift", "SwiftUI", "Xcode", "Git", "Procreate", "UI/UX Design"],
  links: [
    { label: "Branding & posters", icon: "procreate", gallery: true },
  ],
};

const work = [
  {
    name: "GraBeat",
    desc: "A two-player camera game — catch neon notes by pinching, to the beat. Swift, SwiftUI & Vision hand tracking, on iPad & Mac.",
    thumb: "assets/grabeat.png",
    credit: "Graphics & visual design",
    tags: ["Swift", "SwiftUI", "Xcode", "UIKit", "Git", "Procreate", "UI/UX Design"],
    links: [
      { label: "Code", icon: "github", url: "https://github.com/whyzii/Grabeat" },
      { label: "Graphics by me", icon: "procreate", gallery: true },
    ],
  },
  {
    name: "Whispers of the Garden",
    desc: "Gamified Persian poetry, in hand-drawn gardens.",
    thumb: "assets/whispers.jpg",
    tags: ["Swift", "SwiftUI", "Xcode", "Git", "UI/UX Design"],
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/whispers-of-the-garden/id6760307230" },
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden" },
    ],
  },
  {
    name: "Pomero",
    desc: "A native watchOS app for staying close to the people who matter most.",
    thumb: "assets/pomero.png",
    tags: ["Swift", "SwiftUI", "Xcode", "Git"],
    links: [
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-Pomero" },
    ],
  },
];

const icon = (key) => `<span class="ico">${ICONS[key] || ""}</span>`;

function renderSkills() {
  const el = document.getElementById("skills");
  if (!el) return;
  el.innerHTML = skills
    .map((s) => {
      const cls = ["chip"];
      if (s.featured) cls.push("is-featured");
      if (s.gallery) cls.push("js-open-gallery");
      const attrs = s.gallery
        ? ` title="See ${s.name} work in the design gallery"`
        : ` data-skill="${s.name}" title="Show projects built with ${s.name}"`;
      return `<li><button type="button" class="${cls.join(" ")}"${attrs}>${icon(s.icon)}${s.name}</button></li>`;
    })
    .join("");
}

function renderLinks() {
  const el = document.getElementById("links");
  if (!el) return;
  el.innerHTML = links
    .map((l) => {
      if (l.gallery) return `<a href="#" class="js-open-gallery">${icon(l.icon)}${l.name}</a>`;
      const ext = l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${l.url}"${ext}>${icon(l.icon)}${l.name}</a>`;
    })
    .join("");
}

function renderStudio() {
  const el = document.getElementById("studio");
  if (!el) return;
  el.dataset.tags = (studio.tags || []).join("|");
  const thumb = studio.thumb
    ? `<span class="studio__thumb"><img src="${studio.thumb}" alt="${studio.name} icon" loading="lazy" /></span>`
    : `<span class="studio__thumb" style="background:${studio.tint}">${studio.name[0]}</span>`;
  el.innerHTML = `
    ${thumb}
    <div class="studio__body">
      <p class="studio__tag">Studio</p>
      <h3 class="studio__name">${studio.name}</h3>
      <p class="studio__role">${studio.role}</p>
      <p class="studio__desc">${studio.desc}</p>
      <div class="work__links">
        ${studio.links
          .map((l) =>
            l.gallery
              ? `<a href="#" class="js-open-gallery">${icon(l.icon)}${l.label}<span class="work__arrow">↗</span></a>`
              : `<a href="${l.url}" target="_blank" rel="noopener">${icon(l.icon)}${l.label}<span class="work__arrow">↗</span></a>`
          )
          .join("")}
      </div>
    </div>`;
}

function renderWork() {
  const list = document.getElementById("work-list");
  if (!list) return;
  list.innerHTML = work
    .map((w) => {
      const thumb = w.thumb
        ? `<span class="work__thumb"><img src="${w.thumb}" alt="${w.name} icon" loading="lazy" /></span>`
        : `<span class="work__thumb" style="background:${w.tint}">${w.name[0]}</span>`;
      const credit = w.credit
        ? `<span class="work__credit">${icon("procreate")}${w.credit}</span>`
        : "";
      return `
    <li class="work__item" data-tags="${(w.tags || []).join("|")}">
      ${thumb}
      <div class="work__body">
        <h3 class="work__name">${w.name}${credit}</h3>
        <p class="work__desc">${w.desc}</p>
        <div class="work__links">
          ${w.links
            .map((l) =>
              l.gallery
                ? `<a href="#" class="js-open-gallery">${icon(l.icon)}${l.label}<span class="work__arrow">↗</span></a>`
                : `<a href="${l.url}" target="_blank" rel="noopener">${icon(l.icon)}${l.label}<span class="work__arrow">↗</span></a>`
            )
            .join("")}
        </div>
      </div>
    </li>`;
    })
    .join("");
}

function renderLanguages() {
  const el = document.getElementById("languages");
  if (!el) return;
  el.innerHTML = languages
    .map(
      (l) => `
    <li class="lang">
      <div class="lang__top">
        <span class="lang__name">${l.name}</span>
        <span class="lang__lvl">${l.level}</span>
      </div>
      <div class="lang__bar"><span data-pct="${l.pct}"></span></div>
    </li>`
    )
    .join("");
}

function renderPath() {
  const el = document.getElementById("path");
  if (!el) return;
  el.innerHTML = experience
    .map(
      (e) => `
    <li class="path__item">
      <span class="path__role">${e.role}</span>
      <span class="path__meta">${e.org}<span class="path__period">${e.period}</span></span>
    </li>`
    )
    .join("");
}

function renderCV() {
  const el = document.getElementById("cv");
  if (el) el.innerHTML = `${icon("download")}Download CV`;
}

// ===== Theme (monochrome) =====
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
      // show the icon for the mode you'd switch TO
      toggle.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
      toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }
}

// ===== Animate language bars when they scroll into view =====
function animateLanguages() {
  const bars = document.querySelectorAll(".lang__bar span");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fill = (el) => { el.style.width = (el.dataset.pct || 0) + "%"; };

  if (reduce || !("IntersectionObserver" in window)) {
    bars.forEach(fill);
    return;
  }
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { fill(e.target); o.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  bars.forEach((b) => obs.observe(b));
}

// ===== Subtle cursor-driven tilt on the photo =====
function initPhotoTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return; // skip on touch
  const card = document.querySelector(".photo");
  const img = card?.querySelector("img");
  if (!card || !img) return;

  const MAX = 7; // degrees
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    img.style.transform =
      `scale(1.04) rotateX(${(-py * MAX).toFixed(2)}deg) rotateY(${(px * MAX).toFixed(2)}deg)`;
  });
  card.addEventListener("pointerleave", () => { img.style.transform = ""; });
}

// ===== Skill filter — click a code skill to spotlight the work that uses it =====
function initSkillFilter() {
  const chips = [...document.querySelectorAll(".chip[data-skill]")];
  const items = [...document.querySelectorAll(".work__item, .studio")];
  if (!chips.length || !items.length) return;
  let active = null;

  const clear = () => {
    active = null;
    chips.forEach((c) => c.classList.remove("is-active"));
    items.forEach((it) => it.classList.remove("is-dim", "is-match"));
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const skill = chip.dataset.skill;
      if (active === skill) return clear(); // toggle off
      active = skill;
      chips.forEach((c) => c.classList.toggle("is-active", c === chip));
      items.forEach((it) => {
        const match = (it.dataset.tags || "").split("|").includes(skill);
        it.classList.toggle("is-match", match);
        it.classList.toggle("is-dim", !match);
      });
    });
  });

  // Opening the design gallery or pressing Escape resets the spotlight.
  document.querySelectorAll(".js-open-gallery").forEach((b) => b.addEventListener("click", clear));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") clear(); });
}

// ===== Design gallery overlay =====
function galleryItem(g) {
  const bg = g.tint ? ` style="background:${g.tint}"` : "";
  const media =
    g.type === "video"
      ? `<video src="${g.src}" autoplay muted loop playsinline></video>`
      : `<img src="${g.src}" alt="${g.caption}" loading="lazy" />`;
  return `<figure class="gallery__item"${bg}>${media}<figcaption class="gallery__cap">${g.caption}</figcaption></figure>`;
}

const gallerySets = { design: gallery, illustrations };
let galleryTab = "design";

function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  grid.innerHTML = (gallerySets[galleryTab] || []).map(galleryItem).join("");
  grid.scrollTop = 0;
}

function setGalleryTab(tab) {
  if (!gallerySets[tab]) return;
  galleryTab = tab;
  document.querySelectorAll(".gallery__tab").forEach((t) =>
    t.classList.toggle("is-active", t.dataset.tab === tab));
  renderGallery();
}

function initGallery() {
  const el = document.getElementById("gallery");
  if (!el) return;
  const open = (e) => {
    if (e) e.preventDefault();
    el.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    el.hidden = true;
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".js-open-gallery").forEach((b) => b.addEventListener("click", open));
  el.querySelectorAll(".gallery__tab").forEach((t) =>
    t.addEventListener("click", () => setGalleryTab(t.dataset.tab)));
  el.querySelectorAll("[data-close]").forEach((c) => c.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !el.hidden) close();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderLinks();
  renderStudio();
  renderWork();
  renderLanguages();
  renderPath();
  renderCV();
  renderGallery();
  initTheme();
  animateLanguages();
  initPhotoTilt();
  initGallery();
  initSkillFilter();
});
