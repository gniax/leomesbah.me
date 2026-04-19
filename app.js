const mainView = document.querySelector("#main-view");
const archiveList = document.querySelector("#project-archive-list");
const archiveFilters = document.querySelector("#project-filters");
const archiveCount = document.querySelector("#project-archive-count");
const designModal = document.querySelector("#design-modal");

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
  arrowLeft: svg(`<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>`),
  arrowRight: svg(`<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`),
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
  menu: svg(`<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>`),
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
  "dofus-validator": "terminal",
  scinsta: "phone",
  magcubic: "cube",
  "edu-bushido": "cube",
  "edu-fitmeal": "phone",
  "edu-cardboard": "layers",
  "edu-qt": "terminal",
  "edu-opengl": "terminal",
  "drone-ball": "gaming",
  enumsharp: "terminal",
};

const TAB_ICON = {
  about: "user",
  experience: "briefcase",
  education: "book",
  designs: "sparkle",
  writing: "pen",
};

function injectRailIcons() {
  document.querySelectorAll(".rail-link[data-view]").forEach((link) => {
    if (link.dataset.view === "coinvote") return;
    if (link.querySelector(".rail-link__icon")) return;
    if (link.querySelector(".rail-link__logo-thumb")) return;
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
  { id: "magazine-dark", name: "Magazine dark", dot: "#d4a72a", mode: "dark" },

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
  const currentMode = getThemeMeta(getTheme()).mode;
  const targetMode = currentMode === "dark" ? "light" : "dark";
  const icon = `<span class="theme-mode-toggle__icon" aria-hidden="true">${currentMode === "dark" ? ICONS.moon : ICONS.sun}</span>`;
  const button = document.querySelector("#theme-mode-toggle");
  if (button) {
    button.innerHTML = icon;
    button.setAttribute("aria-label", `Switch to ${targetMode} mode`);
    button.setAttribute("title", `Switch to ${targetMode} mode`);
  }
  const mobileBtn = document.querySelector("#mobile-theme-toggle");
  if (mobileBtn) {
    mobileBtn.innerHTML = icon;
    mobileBtn.setAttribute("aria-label", `Switch to ${targetMode} mode`);
  }
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

function handleGlobalKeydown(event) {
  if (event.key === "Escape" && state.designIndex !== null) {
    event.preventDefault();
    state.designIndex = null;
    renderDesignModal();
  }
}

function mountMobileNav() {
  const projectsToggle = document.querySelector("#mobile-projects-toggle");
  const mobileThemeBtn = document.querySelector("#mobile-theme-toggle");
  const rail = document.querySelector(".rail");
  const overlay = document.querySelector("#rail-overlay");
  const closeBtn = document.querySelector("#rail-close");

  if (projectsToggle) {
    projectsToggle.innerHTML = ICONS.menu;
    projectsToggle.setAttribute("title", "Open projects menu");
  }

  function openRail() {
    rail?.classList.add("is-open");
    overlay?.classList.add("is-open");
    projectsToggle?.setAttribute("aria-expanded", "true");
  }
  function closeRail() {
    rail?.classList.remove("is-open");
    overlay?.classList.remove("is-open");
    projectsToggle?.setAttribute("aria-expanded", "false");
  }

  projectsToggle?.addEventListener("click", () => {
    rail?.classList.contains("is-open") ? closeRail() : openRail();
  });
  overlay?.addEventListener("click", closeRail);
  closeBtn?.addEventListener("click", closeRail);

  rail?.addEventListener("click", (e) => {
    if (e.target.closest(".rail-link[data-view]") && window.innerWidth <= 960) closeRail();
  });

  mobileThemeBtn?.addEventListener("click", () => {
    const currentMode = getThemeMeta(getTheme()).mode;
    applyTheme(getThemeForMode(currentMode === "dark" ? "light" : "dark"));
    syncThemeModeToggle();
  });
}

function boot() {
  injectRailIcons();
  mountThemePicker();
  mountThemeModeToggle();
  mountSystemThemeSync();
  mountMobileNav();
  document.addEventListener("keydown", handleThemeShortcut);
  document.addEventListener("keydown", handleGlobalKeydown);
  syncThemePicker();
  if (!HIDDEN_OVERVIEW_TABS.has("writing")) {
    fetchArticlesIndex();
  }
}

const state = {
  view: "overview",
  overviewTab: "about",
  archiveFilter: "all",
  designFilter: "all",
  designIndex: null,
};

// Keep tabs configurable so hidden sections can be re-enabled later.
const HIDDEN_OVERVIEW_TABS = new Set(["writing"]);

const overviewTabs = {
  about: {
    label: "About",
    render() {
      return `
        <section class="space-pane">
          <div class="pane-copy">
            <p>
              <strong>At 12, I built a website, a paid shop, and a live Java server —
              <button class="inline-project-link" type="button" data-open-project="eltacraft">EltaCraft</button>
              and
              <button class="inline-project-link" type="button" data-open-project="sigmacraft">SigmaCraft</button>
              — not for school, but out of curiosity and a genuine love for building things. Real players, real transactions.
              It was my first experience creating something people actually used, and it made me realize I wanted to keep doing this.</strong>
            </p>
            <p>
              From there, I kept exploring — web, systems, game engines, automation — mostly teaching myself and trying to understand how software works at every level.
            </p>
            <p style="font-size:1.04rem">
              That curiosity stayed with me. <strong>At 21, I launched <button class="inline-project-link" type="button" data-open-project="coinvote">Coinvote.cc</button>, which reached 500k visitors in its first week, and later became the foundation of Coinvote LLC, which I still run today.</strong>
            </p>
            <p>
              Over the years, I've worked across backend systems, automation tools, game engines, design, and real-time software.
              I care about how things look as much as how they work — if it's going online, it should feel right too.
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
                <strong>KNDS France Training</strong>
                <ul class="exp-bullets">
                  <li>AI Lead — software tooling, AI integration, AR/VR projects</li>
                  <li>AR/VR development with Unity and Unreal Engine</li>
                  <li>Web platform and network infrastructure</li>
                  <li>Systems programming in C/C++ — RS-422/232 serial communication</li>
                </ul>
              </div>
            </article>
            <article class="list-row">
              <span>2021 → now</span>
              <div>
                <strong>Coinvote.cc LLC</strong>
                <ul class="exp-bullets">
                  <li>Founder and sole engineer — built and scaled to 500k+ users</li>
                  <li>Full-stack: backend (PHP), mobile app, infrastructure (Cloudflare, Nginx)</li>
                  <li>Design, marketing, community management and client relations</li>
                  <li>Company operations, billing and accounting</li>
                </ul>
              </div>
            </article>
            <article class="list-row">
              <span>2020</span>
              <div>
                <strong>Appen · Independent</strong>
                <p>Search and ads quality evaluation — AI training data for major search and voice platforms.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2020</span>
              <div>
                <strong>Datavio.ai · Independent</strong>
                <p>Search quality evaluation — AI-driven ranking and relevance annotation.</p>
              </div>
            </article>
            <article class="list-row">
              <span>2019</span>
              <div>
                <strong>E.Leclerc · Internship</strong>
                <p>Built a Xamarin/C# mobile application for after-sales customer flows at a large retail chain.</p>
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

          <div class="space-section">
            <p class="eyebrow">Events</p>
            <div class="list-rows">
              ${row("2022", `Game Jam — ESIEE Paris`, `Built a playable game from scratch in a team over 48 hours · <a class="inline-project-link" href="https://github.com/gniax/drone-ball" target="_blank" rel="noreferrer">Source</a>.`)}
            </div>
          </div>
        </section>
      `;
    },
  },
  designs: {
    label: "Designs",
    render() {
      return renderDesigns();
    },
  },
  writing: {
    label: "Articles",
    render() {
      if (articlesIndex === null) {
        fetchArticlesIndex();
        return `<section class="space-pane"><p class="muted-note">Loading…</p></section>`;
      }
      if (articlesIndex.length === 0) {
        return `<section class="space-pane"><p class="muted-note">Nothing published yet.</p></section>`;
      }
      return `
        <section class="space-pane">
          <div class="list-rows">
            ${articlesIndex.map(a => `
              <article class="list-row list-row--link" role="button" tabindex="0" data-open-article="${a.slug}">
                <span>${a.date}</span>
                <div>
                  <strong>${a.title}</strong>
                  <p>${a.summary}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    },
  },
};

function getVisibleOverviewTabsEntries() {
  return Object.entries(overviewTabs).filter(([id]) => !HIDDEN_OVERVIEW_TABS.has(id));
}

const DESIGN_PROJECTS = [
  { id: "coinvote", label: "Coinvote" },
  { id: "gamesneed", label: "GamesNeed" },
  { id: "bushido", label: "Bushido Quest" },
  { id: "rapizz", label: "Rapizz" },
];

const DESIGN_GALLERY = [
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Branding",
    title: "Coinvote Wordmark Banner",
    summary: "Wide branding banner used for platform headers and media kits.",
    src: "assets/designs/Asset 2@4x-8.png",
    alt: "Coinvote wordmark banner",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Motion insight",
    title: "Most Trending MemeCoins on CoinGecko (Video)",
    summary: "Animated ranking visual for Coinvote Insights social posts.",
    src: "assets/designs/Coinvote Top Trending.mp4",
    alt: "Most Trending MemeCoins on CoinGecko animated visual",
    type: "video",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top MemeCoins on CoinMarketCap (Apr 2024, Variant A)",
    summary: "Most trending and top 24h volume leaderboard snapshot.",
    src: "assets/designs/Copie de Top CMC.png",
    alt: "Top MemeCoins on CoinMarketCap April 2024 variant A",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top MemeCoins on CoinMarketCap (Apr 2024, Variant B)",
    summary: "Alternative export of the same CoinMarketCap leaderboard concept.",
    src: "assets/designs/Copie de Copie de Top CMC.png",
    alt: "Top MemeCoins on CoinMarketCap April 2024 variant B",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top MemeCoins by Highest Social Engagement",
    summary: "LunarCrush-based engagement leaderboard with ranked coin visuals.",
    src: "assets/designs/Copie de Nouvelle.png",
    alt: "Top MemeCoins by highest social engagement visual",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top MemeCoins by Highest Social Mentions",
    summary: "Ranked social mentions visual with top 8 meme coin projects.",
    src: "assets/designs/Copie de Panorama.png",
    alt: "Top MemeCoins by highest social mentions visual",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Campaign",
    title: "Solana VM Launch Campaign Visual",
    summary: "Promotional creative for SSVM token and pre-sale launch message.",
    src: "assets/designs/Copie de X is now live.jpg",
    alt: "Solana VM launch campaign visual",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Social cover",
    title: "Twitter Cover - Pioneering Early Crypto Discoveries",
    summary: "Twitter/X header creative showcasing the mobile app and positioning.",
    src: "assets/designs/Couverture Twitter - Juillet (1024 x 500 px).png",
    alt: "Coinvote Twitter cover highlighting early crypto discoveries",
  },
  {
    year: "2023",
    project: "bushido",
    projectLabel: "Bushido Quest",
    kind: "Logo",
    title: "Bushido Quest Logo",
    summary: "Logo exploration with samurai silhouette and rising sun mark.",
    src: "assets/designs/Design sans titre.png",
    alt: "Bushido Quest logo",
  },
  {
    year: "2024",
    project: "gamesneed",
    projectLabel: "GamesNeed",
    kind: "Logo",
    title: "GamesNeed Brand Lockup",
    summary: "Primary GamesNeed logo lockup on dark background.",
    src: "assets/designs/GamesNeed.png",
    alt: "GamesNeed logo lockup",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top Meme Coins by Highest Social Volume",
    summary: "Dropstab social volume leaderboard with top meme coin entries.",
    src: "assets/designs/Greatest Volume.png",
    alt: "Top meme coins by highest social volume visual",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Highest Social Contributors on BNBChain (Dec 2023)",
    summary: "Contributor ranking card with coin highlights and BNBChain branding.",
    src: "assets/designs/Highest Social Contributors.png",
    alt: "Highest social contributors on BNBChain December 2023",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top Ethereum Projects by Highest Social Engagement",
    summary: "Engagement leaderboard visual focused on Ethereum ecosystem coins.",
    src: "assets/designs/image.png",
    alt: "Top Ethereum projects by highest social engagement visual",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Social cover",
    title: "LinkedIn Cover - Find The Next Rising Cryptos Early",
    summary: "LinkedIn header creative with product CTA and app store badges.",
    src: "assets/designs/Linkedin Cover (1584 x 396 px).png",
    alt: "Coinvote LinkedIn cover with app call to action",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Most Bullish MemeCoins on X",
    summary: "LiveCoinWatch sentiment visual ranking bullish meme coins on X.",
    src: "assets/designs/Livecoinwatch.png",
    alt: "Most bullish meme coins on X visual",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Logo",
    title: "Coinvote App Icon",
    summary: "Rounded square app icon with the Coinvote emblem.",
    src: "assets/designs/logo.png",
    alt: "Coinvote app icon",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top MemeCoins Projects by Highest Social Interactions",
    summary: "LunarCrush interaction leaderboard with multi-project rank panel.",
    src: "assets/designs/Nouvelle.png",
    alt: "Top MemeCoins projects by highest social interactions visual",
  },
  {
    year: "2023",
    project: "rapizz",
    projectLabel: "Rapizz",
    kind: "Logo",
    title: "Rapizz Pizzeria Logo",
    summary: "Pizza-themed logo badge concept for Rapizz branding.",
    src: "assets/designs/Pizzeria Logo.png",
    alt: "Rapizz pizzeria logo",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Highest Social Contributors on BNBChain (Circle Layout)",
    summary: "Circular layout variant of the BNBChain social contributors visual.",
    src: "assets/designs/Social Contributors Circle.png",
    alt: "Highest social contributors on BNBChain circle layout",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top BNBChain Projects by Highest Sentiment on Telegram",
    summary: "LiveCoinWatch sentiment chart focused on Telegram momentum.",
    src: "assets/designs/TOP 10 - Example 2.png",
    alt: "Top BNBChain projects by highest sentiment on Telegram",
  },
  {
    year: "2023",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    title: "Top Projects on CoinMarketCap (May 2023)",
    summary: "Legacy CoinMarketCap snapshot featuring trending and volume sections.",
    src: "assets/designs/Top CMC.png",
    alt: "Top projects on CoinMarketCap May 2023",
  },
  {
    year: "2024",
    project: "coinvote",
    projectLabel: "Coinvote",
    kind: "Insight card",
    title: "Most Active Communities",
    summary: "Community activity highlight card used in Coinvote Insights content.",
    src: "assets/designs/Trending Coins.png",
    alt: "Most active communities visual card",
  },
];

const ARCHIVE_FILTERS = [
  { id: "all", label: "All" },
  { id: "games", label: "Games" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "software", label: "Software" },
  { id: "tools", label: "Tools" },
];
const HERO_SKILL_LIMIT = 6;
const HERO_SKILL_SECONDARY_LIMIT = 10;
const HERO_SKILL_MIN_PCT = 48;
const HERO_SKILL_MAX_PCT = 88;
const HERO_SKILL_BUCKETS = [
  { name: "C# / .NET", keywords: ["c#", ".net", "asp.net", "xamarin", "wpf"] },
  { name: "PHP", keywords: ["php"] },
  { name: "C++", keywords: ["c++"] },
  { name: "Backend & Web Development", keywords: ["php", "asp.net", "node.js", "rest api", "api", "full-stack", "backend"] },
  { name: "MySQL / SQL", keywords: ["mysql", "sql", "database"] },
  { name: "Infrastructure & DevOps", keywords: ["linux", "nginx", "cloudflare", "vps", "deployment", "devops", "sysadmin", "server admin"] },
  { name: "JavaScript", keywords: ["javascript"] },
  { name: "Mobile Development", keywords: ["mobile", "android", "ios", "react native", "expo", "xamarin"] },
  { name: "API Design & Integrations", keywords: ["rest api", " api ", "endpoint", "integration", "backend"] },
  { name: "Reverse Engineering", keywords: ["reverse engineering", "protocol", "intercept", "replay"] },
  { name: "Desktop Applications", keywords: ["wpf", "qt", "cefsharp", "desktop client"] },
  { name: "Game Development (Unity/Unreal)", keywords: ["unity", "unreal engine", "ue4", "opengl", "vr", "gameplay"] },
  { name: "SaaS & Product Engineering", keywords: ["saas", "billing", "monetisation", "monetization", "license-based", "profitable"] },
  { name: "Python Scripting & Automation", keywords: ["python", "script", "automation", "scrap", "crawler"] },
  { name: "Data Scraping", keywords: ["scrap", "crawler", "data extraction"] },
  { name: "AI / ML", keywords: ["ai", "ml", "machine learning"] },
];
const HERO_PRIMARY_SKILL_ORDER = [
  "C# / .NET",
  "PHP",
  "C++",
  "Backend & Web Development",
  "MySQL / SQL",
  "Infrastructure & DevOps",
];
const HERO_SECONDARY_SKILL_ORDER = [
  "Python Scripting & Automation",
  "API Design & Integrations",
  "Reverse Engineering",
  "Desktop Applications",
  "Game Development (Unity/Unreal)",
  "SaaS & Product Engineering",
  "Data Scraping",
  "JavaScript",
  "Mobile Development",
  "AI / ML",
];
const projects = {
  coinvote: {
    featured: true,
    logo: "assets/images/logos/coinvote_logo.png",
    category: "product",
    filters: ["web", "mobile"],
    sortYear: new Date().getFullYear(),
    railNote: "live product, backend, ops",
    period: "current",
    kind: "Live product · LLC",
    title: "Coinvote.cc",
    summary:
      "Crypto voting and discovery platform — founded as an LLC in 2021, 2.9M+ visitors and 500k+ registered users, profitable, built and operated entirely solo.",
    tech: ["PHP", "MySQL", "JavaScript", "Linux", "Nginx", "Mobile"],
    meta: ["Linux sysadmin", "iOS & Android", "REST API", "Automation", "Ad system", "VPS"],
    points: [
      "Full-stack solo build: PHP 8.3 backend, Nginx, Cloudflare, VPS administration — no team, no agency.",
      "Crypto data ingestion, anti-bot voting protection, automated coin listing pipeline.",
      "Monetisation system built in-house: ad placements, sponsored listings, billing and client management.",
    ],
    links: [{ label: "Open site", url: "https://coinvote.cc" }],
    media() {
      const mediaKit = Array.from({ length: 14 }, (_, i) => `assets/files/coinvote/media_kit/${i + 1}.png`);
      const salesDeck = [...Array.from({ length: 14 }, (_, i) => `assets/files/coinvote/sales_deck/${i + 1}.png`), "assets/files/coinvote/sales_deck/16.png"];
      return renderTabs("coinvote-media", [
        { label: "Video", content: `<video class="project-media__video" src="assets/files/coinvote/v2.mp4" controls playsinline preload="metadata"></video>` },
        { label: "Analytics", content: `<img src="assets/files/coinvote/analytics-1.png" alt="Google Analytics — Coinvote.cc user acquisition, Mar 2021 – Apr 2026" style="width:100%;border-radius:6px;">` },
        { label: "Media Kit", content: renderSlider("coinvote-mediakit", mediaKit) },
        { label: "Sales Deck", content: renderSlider("coinvote-salesdeck", salesDeck) },
      ]);
    },
  },
  bubblebot: {
    featured: true,
    logo: "assets/images/logos/bubblebot.png",
    category: "systems",
    filters: ["web", "software"],
    sortYear: 2020,
    railNote: "desktop client, protocol, automation",
    period: "2020 →",
    kind: "SaaS · Automation",
    title: "Bubble Bot",
    summary:
      "A SaaS built around reverse engineering Dofus Touch — sold as a license-based automation bot, with a desktop client, custom protocol layer, server, API, website and account generation tooling.",
    tech: ["C#", ".NET", "ASP.NET", "JavaScript", "Automation"],
    meta: ["SaaS", "Reverse engineering", "C#", "Protocol", "CefSharp", "Proxies"],
    points: [
      "Core work was reverse engineering the game's protocol to intercept and replay actions reliably.",
      "Distributed as a licensed SaaS — users paid for access to the bot and its automation flows.",
      "Account generation stack used Chromium offscreen automation, proxies, anti-captcha integration and email handling.",
    ],
    links: [
      { label: "Browse site", url: "archives/bubblebot/index.html" },
    ],
    media() {
      const real = (name) => `archives/bubblebot/assets/images/bubblebot-real/${name}`;
      const merged = (n) => `archives/bubblebot/assets/images/bubblebot-merged/${String(n).padStart(2, "0")}.png`;
      return renderTabs("bubblebot-media", [
        {
          label: "Desktop client",
          content: renderSlider("bubblebot-desktop", [
            merged(1), merged(2), merged(3), merged(4), merged(5),
            merged(6), merged(7), merged(8), merged(9), merged(10),
            merged(11), merged(12), merged(13), merged(14), merged(15),
            real("02-main.png"),
            real("04-accounts.png"),
            real("05-quickactions.png"),
            real("06-planner.png"),
            real("03-options.png"),
            real("01-login.png"),
          ]),
        },
        {
          label: "Browse site",
          content: renderArchiveEmbed("archives/bubblebot/index.html", "Bubble Bot"),
        },
      ]);
    },
  },
  hytale: {
    featured: false,
    logo: "assets/images/logos/hytale.png",
    category: "web",
    filters: ["web"],
    sortYear: 2019,
    railNote: "rankings, premium slots, vote flows",
    period: "2019",
    kind: "Web platform",
    title: "Hytale-Serveur.com",
    summary:
      "A public Hytale server listing platform built in PHP: rankings, server pages, votes, favorites, premium slots, submission flows and full admin tooling.",
    tech: ["PHP", "MySQL", "JavaScript"],
    meta: ["PHP product", "Listings", "Votes + favorites", "Premium queue"],
    points: [
      "Full visibility loop: ranking pages, individual server pages, banner uploads, favorites, comments and account flows.",
      "Monetization logic with premium slots, expiration handling and queue management.",
      "Browse the mirrored site below, rebuilt locally from the Dockerized PHP source and SQL dump.",
    ],
    links: [
      { label: "Browse site", url: "archives/hytale/index.html" },
    ],
    media() {
      return renderArchiveEmbed("archives/hytale/index.html", "Hytale-Serveur");
    },
  },
  vinted: {
    featured: false,
    logo: "assets/images/logos/vinted.svg",
    category: "systems",
    filters: ["tools"],
    sortYear: 2026,
    sortMonth: 2,
    railNote: "extension, autofill, republishing",
    period: "recent",
    kind: "Browser tooling",
    title: "vinted-republish-extension",
    summary:
      "Browser extension that saves Vinted listings, auto-fills new item forms, reuploads photos, and speeds up republishing.",
    tech: ["JavaScript", "Automation"],
    meta: ["Extension", "Automation", "Browser tooling"],
    points: [
      "Built to remove repetitive listing work and compress republish workflows.",
      "Handled saved data, form refill, image reupload and browser-side automation.",
      "Closer to practical tooling than a public-facing product.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/vinted-republish-extension" }],
    media() {
      return `<img class="project-media__image" src="assets/images/projects/vinted-1.png" alt="Vinted republish extension" />`;
    },
  },
  vela: {
    featured: false,
    logo: "assets/images/logos/vela.png",
    category: "systems",
    filters: ["web"],
    sortYear: 2020,
    sortMonth: 5,
    railNote: "C++, Qt, PHP, JS, RPI & XBEE",
    period: "2020",
    kind: "Realtime systems",
    title: "VELA-Tracking",
    summary:
      "Regatta tracking system built with C++, Qt, PHP and JavaScript, driven by GPS coordinates and XBee links, with a Raspberry Pi demo UI and course data handling.",
    tech: ["C++", "Qt", "PHP", "JavaScript"],
    meta: ["Realtime", "Tracking", "C++", "Qt"],
    points: [
      "Qt desktop view for the race table and boat positions.",
      "Web pages for the race follow-up, ranking and project context.",
      "Raspberry Pi demo UI shown on a small tablet-style screen, with the Wi-Fi flow kept for presentation.",
    ],
    links: [
      { label: "Browse site", url: "archives/vela-tracking/index.html" },
      { label: "View source", url: "https://github.com/gniax/VELA-Tracking" },
    ],
    media() {
      return renderTabs("vela-media", [
        {
          label: "RPI IHM Demo",
          content: `<div class="project-media project-media--bleed"><video class="project-media__video" src="assets/files/vela-tracking/vela-window.webm" controls playsinline preload="metadata"></video></div>`,
        },
        {
          label: "Browse site",
          content: renderArchiveEmbed("archives/vela-tracking/index.html", "VELA Tracking"),
        },
      ]);
    },
  },
  leclerc: {
    featured: false,
    logo: "assets/images/logos/leclerc.svg",
    category: "mobile",
    filters: ["mobile"],
    sortYear: 2019,
    railNote: "Xamarin Forms, iOS & Android",
    period: "2019",
    kind: "Mobile application",
    title: "leclerc-service-app",
    summary:
      "SAV Leclerc application for iOS & Android made with Xamarin Forms in C#.",
    tech: ["C#", "Xamarin", "Mobile"],
    meta: ["Mobile", "Xamarin", "Internship"],
    points: [
      "Cross-platform mobile application.",
      "Built with Xamarin Forms in C# for iOS and Android.",
      "Retail service flows and customer support context.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/leclerc-service-app" }],
    media() {
      const screens = [
        "assets/images/projects/leclerc/screen-home.png",
        "assets/images/projects/leclerc/screen-pieces.png",
        "assets/images/projects/leclerc/screen-depannage.png",
        "assets/images/projects/leclerc/screen-reparation.png",
        "assets/images/projects/leclerc/screen-antenne.png",
        "assets/images/projects/leclerc/screen-livraison.png",
        "assets/images/projects/leclerc/screen-fioul.png",
      ];
      return renderSlider("leclerc-screens", screens);
    },
  },
  sigmacraft: {
    featured: true,
    logo: "assets/images/logos/sigmacraft.svg",
    category: "legacy",
    filters: ["web", "games"],
    sortYear: 2016,
    railNote: "plugins, gameplay, web, ops",
    period: "2014 → 2016",
    kind: "Early work · age 14",
    title: "SigmaCraft",
    summary:
      "Built at 14 in 2014 — this is where I actually learned to code. A Minecraft server that grew into a real project: custom Java plugins, a live PHP website, shop logic, and a player base I had to keep happy.",
    tech: ["Java", "PHP", "MySQL", "JavaScript"],
    meta: ["Server", "Plugins", "Gameplay", "Shop", "Web", "Ops"],
    points: [
      "My first real codebase — learned Java, PHP and MySQL entirely through this project, with no formal guidance.",
      "Wrote custom plugins from scratch: armor sets, unique items, mountable entities, vote rewards and boutique logic.",
      "Ran the server ops end-to-end: hosting, config, community management and web presence.",
    ],
    links: [{ label: "Browse site", url: "archives/sigmacraft/index.html" }],
    media() {
      const armor = renderPluginCard(
        "SigmaArmor",
        "Custom armor sets with vanilla resource pack overrides — equip listeners, damage handling and per-set stats.",
        ["SigmaArmorPlugin.java", "ArmorFactory.java", "ArmorSet.java", "ArmorEquipListener.java", "ArmorDamageListener.java"],
        `public void onEnable() {\n  saveDefaultConfig();\n  this.armorFactory = new ArmorFactory(this);\n  getCommand("sigmaarmor")\n    .setExecutor(new SigmaArmorCommand(this));\n  registerEvents(\n    new ArmorEquipListener(this),\n    new ArmorDamageListener(this)\n  );\n}`
      );
      const item = renderPluginCard(
        "SigmaItem",
        "Custom item system — unique IDs, special effects on use, emerald drop overrides and admin give commands.",
        ["SigmaItemPlugin.java", "ItemFactory.java", "ItemId.java", "EpeeEvent.java", "EmeraldDropListener.java"],
        `public void onEnable() {\n  this.itemFactory = new ItemFactory(this);\n  getCommand("sigmaitem")\n    .setExecutor(new SigmaItemCommand(this));\n  registerEvents(\n    new EpeeEvent(this),\n    new EmeraldDropListener(this)\n  );\n}`
      );
      const monture = renderPluginCard(
        "SigmaMonture",
        "Mount system — players summon rideable entities (spider, pig, horse) via command, with lifecycle and despawn handling.",
        ["Main.java", "MountService.java", "SigmaMonter.java", "MountLifecycleListener.java"],
        `public void onEnable() {\n  this.mountService = new MountService(this);\n  SigmaMonter cmd = new SigmaMonter(\n    this, mountService);\n  getCommand("monter")\n    .setExecutor(cmd);\n  registerEvents(\n    new MountLifecycleListener(\n      this, mountService));\n}`
      );
      return renderTabs("sigmacraft-media", [
        { label: "Browse site", content: renderArchiveEmbed("archives/sigmacraft/index.html", "SigmaCraft") },
        { label: "SigmaArmor", content: armor },
        { label: "SigmaItem", content: item },
        { label: "SigmaMonture", content: monture },
      ]);
    },
  },
  eltacraft: {
    featured: false,
    logo: "assets/images/logos/eltacraft.svg",
    category: "legacy",
    filters: ["web"],
    sortYear: 2014,
    railNote: "server, vote, shop, web",
    period: "2012 → 2014",
    kind: "Early work",
    title: "EltaCraft",
    summary:
      "One of the first live systems I built around age 12: Minecraft server, website, vote pages, shop connections, community operations and first plugin work.",
    tech: ["Java", "PHP", "MySQL"],
    meta: ["Server", "Vote", "Shop", "CraftMyCMS", "Ops"],
    points: [
      "Started self-taught, by building around a live Minecraft server rather than doing isolated exercises.",
      "Connected web pages, vote flows, Starpass shop logic, server management and community/admin work.",
      "Browse the original site below — rebuilt from local source material.",
    ],
    links: [{ label: "Browse site", url: "archives/eltacraft/index.html" }],
    media() {
      return renderArchiveEmbed("archives/eltacraft/index.html", "EltaCraft");
    },
  },
  "dofus-validator": {
    featured: false,
    logo: "assets/images/logos/dofus.png",
    category: "systems",
    filters: ["tools"],
    sortYear: 2022,
    sortMonth: 12,
    railNote: "Node.js automation",
    period: "2022",
    kind: "Tooling",
    title: "dofus-giftcode-automation",
    summary: "Node.js tool for automating Dofus gift code redemption across multiple accounts.",
    tech: ["JavaScript", "Node.js"],
    meta: ["Node.js", "Tooling", "API"],
    points: [
      "Automates Dofus gift code redemption across multiple accounts.",
      "Built as a Node.js tool rather than a one-off script.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/dofus-giftcode-automation" }],
    media() {
      return `<img class="project-media__image" src="assets/images/projects/dofus-cli.svg" alt="Dofus GiftCode Automation CLI" />`;
    },
  },
  scinsta: {
    featured: false,
    logo: "assets/images/logos/instagram.svg",
    category: "systems",
    filters: ["mobile", "tools"],
    sortYear: 2026,
    sortMonth: 1,
    railNote: "Instagram tweak, no Reels",
    period: "2026",
    kind: "iOS tweak",
    title: "SCInsta-NoReels",
    summary: "Custom SCInsta fork focused on removing Reels and simplifying Instagram navigation.",
    tech: ["Objective-C", "iOS"],
    meta: ["iOS", "Tweak", "Instagram"],
    points: [
      "Removes Reels entirely from Instagram.",
      "Keeps the UI leaner and navigation simpler.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/SCInsta-NoReels" }],
    media() { return ""; },
  },
  magcubic: {
    featured: false,
    logo: "assets/images/logos/ubuntu-terminal.svg",
    category: "systems",
    filters: ["software", "tools"],
    sortYear: 2025,
    sortMonth: 12,
    railNote: "Magisk, HDMI state, IR override",
    period: "2025",
    kind: "Hardware / firmware",
    title: "magcubic-hy300-root",
    summary: "Rooting and firmware customization for the Magcubic HY300 Pro with Magisk, HDMI state detection, and IR override.",
    tech: ["Android", "Magisk"],
    meta: ["Android", "Root", "Firmware", "Hardware"],
    points: [
      "Firmware rooting and customization work for the HY300 Pro.",
      "Includes Magisk support, HDMI state detection and IR override.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/magcubic-hy300-root" }],
    media() { return ""; },
  },
  enumsharp: {
    featured: false,
    category: "systems",
    filters: ["software", "tools"],
    sortYear: 2020,
    sortMonth: 1,
    railNote: "C# WPF, enum merge",
    period: "2020",
    kind: "Tooling",
    title: "enum-merge",
    summary: "C# WPF utility for merging and synchronizing enum definitions across source files.",
    tech: ["C#", ".NET", "WPF"],
    meta: ["C#", "WPF", "Tooling"],
    points: [
      "Merges and synchronizes enum definitions across files.",
      "Built in C# with a WPF interface.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/enum-merge" }],
    media() { return ""; },
  },
  "drone-ball": {
    featured: false,
    logo: "assets/images/logos/drone-ball.png",
    category: "games",
    filters: ["games"],
    sortYear: 2022,
    railNote: "Unity, game jam, drones",
    period: "2022",
    kind: "Game Jam",
    title: "drone-ball",
    summary: "Split-screen Rocket League-like with drones and low-gravity movement, built in Unity during a game jam.",
    tech: ["C#", "Unity"],
    meta: ["Unity", "C#", "Game Jam", "Team"],
    points: [
      "Split-screen, low-gravity drone gameplay.",
      "Built in Unity during a game jam.",
    ],
    links: [{ label: "Source", url: "https://github.com/gniax/drone-ball" }],
    media() {
      return `<video class="project-media__video" src="assets/files/drone-ball/video.mp4" controls playsinline preload="metadata"></video>`;
    },
  },
  "edu-bushido": {
    featured: false,
    logo: "assets/images/logos/bushidoQuest.png",
    category: "games",
    filters: ["games"],
    sortYear: 2024,
    sortMonth: 11,
    railNote: "UE4, VR escape game",
    period: "2024",
    kind: "Education",
    title: "bushido-quest",
    summary: "VR escape game built with Unreal Engine 4, featuring interaction-based progression and reward-driven level design.",
    tech: ["Unreal Engine", "C++"],
    meta: ["UE4", "C++", "ESIEE"],
    points: [
      "VR escape game built with Unreal Engine 4.",
      "Interaction-driven progression and reward-driven level design.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/bushido-quest" }],
    media() {
      const vid = (src) => `<video class="project-media__video" src="${src}" controls playsinline preload="metadata"></video>`;
      return renderTabs("bushido-media", [
        { label: "Overview", content: `<img class="project-media__image" src="assets/images/projects/bushido.png" alt="Bushido Quest" />` },
        { label: "Gameplay 1", content: vid("assets/files/bushido/step_1.mp4") },
        { label: "Gameplay 2", content: vid("assets/files/bushido/step_2.mp4") },
        { label: "Gameplay 3", content: vid("assets/files/bushido/step_3.mp4") },
      ]);
    },
  },
  "edu-fitmeal": {
    featured: false,
    logo: "assets/images/logos/fitmeal.png",
    category: "mobile",
    filters: ["mobile"],
    sortYear: 2023,
    sortMonth: 6,
    railNote: "React Native, meal tracking",
    period: "2023",
    kind: "Education",
    title: "fitmeal-mobile",
    summary: "Mobile app built with React Native and Expo for calorie tracking and meal planning.",
    tech: ["JavaScript", "React Native", "Expo", "Mobile"],
    meta: ["React Native", "Expo", "Mobile", "ESIEE"],
    points: [
      "React Native and Expo mobile app.",
      "Calorie tracking and meal planning flows.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/fitmeal-mobile" }],
    media() {
      return `<video class="project-media__video" src="assets/files/fitmeal.mp4" controls playsinline preload="metadata"></video>`;
    },
  },
  "edu-cardboard": {
    featured: false,
    archived: true,
    category: "games",
    filters: ["games"],
    sortYear: 2024,
    railNote: "VR/AR, Unity, Google Cardboard, FIB",
    period: "2024",
    kind: "Education",
    title: "EDU_VAR_GoogleCardboard",
    summary: "EDU - MIRI Course | VAR - 5th Year, FIB UPC - Unity & Google Cardboard",
    tech: ["C#", "Unity", "VR"],
    meta: ["VR", "Unity", "Google Cardboard", "FIB"],
    points: [
      "MIRI / VAR course project at FIB UPC Barcelona.",
      "Unity and Google Cardboard VR work.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/EDU_VAR_GoogleCardboard" }],
    media() { return ""; },
  },
  "edu-qt": {
    featured: false,
    archived: true,
    category: "systems",
    filters: ["software"],
    sortYear: 2019,
    railNote: "Qt calculator, BTS SNIR",
    period: "2019",
    kind: "Education",
    title: "EDU_QtCalculator",
    summary: "EDU - Basic Calculator in Qt (C++) - 2nd Year, BTS SNIR, Lycée Léonce Vieljeux",
    tech: ["C++", "Qt"],
    meta: ["C++", "Qt", "BTS"],
    points: [
      "Basic calculator in Qt (C++).",
      "BTS SNIR, Lycée Léonce Vieljeux.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/EDU_QtCalculator" }],
    media() { return ""; },
  },
  "edu-opengl": {
    featured: false,
    archived: true,
    category: "systems",
    filters: ["software"],
    sortYear: 2023,
    railNote: "OpenGL, ESIEE Paris",
    period: "2023",
    kind: "Education",
    title: "EDU_ComputerGraphics",
    summary: "EDU - OpenGL Course, 4th Year Engineering, ESIEE Paris",
    tech: ["C", "OpenGL"],
    meta: ["OpenGL", "C", "ESIEE"],
    points: [
      "OpenGL course project.",
      "4th year Engineering, ESIEE Paris.",
    ],
    links: [{ label: "View source", url: "https://github.com/gniax/EDU_ComputerGraphics" }],
    media() { return ""; },
  },
};

