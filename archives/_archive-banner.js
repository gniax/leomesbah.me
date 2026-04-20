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
      "@keyframes lm-archive-pulse{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,.55)}50%{box-shadow:0 0 0 6px rgba(255,255,255,0)}}" +
      "@keyframes lm-archive-stripes{0%{background-position:0 0}100%{background-position:40px 0}}" +
      ".lm-archive-bar,.lm-archive-tab{position:fixed;top:0;z-index:2147483647;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:13px;line-height:1.2;color:#fff;box-sizing:border-box}" +
      ".lm-archive-bar *{box-sizing:border-box}" +
      ".lm-archive-bar{left:0;right:0;display:flex;align-items:center;gap:12px;padding:0 16px;height:48px;background:linear-gradient(90deg,#c2410c 0%,#ea580c 45%,#f97316 100%);border-bottom:3px solid #9a3412;box-shadow:0 4px 14px rgba(194,65,12,.35),0 1px 0 rgba(255,255,255,.15) inset;font-weight:600;letter-spacing:.1px}" +
      ".lm-archive-bar::before{content:'';position:absolute;inset:0;pointer-events:none;background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.06) 0 10px,transparent 10px 20px);animation:lm-archive-stripes 3s linear infinite;opacity:.6}" +
      ".lm-archive-bar>*{position:relative}" +
      ".lm-archive-bar__badge{display:inline-flex;align-items:center;gap:6px;padding:4px 9px;border-radius:4px;background:rgba(0,0,0,.25);color:#ffedd5;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;white-space:nowrap;flex-shrink:0}" +
      ".lm-archive-bar__badge-dot{width:7px;height:7px;border-radius:50%;background:#fff;animation:lm-archive-pulse 1.8s ease-in-out infinite;flex-shrink:0}" +
      ".lm-archive-bar__left{display:flex;align-items:center;gap:10px;min-width:0;flex:1}" +
      ".lm-archive-bar__back{display:inline-flex;align-items:center;gap:6px;color:#fff;text-decoration:none;padding:6px 12px;border-radius:5px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);white-space:nowrap;font-weight:700;transition:background 150ms,transform 150ms}" +
      ".lm-archive-bar__back:hover{background:rgba(255,255,255,.24);color:#fff;text-decoration:none;transform:translateX(-1px)}" +
      ".lm-archive-bar__back svg{flex-shrink:0}" +
      ".lm-archive-bar__title{color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-size:13px}" +
      ".lm-archive-bar__title small{opacity:.8;font-weight:500;margin-left:4px}" +
      ".lm-archive-bar__note{color:#fff7ed;font-size:12px;font-weight:500;white-space:nowrap;opacity:.95}" +
      ".lm-archive-bar__right{display:flex;align-items:center;gap:6px;flex-shrink:0}" +
      ".lm-archive-bar__close{color:#fff;background:rgba(0,0,0,.15);border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:5px;cursor:pointer;font-family:inherit;font-size:11px;font-weight:600;transition:background 120ms}" +
      ".lm-archive-bar__close:hover{background:rgba(0,0,0,.3)}" +
      ".lm-archive-tab{left:auto;right:14px;border-radius:0 0 8px 8px;padding:7px 14px;cursor:pointer;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12px;font-weight:700;color:#fff;background:linear-gradient(180deg,#ea580c 0%,#c2410c 100%);border:1px solid #9a3412;border-top:none;box-shadow:0 4px 10px rgba(194,65,12,.35);display:inline-flex;align-items:center;gap:7px;letter-spacing:.5px;text-transform:uppercase}" +
      ".lm-archive-tab:hover{background:linear-gradient(180deg,#f97316 0%,#ea580c 100%)}" +
      ".lm-archive-tab-dot{width:7px;height:7px;border-radius:50%;background:#fff;animation:lm-archive-pulse 1.8s ease-in-out infinite;display:inline-block}" +
      "html.lm-archive-shift{padding-top:48px!important;box-sizing:border-box}" +
      "html.lm-archive-shift body{margin-top:0}" +
      "@media (max-width:720px){.lm-archive-bar__note{display:none}.lm-archive-bar{padding:0 10px;gap:8px;height:44px}.lm-archive-bar__back{padding:5px 8px;font-size:12px}.lm-archive-bar__title{font-size:12px}.lm-archive-bar__title small{display:none}html.lm-archive-shift{padding-top:44px!important}.lm-archive-bar__badge{padding:3px 7px;font-size:10px}}";
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
      '<span class="lm-archive-bar__note">⚠ cached copy — some features may not work</span>' +
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
    document.body.appendChild(banner);
    document.documentElement.classList.add("lm-archive-shift");
    shiftFixedTop(window.matchMedia("(max-width:720px)").matches ? 44 : 48);
    banner.querySelector(".lm-archive-bar__close").addEventListener("click", function () {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (_) {}
      banner.remove();
      document.documentElement.classList.remove("lm-archive-shift");
      shiftFixedTop(0);
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
