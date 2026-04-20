const SITE_ORIGIN = "https://leomesbah.me";
const DEFAULT_OG_IMAGE = "/assets/images/portrait.jpg";

const PROJECT_META = {
  coinvote: {
    title: "Coinvote.cc — Léo Mesbah",
    description:
      "Crypto voting and discovery platform — founded as an LLC in 2021, 2.9M+ visitors and 500k+ registered users, profitable, built and operated entirely solo.",
    image: "/assets/images/logos/coinvote_logo.png",
  },
  bubblebot: {
    title: "Bubble Bot — Léo Mesbah",
    description:
      "A SaaS built around reverse engineering Dofus Touch — sold as a license-based automation bot, with a desktop client, custom protocol layer, server, API, website and account generation tooling.",
    image: "/assets/images/logos/bubblebot.png",
  },
  hytale: {
    title: "Hytale-Serveur.com — Léo Mesbah",
    description:
      "A public Hytale server listing platform built in PHP: rankings, server pages, votes, favorites, premium slots, submission flows and full admin tooling.",
    image: "/assets/images/logos/hytale.png",
  },
  vinted: {
    title: "vinted-republish-extension — Léo Mesbah",
    description:
      "Browser extension that saves Vinted listings, auto-fills new item forms, reuploads photos, and speeds up republishing.",
    image: "/assets/images/logos/vinted.svg",
  },
  vela: {
    title: "VELA-Tracking — Léo Mesbah",
    description:
      "Regatta tracking system built with C++, Qt, PHP and JavaScript, driven by GPS coordinates and XBee links, with a Raspberry Pi demo UI and course data handling.",
    image: "/assets/images/logos/vela.png",
  },
  leclerc: {
    title: "leclerc-service-app — Léo Mesbah",
    description: "SAV Leclerc application for iOS & Android made with Xamarin Forms in C#.",
    image: "/assets/images/logos/leclerc.svg",
  },
  sigmacraft: {
    title: "SigmaCraft — Léo Mesbah",
    description:
      "Built at 14 in 2014 — this is where I actually learned to code. A Minecraft server that grew into a real project: custom Java plugins, a live PHP website, shop logic, and a player base I had to keep happy.",
    image: "/assets/images/logos/sigmacraft.png",
  },
  eltacraft: {
    title: "EltaCraft — Léo Mesbah",
    description:
      "One of the first live systems I built around age 12: Minecraft server, website, vote pages, shop connections, community operations and first plugin work.",
    image: "/assets/images/logos/eltacraft.svg",
  },
  "dofus-validator": {
    title: "dofus-giftcode-automation — Léo Mesbah",
    description: "Node.js tool for automating Dofus gift code redemption across multiple accounts.",
    image: DEFAULT_OG_IMAGE,
  },
  scinsta: {
    title: "SCInsta-NoReels — Léo Mesbah",
    description: "Custom SCInsta fork focused on removing Reels and simplifying Instagram navigation.",
    image: "/assets/images/logos/instagram.svg",
  },
  magcubic: {
    title: "magcubic-hy300-root — Léo Mesbah",
    description:
      "Rooting and firmware customization for the Magcubic HY300 Pro with Magisk, HDMI state detection, and IR override.",
    image: "/assets/images/logos/ubuntu-terminal.svg",
  },
  enumsharp: {
    title: "enum-merge — Léo Mesbah",
    description: "C# WPF utility for merging and synchronizing enum definitions across source files.",
    image: DEFAULT_OG_IMAGE,
  },
  "drone-ball": {
    title: "drone-ball — Léo Mesbah",
    description:
      "Split-screen Rocket League-like with drones and low-gravity movement, built in Unity during a game jam.",
    image: "/assets/images/logos/drone-ball.png",
  },
  "bushido-quest": {
    title: "Bushido Quest — Léo Mesbah",
    description:
      "VR escape game built with Unreal Engine 4, featuring interaction-based progression and reward-driven level design.",
    image: "/assets/images/logos/bushidoQuest.png",
    legacyPaths: ["/projects/edu-bushido"],
  },
  "edu-fitmeal": {
    title: "fitmeal-mobile — Léo Mesbah",
    description: "Mobile app built with React Native and Expo for calorie tracking and meal planning.",
    image: "/assets/images/logos/fitmeal.png",
  },
  "edu-cardboard": {
    title: "EDU_VAR_GoogleCardboard — Léo Mesbah",
    description: "EDU - MIRI Course | VAR - 5th Year, FIB UPC - Unity & Google Cardboard",
    image: DEFAULT_OG_IMAGE,
  },
  "edu-qt": {
    title: "EDU_QtCalculator — Léo Mesbah",
    description: "Basic calculator in Qt (C++) built during BTS SNIR coursework.",
    image: DEFAULT_OG_IMAGE,
  },
  "edu-opengl": {
    title: "EDU_OpenGL — Léo Mesbah",
    description: "OpenGL coursework project focused on graphics programming fundamentals.",
    image: DEFAULT_OG_IMAGE,
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function getPageMeta(url) {
  const path = normalizePath(url.pathname);
  const match = path.match(/^\/projects\/([^/]+)$/);
  if (!match) return null;

  const slug = decodeURIComponent(match[1]);
  const meta = PROJECT_META[slug];
  if (!meta) {
    const aliasMeta = Object.values(PROJECT_META).find((entry) => (entry.legacyPaths || []).includes(path));
    if (!aliasMeta) return null;
    return {
      title: aliasMeta.title,
      description: aliasMeta.description,
      image: new URL(aliasMeta.image || DEFAULT_OG_IMAGE, SITE_ORIGIN).toString(),
      url: new URL(path, SITE_ORIGIN).toString(),
      canonical: new URL(
        Object.keys(PROJECT_META).find((key) => PROJECT_META[key] === aliasMeta)
          ? `/projects/${Object.keys(PROJECT_META).find((key) => PROJECT_META[key] === aliasMeta)}`
          : path,
        SITE_ORIGIN
      ).toString(),
      type: "article",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    image: new URL(meta.image || DEFAULT_OG_IMAGE, SITE_ORIGIN).toString(),
    url: new URL(path, SITE_ORIGIN).toString(),
    canonical: new URL(path, SITE_ORIGIN).toString(),
    type: "article",
  };
}

class AttrRewriter {
  constructor(attr, value) {
    this.attr = attr;
    this.value = value;
  }

  element(element) {
    element.setAttribute(this.attr, this.value);
  }
}

class ContentRewriter {
  constructor(value) {
    this.value = value;
  }

  element(element) {
    element.setInnerContent(this.value);
  }
}

function rewriteHtml(response, meta) {
  return new HTMLRewriter()
    .on("title", new ContentRewriter(meta.title))
    .on('meta[name="description"]', new AttrRewriter("content", meta.description))
    .on('link[rel="canonical"]', new AttrRewriter("href", meta.canonical))
    .on('meta[property="og:type"]', new AttrRewriter("content", meta.type))
    .on('meta[property="og:title"]', new AttrRewriter("content", meta.title))
    .on('meta[property="og:description"]', new AttrRewriter("content", meta.description))
    .on('meta[property="og:url"]', new AttrRewriter("content", meta.url))
    .on('meta[property="og:image"]', new AttrRewriter("content", meta.image))
    .on('meta[name="twitter:title"]', new AttrRewriter("content", meta.title))
    .on('meta[name="twitter:description"]', new AttrRewriter("content", meta.description))
    .on('meta[name="twitter:image"]', new AttrRewriter("content", meta.image))
    .transform(response);
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const meta = getPageMeta(new URL(request.url));

    if (!meta) return response;

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;

    const headers = new Headers(response.headers);
    headers.set("x-robots-tag", "index,follow");

    return rewriteHtml(new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    }), meta);
  },
};