function getProjectFilterIds(project) {
  if (Array.isArray(project.filters) && project.filters.length) return project.filters;
  if (project.category) return [project.category];
  return [];
}

function getArchiveEntries(includeFeatured = false) {
  return Object.entries(projects).filter(([, project]) => includeFeatured || !project.featured);
}

function getArchiveCategoryOptions() {
  const entries = getArchiveEntries(true);
  const counts = new Map();
  for (const [, project] of entries) {
    for (const filterId of getProjectFilterIds(project)) {
      counts.set(filterId, (counts.get(filterId) || 0) + 1);
    }
  }

  return ARCHIVE_FILTERS
    .map((filter) => ({
      ...filter,
      count: filter.id === "all" ? entries.length : counts.get(filter.id) || 0,
    }))
    .filter((filter) => filter.id === "all" || filter.count > 0);
}

function normalizeArchiveFilter() {
  if (ARCHIVE_FILTERS.some((filter) => filter.id === state.archiveFilter)) return;
  state.archiveFilter = "all";
}

function hasMedia(project) {
  try { return Boolean(project.media()); } catch { return false; }
}

function sortArchiveEntries(entries) {
  return [...entries].sort(([, a], [, b]) => {
    const archivedRank = Number(Boolean(a.archived)) - Number(Boolean(b.archived));
    if (archivedRank !== 0) return archivedRank;
    const mediaRank = Number(hasMedia(a)) - Number(hasMedia(b));
    if (mediaRank !== 0) return -mediaRank;
    const aKey =
      (a.sortYear ?? 0) * 10000 +
      (a.sortMonth ?? 1) * 100 +
      (a.sortDay ?? 1);
    const bKey =
      (b.sortYear ?? 0) * 10000 +
      (b.sortMonth ?? 1) * 100 +
      (b.sortDay ?? 1);
    if (bKey !== aKey) return bKey - aKey;
    return a.title.localeCompare(b.title);
  });
}

