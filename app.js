const mainView = document.querySelector("#main-view");
const archiveList = document.querySelector("#project-archive-list");
const archiveFilters = document.querySelector("#project-filters");
const archiveCount = document.querySelector("#project-archive-count");

/* ---------- icon system ---------- */

const ICON_ATTRS = `viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`;

function svg(inner) {
  return `<svg ${ICON_ATTRS} aria-hidden="true">${inner}</svg>`;
}

const ICONS = {
  home: svg(`<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>`),
  user: svg(`<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`),
  chart: svg(`<path d="M3 3v18h18"/><polyline points="7 14 11 10 14 13 20 7"/>`),
  coin: svg(`<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5a3 3 0 0 0-5.5 1.5c0 3 5.5 2 5.5 5a3 3 0 0 1-5.5 1.5"/><path d="M12 7v2"/><path d="M12 17v2"/>`),
  bot: svg(`<rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 4v4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M9 18h6"/>`),
  server: svg(`<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><circle cx="7" cy="7.5" r="0.6"/><circle cx="7" cy="16.5" r="0.6"/><path d="M11 7.5h6"/><path d="M11 16.5h6"/>`),
  bag: svg(`<path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 1 1 6 0"/>`),
  signal: svg(`<path d="M2 20h2"/><path d="M6 20v-4"/><path d="M10 20v-8"/><path d="M14 20v-12"/><path d="M18 20v-16"/><path d="M22 20h0"/>`),
  phone: svg(`<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>`),
  cube: svg(`<path d="M12 2 3 7v10l9 5 9-5V7Z"/><path d="M3 7l9 5 9-5"/><path d="M12 12v10"/>`),
  pick: svg(`<path d="M14 4l6 6"/><path d="M17 7 7 17l-4 4"/><path d="M7 17l3-6 6-3"/>`),
  archive: svg(`<rect x="3" y="3" width="18" height="5" rx="1"/><path d="M5 8v12h14V8"/><path d="M10 12h4"/>`),
  github: svg(`<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.7.3-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5a4 4 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/>`),
  mail: svg(`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>`),
  link: svg(`<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>`),
  clock: svg(`<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`),
  sparkle: svg(`<path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/><path d="m6 6 2 2"/><path d="m16 16 2 2"/><path d="m6 18 2-2"/><path d="m16 8 2-2"/>`),
  wave: svg(`<path d="M3 13c2.2-3.6 4.2-5.4 6.1-5.4 1.2 0 1.9.8 2.3 2.1l.7 2.3c.4 1.3 1.2 1.9 2.4 1.9 1.7 0 3.5-1.4 5.4-4.1"/><path d="M4.2 16.1c2-.8 3.9-1.2 5.6-1.2 1.5 0 2.6.4 3.4 1.2.8.8 1.7 1.2 2.9 1.2 1.5 0 2.9-.7 4.2-2.1"/>`),
  flag: svg(`<path d="M5 3v18"/><path d="M5 4h12l-3 4 3 4H5"/>`),
  layers: svg(`<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/><path d="m3 18 9 5 9-5"/>`),
  terminal: svg(`<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3"/><path d="M13 15h4"/>`),
  sun: svg(`<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5"/><path d="M12 19.5V22"/><path d="m4.9 4.9 1.8 1.8"/><path d="m17.3 17.3 1.8 1.8"/><path d="M2 12h2.5"/><path d="M19.5 12H22"/><path d="m4.9 19.1 1.8-1.8"/><path d="m17.3 6.7 1.8-1.8"/>`),
  moon: svg(`<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5Z"/>`),
  telegram: svg(`<path d="M21.5 3.5 2.9 11.1c-1 .4-.9 1.8.1 2l4.7 1.4 1.8 5.5c.3.8 1.3 1 1.9.4l2.8-2.7 4.9 3.6c.7.5 1.7.1 1.9-.7l3.1-15.1c.2-.9-.7-1.7-1.7-1.3Z"/><path d="m8.1 14.5 8.9-5.7"/>`),
  star: svg(`<path d="m12 3 2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9L12 3Z"/>`),
  briefcase: svg(`<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>`),
  book: svg(`<path d="M4 4v16a2 2 0 0 0 2 2h14V4H6a2 2 0 0 0-2 2v14"/><path d="M8 7h8"/><path d="M8 11h8"/>`),
  pen: svg(`<path d="m14 4 6 6-10 10H4v-6z"/><path d="m13 5 6 6"/>`),
  note: svg(`<path d="M4 4h12l4 4v12H4z"/><path d="M16 4v4h4"/><path d="M7 12h8"/><path d="M7 16h6"/>`),
  gaming: svg(`<rect x="2" y="8" width="20" height="10" rx="3"/><path d="M7 12h2m-1-1v2"/><circle cx="15" cy="12" r="0.8"/><circle cx="17.5" cy="14" r="0.8"/>`),
};

