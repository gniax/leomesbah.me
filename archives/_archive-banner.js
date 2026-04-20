(function () {
  if (window.top !== window.self) return;
  if (document.documentElement.dataset.lmArchiveBanner) return;
  document.documentElement.dataset.lmArchiveBanner = "mounted";

  var ARCHIVES = {
    bubblebot: { name: "Bubble Bot", slug: "bubblebot" },
    eltacraft: { name: "EltaCraft", slug: "eltacraft" },
    hytale: { name: "Hytale-Serveur", slug: "hytale" },
    sigmacraft: { name: "SigmaCraft", slug: "sigmacraft" },
    "vela-tracking": { name: "VELA Tracking", slug: "vela" }
  };

  var match = location.pathname.match(/\/archives\/([^/]+)/);
  var key = match ? match[1] : null;
  var meta = (key && ARCHIVES[key]) || { name: "Archive", slug: "" };
  var backHref = "https://leomesbah.me/" + (meta.slug ? "projects/" + meta.slug : "");
  var STORAGE_KEY = "lm.archive-banner.hidden";

  function injectStyles() {
    if (document.getElementById("lm-archive-banner-style")) return;
    var style = document.createElement("style");
    style.id = "lm-archive-banner-style";
    style.textContent =
      "@keyframes lm-archive-pulse{0%,100%{box-shadow:0 0 0 0 rgba(216,139,85,.6)}50%{box-shadow:0 0 0 5px rgba(216,139,85,0)}}" +
      ".lm-archive-bar,.lm-archive-tab{position:fixed;top:0;z-index:2147483647;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.2;color:#f3efe7;box-sizing:border-box}" +
      ".lm-archive-bar *{box-sizing:border-box}" +
      ".lm-archive-bar{left:0;right:0;display:flex;align-items:center;gap:12px;padding:0 16px;height:44px;background:#14171c;border-bottom:1px solid #262b35;box-shadow:0 2px 8px rgba(0,0,0,.35),inset 0 -2px 0 0 #d88b55}" +
      ".lm-archive-bar__badge{display:inline-flex;align-items:center;gap:7px;padding:4px 9px;border-radius:4px;background:rgba(216,139,85,.12);border:1px solid rgba(216,139,85,.35);color:#d88b55;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;flex-shrink:0}" +
      ".lm-archive-bar__badge-dot{width:6px;height:6px;border-radius:50%;background:#d88b55;animation:lm-archive-pulse 1.8s ease-in-out infinite;flex-shrink:0}" +
      ".lm-archive-bar__left{display:flex;align-items:center;gap:10px;min-width:0;flex:1}" +
      ".lm-archive-bar__back{display:inline-flex;align-items:center;gap:6px;color:#d88b55;text-decoration:none;padding:5px 10px;border-radius:4px;background:transparent;border:1px solid rgba(216,139,85,.35);white-space:nowrap;font-weight:600;transition:background 140ms,color 140ms,border-color 140ms}" +
      ".lm-archive-bar__back:hover{background:rgba(216,139,85,.1);color:#ecb187;border-color:rgba(216,139,85,.55);text-decoration:none}" +
      ".lm-archive-bar__back svg{flex-shrink:0}" +
      ".lm-archive-bar__title{color:#f3efe7;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;font-size:12.5px}" +
      ".lm-archive-bar__title small{color:#8a8f9b;font-weight:500;margin-left:6px}" +
      ".lm-archive-bar__note{color:#b8b3a7;font-size:11.5px;font-weight:500;white-space:nowrap}" +
      ".lm-archive-bar__right{display:flex;align-items:center;gap:6px;flex-shrink:0}" +
      ".lm-archive-bar__close{color:#8a8f9b;background:transparent;border:1px solid #2a2f3a;padding:4px 10px;border-radius:4px;cursor:pointer;font-family:inherit;font-size:11px;font-weight:500;transition:color 120ms,border-color 120ms}" +
      ".lm-archive-bar__close:hover{color:#f3efe7;border-color:#3a4050}" +
      ".lm-archive-tab{left:auto;right:14px;border-radius:0 0 6px 6px;padding:6px 12px;cursor:pointer;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;font-weight:700;color:#d88b55;background:#14171c;border:1px solid #262b35;border-top:none;box-shadow:0 4px 10px rgba(0,0,0,.35),inset 0 -2px 0 0 #d88b55;display:inline-flex;align-items:center;gap:7px;letter-spacing:1px;text-transform:uppercase}" +
      ".lm-archive-tab:hover{color:#ecb187;background:#191d24}" +
      ".lm-archive-tab-dot{width:6px;height:6px;border-radius:50%;background:#d88b55;animation:lm-archive-pulse 1.8s ease-in-out infinite;display:inline-block}" +
      ".lm-archive-spacer{height:44px;width:100%;flex-shrink:0;pointer-events:none}" +
      "@media (max-width:720px){.lm-archive-bar__note{display:none}.lm-archive-bar{padding:0 10px;gap:8px;height:40px}.lm-archive-bar__back{padding:4px 8px;font-size:11.5px}.lm-archive-bar__title{font-size:11.5px}.lm-archive-bar__title small{display:none}.lm-archive-bar__badge{padding:3px 7px;font-size:10px}.lm-archive-spacer{height:40px}}";
    document.head.appendChild(style);
  }

  function createBanner() {
    var bar = document.createElement("div");
    bar.className = "lm-archive-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Archive banner");
    bar.innerHTML =
      '<span class="lm-archive-bar__badge" title="Local static snapshot — forms, payments and server calls will not work.">' +
        '<span class="lm-archive-bar__badge-dot" aria-hidden="true"></span>' +
        '<span>Archive</span>' +
      '</span>' +
      '<div class="lm-archive-bar__left">' +
        '<a class="lm-archive-bar__back" href="' + backHref + '" title="Back to leomesbah.me portfolio">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>' +
          '<span>Back to leomesbah.me</span>' +
        '</a>' +
        '<span class="lm-archive-bar__title">' + meta.name + '<small>· static snapshot</small></span>' +
      '</div>' +
      '<span class="lm-archive-bar__note">cached copy — some features may not work</span>' +
      '<div class="lm-archive-bar__right">' +
        '<button class="lm-archive-bar__close" type="button" aria-label="Hide banner">hide</button>' +
      '</div>';
    return bar;
  }

  function createTab() {
    var tab = document.createElement("button");
    tab.className = "lm-archive-tab";
    tab.type = "button";
    tab.setAttribute("aria-label", "Show archive banner");
    tab.innerHTML = '<span class="lm-archive-tab-dot" aria-hidden="true"></span><span>Archive</span>';
    return tab;
  }

  function createSpacer() {
    var spacer = document.createElement("div");
    spacer.className = "lm-archive-spacer";
    spacer.setAttribute("aria-hidden", "true");
    return spacer;
  }

  var shiftedNodes = [];
  function shiftFixedTop(amount) {
    shiftedNodes.forEach(function (e) {
      if (e.prev == null) e.node.style.removeProperty("top");
      else e.node.style.top = e.prev;
    });
    shiftedNodes = [];
    if (!amount) return;
    var sel = ".navbar.fixed-top, .fixed-top, nav.fixed-top, header.fixed-top, [data-lm-archive-shift]";
    var nodes = document.querySelectorAll(sel);
    nodes.forEach(function (n) {
      var cs = window.getComputedStyle(n);
      if (cs.position !== "fixed" && cs.position !== "sticky") return;
      shiftedNodes.push({ node: n, prev: n.style.top || null });
      n.style.top = amount + "px";
    });
  }

  var shiftedFlowNodes = [];
  function shiftFlowTop(amount) {
    shiftedFlowNodes.forEach(function (e) {
      if (e.prev == null) e.node.style.removeProperty("margin-top");
      else e.node.style.marginTop = e.prev;
    });
    shiftedFlowNodes = [];
    if (!amount || key !== "hytale") return;
    var nodes = document.querySelectorAll(".navbar.navbar-static-top");
    nodes.forEach(function (n) {
      shiftedFlowNodes.push({ node: n, prev: n.style.marginTop || null });
      n.style.marginTop = amount + "px";
    });
  }

  var activeSpacer = null;
  function showTab() {
    var tab = createTab();
    document.body.appendChild(tab);
    tab.addEventListener("click", function () {
      try { sessionStorage.removeItem(STORAGE_KEY); } catch (_) {}
      tab.remove();
      showBanner();
    });
  }

  function showBanner() {
    var banner = createBanner();
    var amount = window.matchMedia("(max-width:720px)").matches ? 40 : 44;
    if (key === "hytale") {
      shiftFlowTop(amount);
    } else {
      activeSpacer = createSpacer();
      document.body.insertBefore(activeSpacer, document.body.firstChild);
    }
    document.body.appendChild(banner);
    shiftFixedTop(amount);
    banner.querySelector(".lm-archive-bar__close").addEventListener("click", function () {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (_) {}
      banner.remove();
      if (activeSpacer) {
        activeSpacer.remove();
        activeSpacer = null;
      }
      shiftFixedTop(0);
      shiftFlowTop(0);
      showTab();
    });
  }

  function mount() {
    injectStyles();
    var hidden = false;
    try { hidden = sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (_) {}
    if (hidden) showTab();
    else showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})();