function getVisibleArchiveEntries() {
  normalizeArchiveFilter();
  const filtered = getArchiveEntries(state.archiveFilter !== "all").filter(([, project]) => {
    if (state.archiveFilter === "all") return true;
    return getProjectFilterIds(project).includes(state.archiveFilter);
  });

  return sortArchiveEntries(filtered);
}

function renderProjectArchiveRail() {
  if (!archiveList || !archiveFilters || !archiveCount) return;

  normalizeArchiveFilter();
  const entries = getVisibleArchiveEntries();
  if (state.archiveFilter === "all") {
    const totalCount = getArchiveEntries(true).length;
    archiveCount.textContent = `${totalCount} project${totalCount > 1 ? "s" : ""}`;
  } else {
    archiveCount.textContent = `${entries.length} project${entries.length > 1 ? "s" : ""}`;
  }

  archiveFilters.innerHTML = getArchiveCategoryOptions()
    .map(
      (filter) => `
        <button
          class="rail-filter${state.archiveFilter === filter.id ? " is-active" : ""}"
          type="button"
          data-archive-filter="${filter.id}"
          aria-pressed="${state.archiveFilter === filter.id ? "true" : "false"}"
          aria-label="${filter.label}: ${filter.count} project${filter.count > 1 ? "s" : ""}"
          title="${filter.label}"
        >
          <span>${filter.label}</span>
          <small>${filter.count}</small>
        </button>
      `,
    )
    .join("");

  archiveList.innerHTML = entries
    .map(
      ([id, project]) => `
        <button class="rail-link rail-link--archive${state.view === id ? " is-active" : ""}" type="button" data-view="${id}" title="${project.title}${!hasMedia(project) ? " · GitHub only" : ""}">
          ${id === "coinvote"
            ? `<span class="rail-link__icon rail-link__icon--hidden" aria-hidden="true"></span>`
            : project.logo
            ? `<img class="rail-link__logo-thumb" src="${project.logo}" alt="">`
            : `<span class="rail-link__icon">${ICONS[PROJECT_ICON[id]] || ""}</span>`}
          <span class="rail-link__meta">${project.period}</span>
          <span class="rail-link__body">
            <strong>${project.title}${project.archived ? ` <span class="project-badge project-badge--archive">Archive</span>` : ""}${!hasMedia(project) ? ` <span class="rail-link__code-only" title="GitHub only">${ICONS.github}</span>` : ""}</strong>
            <small>${project.railNote}</small>
          </span>
        </button>
      `,
    )
    .join("");
}