const PROJECT_ICON = {
  overview: "home",
  coinvote: "coin",
  bubblebot: "bot",
  hytale: "server",
  vinted: "bag",
  vela: "signal",
  leclerc: "phone",
  sigmacraft: "gaming",
  eltacraft: "pick",
};

const TAB_ICON = {
  about: "user",
  experience: "briefcase",
  education: "book",
  writing: "pen",
};

function injectRailIcons() {
  document.querySelectorAll(".rail-link[data-view]").forEach((link) => {
    if (link.querySelector(".rail-link__icon")) return;
    const view = link.dataset.view;
    const name = PROJECT_ICON[view];
    if (!name) return;
    const wrap = document.createElement("span");
    wrap.className = "rail-link__icon";
    wrap.innerHTML = ICONS[name];
    link.prepend(wrap);
  });

  document.querySelectorAll(".rail-link[data-starred='true']").forEach((link) => {
    const title = link.querySelector(".rail-link__body strong");
    if (!title || title.querySelector(".rail-link__star")) return;
    const badge = document.createElement("span");
    badge.className = "rail-link__star";
    badge.innerHTML = ICONS.star;
    title.append(badge);
  });
}

/* ---------- theme picker ---------- */

const THEMES = [
  /* ---- dark ---- */
  { id: "warmdeck", name: "Warm deck", dot: "#d88b55", mode: "dark" },
  { id: "terminal", name: "Terminal CRT", dot: "#7cff9a", mode: "dark" },
  { id: "amber", name: "Amber CRT", dot: "#ffb547", mode: "dark" },
  { id: "nord", name: "Nord", dot: "#88c0d0", mode: "dark" },
  { id: "gruvbox", name: "Gruvbox", dot: "#fabd2f", mode: "dark" },
  { id: "glass", name: "Glass violet", dot: "#a78bfa", mode: "dark" },
  { id: "synthwave", name: "Synthwave", dot: "#ff4dcb", mode: "dark" },
  { id: "zinc", name: "Zinc neutral", dot: "#fafafa", mode: "dark" },
  { id: "arcade", name: "Arcade pixel", dot: "#ffd74a", mode: "dark" },
  { id: "midnight", name: "Midnight blue", dot: "#60a5fa", mode: "dark" },
  { id: "forest", name: "Deep forest", dot: "#4ade80", mode: "dark" },
  { id: "crimson", name: "Crimson", dot: "#ef4444", mode: "dark" },
  { id: "dracula", name: "Dracula", dot: "#bd93f9", mode: "dark" },
  { id: "ocean", name: "Ocean teal", dot: "#2dd4bf", mode: "dark" },
  { id: "sunset", name: "Sunset", dot: "#fb923c", mode: "dark" },
  { id: "monokai", name: "Monokai", dot: "#a6e22e", mode: "dark" },
  { id: "cyber", name: "Cyber", dot: "#00e0ff", mode: "dark" },
  { id: "plum", name: "Plum", dot: "#e879f9", mode: "dark" },
  { id: "sepia-dark", name: "Sepia dark", dot: "#c48a3d", mode: "dark" },

  /* ---- light ---- */
  { id: "editorial", name: "Editorial paper", dot: "#a8441a", mode: "light" },
  { id: "brutalist", name: "Brutalist", dot: "#ff3b00", mode: "light" },
  { id: "swiss", name: "Swiss red", dot: "#e40521", mode: "light" },
  { id: "solarized", name: "Solarized light", dot: "#cb4b16", mode: "light" },
  { id: "magazine", name: "Magazine", dot: "#c62431", mode: "light" },
  { id: "newsprint", name: "Newsprint", dot: "#0a0907", mode: "light" },
  { id: "notebook", name: "Notebook", dot: "#1f4ea8", mode: "light" },
  { id: "mono", name: "Mono typographic", dot: "#111111", mode: "light" },
  { id: "rose", name: "Rose", dot: "#be185d", mode: "light" },
  { id: "mint", name: "Mint", dot: "#0f766e", mode: "light" },
  { id: "sky", name: "Sky blue", dot: "#0369a1", mode: "light" },
  { id: "sand", name: "Sand desert", dot: "#b45309", mode: "light" },
  { id: "lilac", name: "Lilac", dot: "#7c3aed", mode: "light" },
  { id: "linen", name: "Linen cream", dot: "#737373", mode: "light" },
  { id: "peach", name: "Peach", dot: "#ea580c", mode: "light" },
  { id: "sage", name: "Sage", dot: "#4d7c5c", mode: "light" },
];

