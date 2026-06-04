// ===== Skills — edit this list (icon = key in ICONS, js/icons.js) =====
const skills = [
  { name: "Swift", icon: "swift" },
  { name: "SwiftUI", icon: "swiftui" },
  { name: "Xcode", icon: "xcode" },
  { name: "UIKit", icon: "uikit" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "InDesign", icon: "indesign" },
  { name: "UI/UX Design", icon: "uiux" },
];

// ===== Links — edit this list =====
const links = [
  { name: "GitHub", icon: "github", url: "https://github.com/NimaKhodarahmi1998" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/nima-khodarahmi1998/" },
  { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/nimakhodarahmi1998/" },
  { name: "Email", icon: "mail", url: "mailto:7798.nima@gmail.com" },
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
  { role: "Junior iOS Developer", org: "Apple Developer Academy", period: "2025–Now" },
  { role: "Tourist Guide", org: "Amalfi Coast", period: "2025–Now" },
  { role: "Guide Writer", org: "TheGamer — Valnet", period: "2024" },
  { role: "Head Critic & Designer", org: "SargarME", period: "2021–24" },
  { role: "English Teacher", org: "Ministry of Education", period: "2017–23" },
];

// ===== Selected work — edit this list (each link: {label, icon, url}) =====
// Each item gets a thumbnail: `thumb` = image path, or `tint` = a CSS gradient
// behind the app's initial. To use a real screenshot, set `thumb: "assets/<file>"`.
const work = [
  {
    name: "Whispers of the Garden",
    desc: "Gamified Persian poetry, in hand-drawn gardens.",
    thumb: "assets/whispers.jpg",
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/whispers-of-the-garden/id6760307230" },
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden" },
    ],
  },
  {
    name: "Pomero",
    desc: "A native watchOS app for staying close to the people who matter most.",
    tint: "linear-gradient(135deg, #ff7a45, #ff2d55)",
    links: [
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-Pomero" },
    ],
  },
  {
    name: "NextG",
    desc: "An iOS app built at the Apple Developer Academy.",
    tint: "linear-gradient(135deg, #5b8def, #9b6bff)",
    links: [
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-NextG" },
    ],
  },
];

const icon = (key) => `<span class="ico">${ICONS[key] || ""}</span>`;

function renderSkills() {
  const el = document.getElementById("skills");
  if (el)
    el.innerHTML = skills
      .map((s) => `<li>${icon(s.icon)}${s.name}</li>`)
      .join("");
}

function renderLinks() {
  const el = document.getElementById("links");
  if (!el) return;
  el.innerHTML = links
    .map((l) => {
      const ext = l.url.startsWith("http") ? ' target="_blank" rel="noopener"' : "";
      return `<a href="${l.url}"${ext}>${icon(l.icon)}${l.name}</a>`;
    })
    .join("");
}

function renderWork() {
  const list = document.getElementById("work-list");
  if (!list) return;
  list.innerHTML = work
    .map((w) => {
      const thumb = w.thumb
        ? `<span class="work__thumb"><img src="${w.thumb}" alt="${w.name} icon" loading="lazy" /></span>`
        : `<span class="work__thumb" style="background:${w.tint}">${w.name[0]}</span>`;
      return `
    <li class="work__item">
      ${thumb}
      <div class="work__body">
        <h3 class="work__name">${w.name}</h3>
        <p class="work__desc">${w.desc}</p>
        <div class="work__links">
          ${w.links
            .map(
              (l) =>
                `<a href="${l.url}" target="_blank" rel="noopener">${icon(l.icon)}${l.label}<span class="work__arrow">↗</span></a>`
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

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderLinks();
  renderWork();
  renderLanguages();
  renderPath();
  renderCV();
  initTheme();
  animateLanguages();
  initPhotoTilt();
});