function renderDesignMedia(item, className = "", interactive = false) {
  const classAttr = className ? ` class="${className}"` : "";
  if (item.type === "video") {
    const poster = item.poster ? ` poster="${item.poster}"` : "";
    const playback = interactive ? "controls playsinline" : "muted loop playsinline preload=\"metadata\"";
    return `<video${classAttr} ${playback}${poster} src="${item.src}"></video>`;
  }
  return `<img${classAttr} src="${item.src}" alt="${item.alt}" loading="lazy" />`;
}

function getDesignFilterOptions() {
  const counts = new Map();
  for (const item of DESIGN_GALLERY) {
    counts.set(item.project, (counts.get(item.project) || 0) + 1);
  }

  return [
    { id: "all", label: "All", count: DESIGN_GALLERY.length },
    ...DESIGN_PROJECTS
      .map((project) => ({ ...project, count: counts.get(project.id) || 0 }))
      .filter((project) => project.count > 0),
  ];
}

function normalizeDesignFilter() {
  const options = getDesignFilterOptions();
  if (options.some((filter) => filter.id === state.designFilter)) return;
  state.designFilter = "all";
}

function getVisibleDesignEntries() {
  normalizeDesignFilter();
  return DESIGN_GALLERY
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => state.designFilter === "all" || item.project === state.designFilter);
}