const LEGACY_THEME_KEY = "leomesbah.theme";
const THEME_KEY = "leomesbah.theme.v2";
const PICKER_STATE_KEY = "leomesbah.picker.v2";
const MODE_MEMORY_KEY = "leomesbah.theme.mode-memory.v1";
const LIGHT_DEFAULT_THEME = "magazine";
const DARK_DEFAULT_THEME = "warmdeck";
const GITLAB_CERT_URL = encodeURI("assets/files/certificat_MESBAH Léo_18_04_2025.pdf");
let themeManagerToggle = null;

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function getLegacyTheme() {
  const legacy = localStorage.getItem(LEGACY_THEME_KEY);
  if (legacy && legacy !== "warmdeck") return legacy;
  return null;
}

function prefersDarkMode() {
  return typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getDefaultTheme() {
  return prefersDarkMode() ? DARK_DEFAULT_THEME : LIGHT_DEFAULT_THEME;
}

function getTheme() {
  return getStoredTheme() || getLegacyTheme() || getDefaultTheme();
}

function getThemeMeta(id) {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

function getPickerState() {
  try {
    return JSON.parse(localStorage.getItem(PICKER_STATE_KEY)) || { mode: null };
  } catch {
    return { mode: null };
  }
}

function setPickerState(next) {
  localStorage.setItem(PICKER_STATE_KEY, JSON.stringify(next));
}

function getModeMemory() {
  try {
    return JSON.parse(localStorage.getItem(MODE_MEMORY_KEY)) || {};
  } catch {
    return {};
  }
}

function setModeMemory(next) {
  localStorage.setItem(MODE_MEMORY_KEY, JSON.stringify(next));
}

function rememberThemeForMode(id) {
  const theme = getThemeMeta(id);
  const memory = getModeMemory();
  memory[theme.mode] = theme.id;
  setModeMemory(memory);
}

function getThemeForMode(mode) {
  const memory = getModeMemory();
  const remembered = memory[mode];
  if (remembered && getThemeMeta(remembered).mode === mode) return remembered;
  return mode === "dark" ? DARK_DEFAULT_THEME : LIGHT_DEFAULT_THEME;
}

function applyTheme(id, options = {}) {
  const { persist = true } = options;
  document.documentElement.dataset.theme = id;
  setPickerState({ mode: getThemeMeta(id).mode });
  if (persist) {
    localStorage.setItem(THEME_KEY, id);
    rememberThemeForMode(id);
  }
  syncThemePicker();
}

function syncThemePicker() {
  const current = getTheme();
  const match = getThemeMeta(current);
  const activeMode = getPickerState().mode || match.mode;
  document.querySelectorAll(".theme-option").forEach((el) => {
    el.setAttribute("aria-selected", el.dataset.theme === current ? "true" : "false");
  });
  document.querySelectorAll(".theme-mode").forEach((el) => {
    el.setAttribute("aria-selected", el.dataset.mode === activeMode ? "true" : "false");
  });
  const pickerName = document.querySelector(".theme-picker__current");
  if (pickerName) pickerName.textContent = match.name;
  syncThemeModeToggle();
}

function renderPickerGrid(mode) {
  return THEMES.filter((t) => t.mode === mode)
    .map(
      (t) => `
        <button class="theme-option" type="button" role="option" data-theme="${t.id}" aria-selected="false" title="${t.name}">
          <span class="theme-option__dot" style="background:${t.dot}"></span>
          <span class="theme-option__name">${t.name}</span>
        </button>
      `,
    )
    .join("");
}

function mountThemePicker() {
  const picker = document.querySelector(".theme-picker");
  if (!picker) return;
  const panel = picker.querySelector(".theme-picker__panel");

  const pickerState = getPickerState();
  const currentMode = pickerState.mode || getThemeMeta(getTheme()).mode;

  panel.innerHTML = `
    <div class="theme-picker__head">
      <div class="theme-picker__meta">
        <span class="theme-picker__eyebrow">Theme manager</span>
        <strong class="theme-picker__current">${getThemeMeta(getTheme()).name}</strong>
      </div>
      <div class="theme-picker__modes" role="tablist">
        <button class="theme-mode" type="button" data-mode="light" ${currentMode === "light" ? 'aria-selected="true"' : ""}>Light</button>
        <button class="theme-mode" type="button" data-mode="dark" ${currentMode === "dark" ? 'aria-selected="true"' : ""}>Dark</button>
      </div>
      <button class="theme-picker__min" type="button" aria-label="Hide theme manager" title="Hide">×</button>
    </div>
    <div class="theme-picker__grid" role="listbox">
      ${renderPickerGrid(currentMode)}
    </div>
  `;

  function openPanel(open) {
    picker.dataset.revealed = open ? "true" : "false";
    picker.dataset.open = open ? "true" : "false";
    panel.hidden = !open;
  }

  themeManagerToggle = (forceOpen = null) => {
    const nextOpen = typeof forceOpen === "boolean" ? forceOpen : picker.dataset.open !== "true";
    openPanel(nextOpen);
  };

  picker.querySelectorAll(".theme-mode").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      picker.querySelectorAll(".theme-mode").forEach((m) => m.setAttribute("aria-selected", m === btn ? "true" : "false"));
      picker.querySelector(".theme-picker__grid").innerHTML = renderPickerGrid(mode);
      setPickerState({ mode });
      syncThemePicker();
    });
  });

  picker.querySelector(".theme-picker__min").addEventListener("click", (event) => {
    event.stopPropagation();
    openPanel(false);
  });

  panel.addEventListener("click", (event) => {
    const opt = event.target.closest("[data-theme]");
    if (!opt) return;
    applyTheme(opt.dataset.theme);
  });

  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target) && picker.dataset.open === "true") {
      openPanel(false);
    }
  });

  syncThemePicker();
}

