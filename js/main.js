// ===== Project data — edit this array to add/remove projects =====
const projects = [
  {
    icon: "🌸",
    title: "Whispers of the Garden",
    desc: "A gamified experience built around Persian poetry. Grow as you learn to live the slow, nourishing Persian life through the verses of the great poets — wrapped in hand-drawn illustrations inspired by real ancient Persian gardens.",
    tags: ["Swift", "SwiftUI", "iOS", "Game Design"],
    code: "https://github.com/NimaKhodarahmi1998/app-WhispersoftheGarden",
    demo: "",
  },
  {
    icon: "⏱️",
    title: "Pomero",
    desc: "A focus & productivity app for iOS. A clean, native take on the Pomodoro technique built with Swift and SwiftUI.",
    tags: ["Swift", "SwiftUI", "iOS"],
    code: "https://github.com/NimaKhodarahmi1998/app-Pomero",
    demo: "",
  },
  {
    icon: "📱",
    title: "NextG",
    desc: "An iOS app built with Swift at the Apple Developer Academy. A work in progress — check the repo for the latest.",
    tags: ["Swift", "iOS"],
    code: "https://github.com/NimaKhodarahmi1998/app-NextG",
    demo: "",
  },
];

// ===== Experience timeline — most recent first =====
const experience = [
  {
    period: "2025 — Present",
    role: "Junior iOS Developer",
    org: "Apple Developer Academy @ UNINA · Self-employed",
    place: "Naples, Italy",
    desc: "Learning Swift & SwiftUI and building native iOS apps from concept to MVP.",
  },
  {
    period: "2025 — Present",
    role: "Tourist Guide",
    org: "Di Sarno Car Service",
    place: "Amalfi Coast, Italy",
    desc: "Guiding travellers from around the world along the Amalfi Coast.",
  },
  {
    period: "2024",
    role: "Guide Writer",
    org: "TheGamer — Valnet Inc.",
    place: "Montreal, Canada (remote)",
    desc: "Wrote guides for one of the fastest-growing online video-game magazines.",
  },
  {
    period: "2021 — 2024",
    role: "Head Critic, Journalist & Graphic Designer",
    org: "SargarME Magazine — Sourena Games",
    place: "Tehran, Iran (remote)",
    desc: "Rose to head critic of the games section in ~6 months at Iran's #2 tech magazine, also writing and designing.",
  },
  {
    period: "2017 — 2023",
    role: "English Teacher",
    org: "Ministry of Education & Mohassel Institute",
    place: "Dezful, Iran",
    desc: "Taught English to teenagers, including in less-developed villages outside Dezful.",
  },
];

// ===== Render project cards =====
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects
    .map(
      (p) => `
    <article class="card">
      <div class="card__top">
        <span class="card__icon">${p.icon}</span>
        <span class="card__links">
          ${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">Code</a>` : ""}
          ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
        </span>
      </div>
      <h3 class="card__title">${p.title}</h3>
      <p class="card__desc">${p.desc}</p>
      <div class="card__tags">
        ${p.tags.map((t) => `<span class="card__tag">${t}</span>`).join("")}
      </div>
    </article>`
    )
    .join("");
}

// ===== Render experience timeline =====
function renderExperience() {
  const list = document.getElementById("timeline");
  if (!list) return;
  list.innerHTML = experience
    .map(
      (e) => `
    <li class="timeline__item">
      <span class="timeline__period">${e.period}</span>
      <div class="timeline__body">
        <h3 class="timeline__role">${e.role}</h3>
        <p class="timeline__org">${e.org} · <span>${e.place}</span></p>
        <p class="timeline__desc">${e.desc}</p>
      </div>
    </li>`
    )
    .join("");
}

// ===== Theme toggle (persists in localStorage) =====
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const icon = toggle?.querySelector(".theme-toggle__icon");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  applyTheme(initial);

  toggle?.addEventListener("click", () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

// ===== Footer year =====
function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperience();
  initTheme();
  setYear();
});