function renderDesigns() {
  const filterOptions = getDesignFilterOptions();
  const visibleEntries = getVisibleDesignEntries();
  const designCount = `${visibleEntries.length} design${visibleEntries.length > 1 ? "s" : ""}`;

  return `
    <section class="space-pane designs-page">
      <div class="designs-head">
        <p class="eyebrow">Visual archive</p>
        <h2>Designs</h2>
        <p class="muted-note">Personal visuals organized by project. Use filters to focus on a specific brand or product.</p>
      </div>
      <div class="design-controls">
        <div class="design-filters" role="tablist" aria-label="Filter designs by project">
          ${filterOptions.map((filter) => `
            <button
              class="design-filter${state.designFilter === filter.id ? " is-active" : ""}"
              type="button"
              data-design-filter="${filter.id}"
              aria-pressed="${state.designFilter === filter.id ? "true" : "false"}"
              title="${filter.label}"
            >
              <span>${filter.label}</span>
              <small>${filter.count}</small>
            </button>
          `).join("")}
        </div>
        <p class="muted-note designs-count">${designCount}</p>
      </div>
      <div class="design-grid">
        ${visibleEntries.map(({ item, index }) => `
          <button class="design-card" type="button" data-open-design="${index}" aria-label="Open ${item.title}">
            <span class="design-card__media">
              ${renderDesignMedia(item, "design-card__asset")}
            </span>
            <span class="design-card__copy">
              <span class="design-card__meta">${item.projectLabel} · ${item.year}</span>
              <strong>${item.title}</strong>
              <small>${item.summary}</small>
            </span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDesignModal() {
  if (!designModal) return;
  const item = Number.isInteger(state.designIndex) ? DESIGN_GALLERY[state.designIndex] : null;
  if (!item) {
    designModal.hidden = true;
    designModal.setAttribute("aria-hidden", "true");
    designModal.innerHTML = "";
    return;
  }

  designModal.hidden = false;
  designModal.setAttribute("aria-hidden", "false");
  designModal.innerHTML = `
    <div class="design-modal__backdrop" data-close-design-modal></div>
    <div class="design-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="design-modal-title">
      <button class="design-modal__close" type="button" data-close-design-modal aria-label="Close preview">×</button>
      <div class="design-modal__media">
        ${renderDesignMedia(item, "design-modal__asset", true)}
      </div>
      <div class="design-modal__copy">
        <p class="eyebrow">${item.projectLabel} · ${item.year} · ${item.kind}</p>
        <h2 id="design-modal-title">${item.title}</h2>
        <p>${item.summary}</p>
      </div>
    </div>
  `;
}


function computeSkillStats() {
  const coverage = computeSkillCoverage();
  const maxCoverage = Math.max(...coverage.values(), 1);
  return HERO_PRIMARY_SKILL_ORDER
    .map((name) => ({
      name,
      pct: skillScoreFromCoverage(coverage.get(name) || 0, maxCoverage),
    }))
    .slice(0, HERO_SKILL_LIMIT);
}

function computeSecondarySkills() {
  const coverage = computeSkillCoverage();
  const maxCoverage = Math.max(...coverage.values(), 1);
  return HERO_SECONDARY_SKILL_ORDER
    .map((name) => ({
      name,
      pct: skillScoreFromCoverage(coverage.get(name) || 0, maxCoverage),
    }))
    .filter((skill) => (coverage.get(skill.name) || 0) > 0)
    .slice(0, HERO_SKILL_SECONDARY_LIMIT);
}

function skillScoreFromCoverage(count, maxCoverage) {
  const ratio = maxCoverage > 0 ? count / maxCoverage : 0;
  return Math.round(HERO_SKILL_MIN_PCT + ratio * (HERO_SKILL_MAX_PCT - HERO_SKILL_MIN_PCT));
}

function computeSkillCoverage() {
  const all = Object.values(projects);
  const coverage = new Map(HERO_SKILL_BUCKETS.map((bucket) => [bucket.name, 0]));

  for (const project of all) {
    const source = [
      ...(project.tech || []),
      ...(project.meta || []),
      ...(project.points || []),
    ]
      .join(" ")
      .toLowerCase();

    for (const bucket of HERO_SKILL_BUCKETS) {
      if (bucket.keywords.some((keyword) => source.includes(keyword))) {
        coverage.set(bucket.name, (coverage.get(bucket.name) || 0) + 1);
      }
    }
  }

  return coverage;
}

function renderOverview() {
  const visibleTabs = getVisibleOverviewTabsEntries();
  const fallbackTabId = visibleTabs[0]?.[0] || "about";
  const activeTabId = visibleTabs.some(([id]) => id === state.overviewTab) ? state.overviewTab : fallbackTabId;
  const activeTab = overviewTabs[activeTabId] || overviewTabs.about;
  if (state.overviewTab !== activeTabId) {
    state.overviewTab = activeTabId;
  }

  return `
    <article class="space">
      <section class="hero">
        <div class="hero__main">
          <div class="hero__eyebrow hero__eyebrow--hello">
            ${ICONS.wave}<span>software engineer · builder</span>
          </div>
          <h2 class="hero__lead">
            👋 Hi, I'm Léo.
          </h2>
          <p class="hero__sub">
            Engineer focused on C++/C/.NET, building web/mobile products and AI/ML/LLM automation workflows with strong backend and ops work. <span class="hero__flag">🇫🇷</span>
          </p>
          ${(() => {
            const primary = computeSkillStats();
            const secondary = computeSecondarySkills();
            return `
              <div class="hero__skills" aria-label="Core skills and additional strengths">
                ${primary.map(s => `<span>${s.name}<em>${s.pct}%</em></span>`).join("")}
                ${secondary.length ? `
                  <button class="hero__skills-more" type="button" data-toggle-skills>+${secondary.length} more</button>
                  ${secondary.map(s => `<span class="hero__skill-extra">${s.name}<em>${s.pct}%</em></span>`).join("")}
                ` : ""}
              </div>
              <p class="hero__skills-note">* Auto-calculated as a relative score from stack usage across all listed projects.</p>
            `;
          })()}
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
            <a class="action-button action-button--ghost" href="mailto:leomesbah@outlook.fr">
              ${ICONS.mail}<span>Email</span>
            </a>
          </div>
        </div>

        <aside class="hero__now">
          <div class="github-activity">
            <p class="github-activity__label">${ICONS.github}<span>recent commits</span></p>
            <div id="github-activity-feed" class="github-activity__feed">
              <span class="github-activity__loading">Loading…</span>
            </div>
            <p class="github-activity__note">Most of my active contributions are private.</p>
          </div>
        </aside>
      </section>

      <nav class="space-tabs" aria-label="My space tabs">
        ${visibleTabs
          .map(
            ([id, tab]) => `
              <button class="space-tab${activeTabId === id ? " is-active" : ""}" type="button" data-switch-tab="${id}">
                ${ICONS[TAB_ICON[id]] || ""}<span class="space-tab__label">${tab.label}</span>
              </button>
            `,
          )
          .join("")}
      </nav>

      <section class="space-body">
        ${activeTab.render()}
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
          ${project.logo
            ? `<img class="project-head__logo" src="${project.logo}" alt="${project.title} logo">`
            : `<span class="project-head__icon">${iconName ? ICONS[iconName] : ""}</span>`}
          <div>
            <p class="eyebrow">${project.kind}${project.archived ? ` <span class="project-badge project-badge--archive">Archive</span>` : ""}</p>
            <h2>${project.title}</h2>
          </div>
        </div>
        <span class="project-period">${ICONS.clock}${project.period}</span>
      </header>

      <p class="project-summary">${project.summary}</p>

      <div class="project-layout">
        <section class="project-stage">
          ${project.media() || renderGithubCard(project)}
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

function renderSlider(id, images) {
  return `
    <div class="proj-slider" data-slider-id="${id}" data-slider-current="0">
      <div class="proj-slider__viewport">
        <div class="proj-slider__track">
          ${images.map((src, i) => `
            <div class="proj-slider__slide">
              <img src="${src}" alt="Slide ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" draggable="false" />
            </div>
          `).join("")}
        </div>
        <button class="proj-slider__btn proj-slider__btn--prev" data-slider-prev="${id}" aria-label="Previous slide">${ICONS.arrowLeft}</button>
        <button class="proj-slider__btn proj-slider__btn--next" data-slider-next="${id}" aria-label="Next slide">${ICONS.arrowRight}</button>
        <span class="proj-slider__count"><span class="proj-slider__count-cur">1</span> / ${images.length}</span>
      </div>
      <div class="proj-slider__dots">
        ${images.map((_, i) => `<button class="proj-slider__dot${i === 0 ? " is-active" : ""}" data-slider-goto="${id}:${i}" aria-label="Slide ${i + 1}"></button>`).join("")}
      </div>
    </div>
  `;
}

function goToSlide(sliderId, index) {
  const slider = document.querySelector(`[data-slider-id="${sliderId}"]`);
  if (!slider) return;
  const total = slider.querySelectorAll(".proj-slider__slide").length;
  const i = ((index % total) + total) % total;
  slider.querySelector(".proj-slider__track").style.transform = `translateX(-${i * 100}%)`;
  slider.querySelector(".proj-slider__count-cur").textContent = i + 1;
  slider.querySelectorAll(".proj-slider__dot").forEach((d, j) => d.classList.toggle("is-active", j === i));
  slider.dataset.sliderCurrent = i;
}

function renderTabs(id, tabs, defaultIndex = 0) {
  return `
    <div class="proj-tabs" data-tabs-id="${id}" data-tabs-current="${defaultIndex}">
      <div class="proj-tabs__nav">
        ${tabs.map((tab, i) => `
          <button class="proj-tabs__btn${i === defaultIndex ? " is-active" : ""}" data-tabs-goto="${id}:${i}">${tab.label}</button>
        `).join("")}
      </div>
      <div class="proj-tabs__body">
        ${tabs.map((tab, i) => `
          <div class="proj-tabs__panel${i === defaultIndex ? " is-active" : ""}">${tab.content}</div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderPluginCard(name, description, fileTree, codeSnippet) {
  return `
    <div class="plugin-card">
      <div class="plugin-card__header">
        <span class="plugin-card__name">${name}</span>
        <span class="plugin-card__lang">Java · Bukkit</span>
      </div>
      <p class="plugin-card__desc">${description}</p>
      <div class="plugin-card__cols">
        <div class="plugin-card__tree">${fileTree.map(f => `<span>${f}</span>`).join("")}</div>
        <pre class="plugin-card__code"><code>${codeSnippet}</code></pre>
      </div>
    </div>
  `;
}

function renderGithubCard(project) {
  const ghLink = project.links.find(l => l.url.includes("github.com"));
  const url = ghLink ? ghLink.url : "https://github.com/gniax";
  const repoName = ghLink ? ghLink.url.replace("https://github.com/gniax/", "") : "";
  const tech = (project.tech || []).slice(0, 4);
  return `
    <a class="gh-card" href="${url}" target="_blank" rel="noreferrer">
      <div class="gh-card__dots"><span></span><span></span><span></span></div>
      <div class="gh-card__body">
        <div class="gh-card__top">
          <span class="gh-card__icon">${ICONS.github}</span>
          <span class="gh-card__label">github.com / gniax</span>
        </div>
        <strong class="gh-card__name">${repoName}</strong>
        <p class="gh-card__desc">${project.summary}</p>
        ${tech.length ? `<div class="gh-card__tags">${tech.map(t => `<span>${t}</span>`).join("")}</div>` : ""}
      </div>
      <div class="gh-card__footer">
        <span class="gh-card__btn">${ICONS.github} View source on GitHub</span>
      </div>
    </a>
  `;
}

function renderArchiveEmbed(src, title) {
  return `
    <div class="project-embed">
      <div class="project-embed__bar">
        <div class="project-embed__bar-left">
          <button class="project-embed__back" type="button" data-embed-back>
            ${ICONS.arrowLeft}<span>leomesbah.me</span>
          </button>
          <span class="project-embed__bar-sep">/</span>
          <span class="project-embed__bar-url">${title}</span>
        </div>
        <a class="project-embed__open" href="${src}" target="_blank" rel="noreferrer">
          ${ICONS.link}<span>Open</span>
        </a>
      </div>
      <iframe class="project-embed__frame" src="${src}" title="${title}" loading="lazy"></iframe>
    </div>
  `;
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (days > 30) return `${Math.floor(days / 30)}mo ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${mins}m ago`;
}

async function fetchGithubActivity() {
  const container = document.querySelector("#github-activity-feed");
  if (!container) return;
  try {
    const res = await fetch("https://api.github.com/users/gniax/repos?sort=updated&per_page=6&type=public");
    if (!res.ok) throw new Error();
    const repos = await res.json();
    if (!repos.length) {
      container.innerHTML = `<span class="github-activity__empty">—</span>`;
      return;
    }
    container.innerHTML = repos.slice(0, 4).map(r => `
      <a class="github-activity__item" href="${r.html_url}" target="_blank" rel="noreferrer">
        <span class="github-activity__repo">${r.name}</span>
        <span class="github-activity__msg">${r.description ? r.description.slice(0, 50) : (r.language || '—')}</span>
        <span class="github-activity__time">${timeAgo(r.updated_at)}</span>
      </a>`).join("");
  } catch {
    container.innerHTML = `<span class="github-activity__empty">—</span>`;
  }
}

/* ---------- articles (loaded from articles/ folder) ---------- */

let articlesIndex = null; // null = not yet fetched
const articlesBodyCache = {};

async function fetchArticlesIndex() {
  if (articlesIndex !== null) return;
  try {
    const res = await fetch("articles/index.json");
    articlesIndex = await res.json();
  } catch {
    articlesIndex = [];
  }
  if (state.overviewTab === "writing" && state.view === "overview") render();
}

async function fetchArticleBody(slug) {
  if (articlesBodyCache[slug] !== undefined) return;
  try {
    const res = await fetch(`articles/${slug}.json`);
    articlesBodyCache[slug] = await res.json();
  } catch {
    articlesBodyCache[slug] = null;
  }
}

function renderArticle(article) {
  return `
    <article class="article-page">
      <header class="article-head">
        <button class="article-back" type="button" data-switch-tab="writing">
          ${ICONS.arrowLeft}<span>Back to articles</span>
        </button>
        <p class="eyebrow">Note · ${article.date}</p>
        <h2>${article.title}</h2>
        <p class="article-summary">${article.summary}</p>
      </header>
      <div class="article-body pane-copy">
        ${article.body.map(p => `<p>${p}</p>`).join("")}
      </div>
    </article>
  `;
}

function render() {
  if (state.view === "overview") {
    mainView.innerHTML = renderOverview();
    fetchGithubActivity();
  } else if (state.view.startsWith("article-")) {
    const slug = state.view.slice("article-".length);
    if (articlesBodyCache[slug]) {
      mainView.innerHTML = renderArticle(articlesBodyCache[slug]);
    } else {
      mainView.innerHTML = `<article class="article-page"><p class="muted-note" style="padding:32px">Loading…</p></article>`;
      fetchArticleBody(slug).then(() => {
        if (state.view === "article-" + slug) mainView.innerHTML = renderArticle(articlesBodyCache[slug]);
      });
    }
  } else {
    mainView.innerHTML = renderProject(projects[state.view]);
  }

  if (state.view !== "overview") {
    state.designIndex = null;
  }

  document.querySelectorAll(".rail-link[data-view]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === state.view);
  });

  renderProjectArchiveRail();
  renderDesignModal();
  mainView.scrollTop = 0;
}

document.addEventListener("click", (event) => {
  const archiveFilterTarget = event.target.closest("[data-archive-filter]");
  if (archiveFilterTarget) {
    state.archiveFilter = archiveFilterTarget.dataset.archiveFilter;
    renderProjectArchiveRail();
    return;
  }

  const designFilterTarget = event.target.closest("[data-design-filter]");
  if (designFilterTarget) {
    state.designFilter = designFilterTarget.dataset.designFilter;
    state.designIndex = null;
    render();
    return;
  }

  const designCloseTarget = event.target.closest("[data-close-design-modal]");
  if (designCloseTarget) {
    state.designIndex = null;
    renderDesignModal();
    return;
  }

  const tabsGoto = event.target.closest("[data-tabs-goto]");
  if (tabsGoto) {
    const [id, idx] = tabsGoto.dataset.tabsGoto.split(":");
    const container = document.querySelector(`[data-tabs-id="${id}"]`);
    if (!container) return;
    const i = Number(idx);
    container.querySelectorAll(".proj-tabs__btn").forEach((b, j) => b.classList.toggle("is-active", j === i));
    container.querySelectorAll(".proj-tabs__panel").forEach((p, j) => p.classList.toggle("is-active", j === i));
    container.dataset.tabsCurrent = i;
    return;
  }

  const sliderPrev = event.target.closest("[data-slider-prev]");
  if (sliderPrev) {
    const id = sliderPrev.dataset.sliderPrev;
    const slider = document.querySelector(`[data-slider-id="${id}"]`);
    if (slider) goToSlide(id, Number(slider.dataset.sliderCurrent) - 1);
    return;
  }

  const sliderNext = event.target.closest("[data-slider-next]");
  if (sliderNext) {
    const id = sliderNext.dataset.sliderNext;
    const slider = document.querySelector(`[data-slider-id="${id}"]`);
    if (slider) goToSlide(id, Number(slider.dataset.sliderCurrent) + 1);
    return;
  }

  const sliderGoto = event.target.closest("[data-slider-goto]");
  if (sliderGoto) {
    const [id, i] = sliderGoto.dataset.sliderGoto.split(":");
    goToSlide(id, Number(i));
    return;
  }

  const designTarget = event.target.closest("[data-open-design]");
  if (designTarget) {
    const nextIndex = Number(designTarget.dataset.openDesign);
    if (Number.isInteger(nextIndex) && DESIGN_GALLERY[nextIndex]) {
      state.designIndex = nextIndex;
      renderDesignModal();
    }
    return;
  }

  const skillsToggle = event.target.closest("[data-toggle-skills]");
  if (skillsToggle) {
    const container = skillsToggle.closest(".hero__skills");
    const expanded = container.dataset.expanded === "true";
    container.dataset.expanded = expanded ? "false" : "true";
    const count = container.querySelectorAll(".hero__skill-extra").length;
    skillsToggle.textContent = expanded ? `+${count} more` : "show less";
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
    state.designIndex = null;
    render();
    return;
  }

  const projectTarget = event.target.closest("[data-open-project]");
  if (projectTarget) {
    state.view = projectTarget.dataset.openProject;
    render();
    return;
  }

  const articleTarget = event.target.closest("[data-open-article]");
  if (articleTarget) {
    state.view = "article-" + articleTarget.dataset.openArticle;
    state.overviewTab = "writing";
    render();
    return;
  }

  const embedBack = event.target.closest("[data-embed-back]");
  if (embedBack) {
    document.querySelector("#main-view")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

function startApp() {
  boot();
  render();
}

if (document.readyState !== "loading") {
  startApp();
} else {
  document.addEventListener("DOMContentLoaded", startApp, { once: true });
}