function syncThemeModeToggle() {
  const button = document.querySelector("#theme-mode-toggle");
  if (!button) return;
  const currentMode = getThemeMeta(getTheme()).mode;
  const targetMode = currentMode === "dark" ? "light" : "dark";
  button.innerHTML = `<span class="theme-mode-toggle__icon" aria-hidden="true">${currentMode === "dark" ? ICONS.moon : ICONS.sun}</span>`;
  button.setAttribute("aria-label", `Switch to ${targetMode} mode`);
  button.setAttribute("title", `Switch to ${targetMode} mode`);
}

function mountThemeModeToggle() {
  const button = document.querySelector("#theme-mode-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    const currentMode = getThemeMeta(getTheme()).mode;
    const targetMode = currentMode === "dark" ? "light" : "dark";
    applyTheme(getThemeForMode(targetMode));
  });
  syncThemeModeToggle();
}

function mountSystemThemeSync() {
  if (getStoredTheme()) return;
  const media = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  if (!media?.addEventListener) return;
  media.addEventListener("change", () => {
    if (getStoredTheme()) return;
    applyTheme(getDefaultTheme(), { persist: false });
  });
}

document.documentElement.dataset.theme = getTheme();

function handleThemeShortcut(event) {
  if (!event.ctrlKey || !event.shiftKey || event.key.toLowerCase() !== "d") return;
  event.preventDefault();
  if (themeManagerToggle) themeManagerToggle();
}

function boot() {
  injectRailIcons();
  mountThemePicker();
  mountThemeModeToggle();
  mountSystemThemeSync();
  document.addEventListener("keydown", handleThemeShortcut);
  syncThemePicker();
}

if (document.readyState !== "loading") {
  boot();
} else {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
}

const state = {
  view: "overview",
  overviewTab: "about",
  archiveFilter: "all",
};

