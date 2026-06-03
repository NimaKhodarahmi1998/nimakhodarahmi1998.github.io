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
const work = [
  {
    name: "Whispers of the Garden",
    desc: "Gamified Persian poetry, in hand-drawn gardens.",
    links: [
      { label: "App Store", icon: "appstore", url: "https://apps.apple.com/it/app/whispers-of-the-garden/id6760307230" },
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden" },
    ],
  },
  {
    name: "Pomero",
    desc: "A clean, native Pomodoro timer for iOS.",
    links: [
      { label: "Code", icon: "github", url: "https://github.com/NimaKhodarahmi1998/app-Pomero" },
    ],
  },
  {
    name: "NextG",
    desc: "An iOS app built at the Apple Developer Academy.",
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
    .map(
      (w) => `
    <li class="work__item">
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
      <div class="lang__top">
        <span class="lang__name">${l.name}</span>
        <span class="lang__lvl">${l.level}</span>
      </div>
      <div class="lang__bar"><span style="width:${l.pct}%"></span></div>
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
    if (toggle) toggle.textContent = theme === "dark" ? "Light" : "Dark";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderLinks();
  renderWork();
  renderLanguages();
  renderPath();
  renderCV();
  initTheme();
});