const overviewTabs = {
  about: {
    label: "About",
    render() {
      return `
        <section class="space-pane">
          <div class="pane-copy">
            <p>
              <strong>I started at 12 because I was already obsessed with building things online:
              public Minecraft servers, websites, vote pages and paid shop flows.</strong> It was
              real software from the start, with players on it, plugins to ship and live systems to keep up.
            </p>
            <p>
              That phase still shows up in
              <button class="inline-project-link" type="button" data-open-project="sigmacraft">SigmaCraft</button>
              and
              <button class="inline-project-link" type="button" data-open-project="eltacraft">EltaCraft</button>:
              custom plugins, gameplay systems, rankings, boutiques, moderation tooling and live ops.
            </p>
            <p>
              I also spent time on design and 4D animation, so I care about presentation as much
              as the backend. That still shapes how I build products now.
            </p>
            <p>
              The same bias still drives my work across <strong>C#/.NET</strong>, <strong>C/C++</strong>,
              <strong>Unreal</strong>, <strong>PHP/JS</strong>, <strong>SQL</strong>, <strong>Linux</strong>
              and automation.
            </p>
          </div>
        </section>
      `;
    },
  },
  experience: {
    label: "Experience",
    render() {
      return `
        <section class="space-pane">
          <div class="list-rows">
            <article class="list-row">
              <span>2021 → now</span>
              <div>
                <strong>KNDS France</strong>
                <p>Software Engineer & AI Lead. C#/.NET/Unity, C/C++, Unreal (C++/Blueprints), full-stack (PHP/JS), AI, AR/VR, Linux & network admin.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2021 → now</span>
              <div>
                <strong>Coinvote.cc · SARL</strong>
                <p>Founder. Full-stack (PHP/JS/Python/C#/C++), backend & APIs, realtime processing, Linux ops, Cloudflare, scaling, mobile apps (iOS/Android), growth, SEO. 500k+ users.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2020</span>
              <div>
                <strong>Appen · Independent</strong>
                <p>Ads evaluation and transcription — SEA quality, voice-assistant training data.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2020</span>
              <div>
                <strong>Datavio.ai · Independent</strong>
                <p>Web search evaluator — AI-driven search quality and ranking.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2019</span>
              <div>
                <strong>E.Leclerc Royan · Internship</strong>
                <p>Mobile application developer (Xamarin, C#) and hardware/software repair for clients.</p>
              </div>
            </article>
          </div>
        </section>
      `;
    },
  },
  education: {
    label: "Education",
    render() {
      const row = (year, title, body) => `
        <article class="list-row">
          <span>${year}</span>
          <div>
            <strong>${title}</strong>
            <p>${body}</p>
          </div>
        </article>
      `;

      return `
        <section class="space-pane">
          <div class="space-section">
            <p class="eyebrow">Degrees</p>
            <div class="list-rows">
              ${row("2021 → 2024", "ESIEE Paris — Engineering degree", "Computer science and 3D development, engineering track.")}
              ${row("2023 → 2024", "FIB Barcelona — Master's degree", "Innovation & Research in Informatics: VR/AR, networks (FINE), security (IAS), operating systems and processor architecture.")}
              ${row("2020 → 2021", "ATS — Scientific preparatory year", "Post-diploma scientific preparatory year.")}
              ${row("2018 → 2020", "Advanced Technician Diploma in Digital Systems", "Computer science, networks and applied systems.")}
              ${row("2018", "French Scientific Baccalaureate — Mathematics specialty", "General secondary diploma with a strong math focus.")}
            </div>
          </div>

          <div class="space-section">
            <p class="eyebrow">Certifications</p>
            <div class="list-rows">
              ${row("2020", "Microsoft — Azure Fundamentals", "Certified.")}
              ${row("2019", "Cisco — CCNA R&S, Introduction to Networks", "Certified.")}
              ${row("2019", "Google Digital Workshop — Digital marketing fundamentals", "Google · issued Oct. 2019.")}
            </div>
          </div>

          <div class="space-section">
            <p class="eyebrow">Training</p>
            <div class="list-rows">
              ${row("2025", `GitLab CI/CD — ORSYS`, `GitLab CI/CD training: mastering the development lifecycle of software projects · 16/04/2025 → 18/04/2025 · <a class="inline-project-link" href="${GITLAB_CERT_URL}" target="_blank" rel="noreferrer">certificate PDF</a>.`)}
            </div>
          </div>
        </section>
      `;
    },
  },
  writing: {
    label: "Articles",
    render() {
      return `
        <section class="space-pane">
          <div class="pane-copy">
            <p>Reserved for future Medium posts and longer writeups.</p>
          </div>
          <div class="list-rows">
            <article class="list-row">
              <span>soon</span>
              <div>
                <strong>Build notes</strong>
                <p>Longer breakdowns for systems, products and reverse-engineering adjacent work.</p>
              </div>
            </article>
          </div>
        </section>
      `;
    },
  },
};

const PROJECT_CATEGORY_LABELS = {
  product: "Product",
  automation: "Automation",
  web: "Web platform",
  tooling: "Tooling",
  realtime: "Realtime",
  mobile: "Mobile",
  minecraft: "Minecraft",
};

const projects = {
  coinvote: {
    featured: true,
    category: "product",
    sortYear: new Date().getFullYear(),
    railNote: "live product, backend, ops",
    period: "current",
    kind: "Current product",
    title: "Coinvote.cc",
    summary:
      "A crypto voting platform built as a real product: product decisions, backend work, deployment, operations and day-to-day iteration.",
    meta: ["Product", "Backend", "Ops", "Live system"],
    points: [
      "Current focus, built and operated as a live product rather than a demo.",
      "Covers the full loop: product decisions, backend, deployment and maintenance.",
      "Represents the clearest picture of what I am building now.",
    ],
    links: [{ label: "Open site", url: "https://coinvote.cc" }],
    media() {
      return `
        <div class="project-abstract project-abstract--coinvote">
          <div class="coinvote-mark" aria-hidden="true"></div>
          <strong>Coinvote.cc</strong>
          <p>PHP 8.3, MySQL, Nginx, live product operations.</p>
        </div>
      `;
    },
  },
  bubblebot: {
    featured: true,
    category: "automation",
    sortYear: 2019,
    railNote: "desktop client, protocol, automation",
    period: "2019 →",
    kind: "Automation product",
    title: "Bubble Bot",
    summary:
      "A technically dense automation system around Dofus Touch, built across a desktop client, custom protocol layer, server, API, website and account generation tooling.",
    meta: ["C#", "Automation", "Protocol", "ASP.NET", "CefSharp", "Proxies"],
    points: [
      "Multi-part architecture: desktop application, custom server/protocol, web panel, API and account tooling.",
      "Included reverse-engineering-adjacent work, middleman automation flows and operational tooling around game actions.",
      "Account generation stack used Chromium offscreen automation, proxies, anti-captcha integration and email handling.",
    ],
    links: [],
    media() {
      return `<img class="project-media__image" src="assets/images/projects/bubblebot.png" alt="Bubble Bot interface" width="1171" height="768" />`;
    },
  },
  hytale: {
    featured: true,
    category: "web",
    sortYear: 2019,
    railNote: "rankings, premium slots, vote flows",
    period: "2019 →",
    kind: "Web platform",
    title: "Hytale-Serveur.com",
    summary:
      "A public Hytale server platform built as a full PHP product: listings, server pages, votes, favorites, premium slots, submission flows and admin tooling.",
    meta: ["PHP product", "Listings", "Votes + favorites", "Premium queue"],
    points: [
      "Covered the full visibility loop: ranking pages, individual server pages, banner uploads, favorites, comments and account flows.",
      "Included monetization logic with premium slots, expiration handling and queue management, not just a static directory.",
      "The local archive below is rebuilt from the original source backups and assets, not from a browser cache snapshot.",
    ],
    links: [
      { label: "Browse archive", url: "archives/hytale/index.html" },
      { label: "Open live site", url: "https://www.hytale-serveur.com/" },
    ],
    media() {
      return renderArchiveEmbed("archives/hytale/index.html", "Hytale-Serveur local archive");
    },
  },
  vinted: {
    featured: true,
    category: "tooling",
    sortYear: 2023,
    railNote: "extension, saved data, reupload flow",
    period: "recent",
    kind: "Browser tooling",
    title: "Vinted Republish",
    summary:
      "A browser extension that saves listings, refills item forms, reuploads photos and speeds up republishing flows.",
    meta: ["Extension", "Automation", "Browser tooling"],
    points: [
      "Built to remove repetitive listing work and compress republish workflows.",
      "Handled saved data, form refill, image reupload and browser-side automation.",
      "Closer to practical tooling than a public-facing product.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/vinted-republish" }],
    media() {
      return `
        <div class="project-abstract project-abstract--vinted">
          <div class="abstract-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <strong>Republish faster</strong>
          <p>Saved data, form refill, image upload, browser automation.</p>
        </div>
      `;
    },
  },
  vela: {
    featured: true,
    category: "realtime",
    sortYear: 2020,
    railNote: "TCP, realtime race tracking",
    period: "2020",
    kind: "Realtime systems",
    title: "VELA Tracking",
    summary:
      "A real-time regatta tracking system where I handled TCP communication across the client and server layers.",
    meta: ["Realtime", "TCP", "Tracking", "Team project"],
    points: [
      "Built around realtime communication and state updates during a race simulation.",
      "Main technical focus was TCP across client and server layers.",
      "Good example of systems work outside the web stack.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/VELA-Tracking" }],
    media() {
      return `<img class="project-media__image" src="assets/images/projects/vela-tracking.png" alt="VELA Tracking application" width="1366" height="768" />`;
    },
  },
  leclerc: {
    featured: false,
    category: "mobile",
    sortYear: 2019,
    railNote: "xamarin app for SAV flows",
    period: "2019",
    kind: "Mobile application",
    title: "E.Leclerc SAV",
    summary:
      "A Xamarin mobile app built during a BTS internship to support after-sales service information and customer flows.",
    meta: ["Mobile", "Xamarin", "Internship"],
    points: [
      "Built during internship context rather than as a side project.",
      "Focused on customer-facing support flows in a retail environment.",
      "Useful as a mobile application reference point in the project list.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/SAV-Leclerc-Application" }],
    media() {
      return `<img class="project-media__image" src="assets/images/projects/leclerc-sav.png" alt="E.Leclerc SAV application" width="768" height="768" />`;
    },
  },
  sigmacraft: {
    featured: false,
    category: "minecraft",
    sortYear: 2016,
    railNote: "plugins, gameplay, web, ops",
    period: "2014 → 2016",
    kind: "Early work",
    title: "SigmaCraft",
    summary:
      "An early Minecraft server project where I pushed much further into custom gameplay, server-side iteration, plugins, items, armor, mounts and web presence.",
    meta: ["Minecraft", "Plugins", "Gameplay", "Shop", "Web", "Ops"],
    points: [
      "Custom gameplay systems, server balancing and iteration from real players.",
      "Included custom items, armor, mounts, votes, boutique logic and public-facing web pages.",
      "Embedded below as a browseable static archive rebuilt from the local source material.",
    ],
    links: [{ label: "Browse archive", url: "archives/sigmacraft/index.html" }],
    media() {
      return renderArchiveEmbed("archives/sigmacraft/index.html", "SigmaCraft local archive");
    },
  },
  eltacraft: {
    featured: false,
    category: "minecraft",
    sortYear: 2014,
    railNote: "server, vote, shop, web",
    period: "2012 → 2014",
    kind: "Early work",
    title: "EltaCraft",
    summary:
      "One of the first live systems I built around age 12: Minecraft server, website, vote pages, shop connections, community operations and first plugin work.",
    meta: ["Minecraft", "Server", "Vote", "Shop", "CraftMyCMS", "Ops"],
    points: [
      "Started self-taught, by building around a live Minecraft server rather than doing isolated exercises.",
      "Connected web pages, vote flows, Starpass shop logic, server management and community/admin work.",
      "Embedded below as a browseable static archive based on the recovered local material.",
    ],
    links: [{ label: "Browse archive", url: "archives/eltacraft/index.html" }],
    media() {
      return renderArchiveEmbed("archives/eltacraft/index.html", "EltaCraft local archive");
    },
  },
};

function getArchiveEntries() {
  return Object.entries(projects).filter(([, project]) => !project.featured);
}

function getArchiveCategoryOptions() {
  const categories = [...new Set(getArchiveEntries().map(([, project]) => project.category))];
  return [
    { id: "all", label: "All" },
    ...categories.map((id) => ({ id, label: PROJECT_CATEGORY_LABELS[id] || id })),
  ];
}

function sortArchiveEntries(entries) {
  return [...entries].sort(([, a], [, b]) => b.sortYear - a.sortYear);
}

function getVisibleArchiveEntries() {
  const filtered = getArchiveEntries().filter(([, project]) => {
    if (state.archiveFilter === "all") return true;
    return project.category === state.archiveFilter;
  });

  return sortArchiveEntries(filtered);
}

function renderProjectArchiveRail() {
  if (!archiveList || !archiveFilters || !archiveCount) return;

  const entries = getVisibleArchiveEntries();
  archiveCount.textContent = `${entries.length} project${entries.length > 1 ? "s" : ""}`;

  archiveFilters.innerHTML = getArchiveCategoryOptions()
    .map(
      (filter) => `
        <button
          class="rail-filter${state.archiveFilter === filter.id ? " is-active" : ""}"
          type="button"
          data-archive-filter="${filter.id}"
        >
          ${filter.label}
        </button>
      `,
    )
    .join("");

  archiveList.innerHTML = entries
    .map(
      ([id, project]) => `
        <button class="rail-link rail-link--archive${state.view === id ? " is-active" : ""}" type="button" data-view="${id}">
          <span class="rail-link__icon">${ICONS[PROJECT_ICON[id]] || ""}</span>
          <span class="rail-link__meta">${project.period}</span>
          <span class="rail-link__body">
            <strong>${project.title}</strong>
            <small>${project.railNote}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderOverview() {
  return `
    <article class="space">
      <section class="hero">
        <div class="hero__main">
          <div class="hero__eyebrow hero__eyebrow--hello">
            ${ICONS.wave}<span>software engineer · builder</span>
          </div>
          <h2 class="hero__lead">
            Hi, I'm Léo.
          </h2>
          <p class="hero__sub">
            I started with public Minecraft servers, plugins and shop flows, then kept building
            tooling, backend systems and live products that have to stay online. <span class="hero__flag">🇫🇷</span>
          </p>
          <div class="hero__skills" aria-label="Core technical areas">
            <span>C#/.NET</span>
            <span>C/C++</span>
            <span>Unreal</span>
            <span>PHP/JS</span>
            <span>SQL</span>
            <span>Linux</span>
            <span>Automation</span>
            <span>AI</span>
          </div>
          <div class="hero__actions">
            <a class="action-button action-button--ghost" href="https://github.com/gniax" target="_blank" rel="noreferrer">
              ${ICONS.github}<span>GitHub</span>
            </a>
            <a class="action-button action-button--ghost" href="https://www.linkedin.com/in/léo-mesbah" target="_blank" rel="noreferrer">
              ${ICONS.link}<span>LinkedIn</span>
            </a>
            <a class="action-button action-button--ghost" href="https://t.me/leo_coinvote" target="_blank" rel="noreferrer">
              ${ICONS.telegram}<span>Telegram</span>
            </a>
            <a class="action-button action-button--ghost" href="mailto:hello@leomesbah.me">
              ${ICONS.mail}<span>Email</span>
            </a>
          </div>
        </div>

        <aside class="hero__now">
          <div class="now-card">
            <div class="now-card__head">
              <span class="now-card__label"><span class="status-dot status-dot--pulse" aria-hidden="true"></span><span>current</span></span>
            </div>
            <div class="role-row">
              <span class="role-row__icon">${ICONS.cube}</span>
              <div>
                <strong>KNDS France</strong>
                <p>Software Engineer & AI Lead · C#/.NET, C/C++, Unreal, AI, AR/VR, Linux & network admin.</p>
              </div>
            </div>
            <div class="role-row">
              <span class="role-row__icon">${ICONS.coin}</span>
              <div>
                <strong>Coinvote.cc</strong>
                <p>Founder · Full-stack, backend, realtime, Cloudflare, mobile apps, growth, SEO · 500k+ users.</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <nav class="space-tabs" aria-label="My space tabs">
        ${Object.entries(overviewTabs)
          .map(
            ([id, tab]) => `
              <button class="space-tab${state.overviewTab === id ? " is-active" : ""}" type="button" data-switch-tab="${id}">
                ${ICONS[TAB_ICON[id]] || ""}<span class="space-tab__label">${tab.label}</span>
              </button>
            `,
          )
          .join("")}
      </nav>

      <section class="space-body">
        ${overviewTabs[state.overviewTab].render()}
      </section>
    </article>
  `;
}

function renderProject(project) {
  const iconName = PROJECT_ICON[state.view];
  return `
    <article class="project-page">
      <header class="project-head">
        <div class="project-head__title">
          <span class="project-head__icon">${iconName ? ICONS[iconName] : ""}</span>
          <div>
            <p class="eyebrow">${project.kind}</p>
            <h2>${project.title}</h2>
          </div>
        </div>
        <span class="project-period">${ICONS.clock}${project.period}</span>
      </header>

      <p class="project-summary">${project.summary}</p>

      <div class="project-layout">
        <section class="project-stage">
          ${project.media()}
        </section>

        <aside class="project-aside">
          <section class="project-block">
            <p class="eyebrow">Actions</p>
            <div class="project-actions">
              ${project.links.length
                ? project.links
                    .map(
                      (link) =>
                        `<a class="action-button" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`,
                    )
                    .join("")
                : `<span class="muted-note">No public link</span>`}
            </div>
          </section>

          <section class="project-block">
            <p class="eyebrow">What mattered</p>
            <ul class="bullet-list">
              ${project.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
          </section>

          <section class="project-block">
            <p class="eyebrow">Focus</p>
            <div class="tag-row">
              ${project.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>
        </aside>
      </div>
    </article>
  `;
}

function renderArchiveEmbed(src, title) {
  return `
    <div class="project-embed">
      <div class="project-embed__bar">
        <span>source-backed archive</span>
        <a href="${src}" target="_blank" rel="noreferrer">open full page</a>
      </div>
      <iframe class="project-embed__frame" src="${src}" title="${title}" loading="lazy"></iframe>
    </div>
  `;
}

function render() {
  if (state.view === "overview") {
    mainView.innerHTML = renderOverview();
  } else {
    mainView.innerHTML = renderProject(projects[state.view]);
  }

  document.querySelectorAll(".rail-link[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  renderProjectArchiveRail();
  mainView.scrollTop = 0;
}

document.addEventListener("click", (event) => {
  const archiveFilterTarget = event.target.closest("[data-archive-filter]");
  if (archiveFilterTarget) {
    state.archiveFilter = archiveFilterTarget.dataset.archiveFilter;
    renderProjectArchiveRail();
    return;
  }

  const navTarget = event.target.closest("[data-view]");
  if (navTarget) {
    state.view = navTarget.dataset.view;
    render();
    return;
  }

  const overviewTarget = event.target.closest("[data-switch-tab]");
  if (overviewTarget) {
    state.overviewTab = overviewTarget.dataset.switchTab;
    state.view = "overview";
    render();
    return;
  }

  const projectTarget = event.target.closest("[data-open-project]");
  if (projectTarget) {
    state.view = projectTarget.dataset.openProject;
    render();
  }
});

render();
