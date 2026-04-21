const SITE_ORIGIN = "https://leomesbah.me";
const DEFAULT_OG_IMAGE = "/assets/images/portrait.jpg";
const DEFAULT_DESCRIPTION =
  "Léo Mesbah builds products, tooling and internet systems. Founder of Coinvote.cc.";
const INDEX_ROBOTS = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

const OVERVIEW_META = {
  "/": {
    title: "Léo Mesbah — Software Engineer & Builder",
    description: DEFAULT_DESCRIPTION,
    heading: "Léo Mesbah",
    intro:
      "Software engineer focused on backend systems, C++/C/.NET, web and mobile products, and AI/ML/LLM automation workflows.",
    body: [
      "Founder of Coinvote.cc and engineer at KNDS France.",
      "This portfolio presents selected software projects, work experience, education, and design work.",
    ],
  },
  "/experience": {
    title: "Experience — Léo Mesbah",
    description:
      "Professional experience across KNDS France, Coinvote.cc LLC, search quality evaluation, and mobile app development.",
    heading: "Experience",
    intro:
      "Professional experience across backend systems, AI integration, automation, mobile apps, and product operations.",
    body: [
      "KNDS France Training: AI lead, AR/VR projects, web platform and network infrastructure, systems programming in C/C++.",
      "Coinvote.cc LLC: founder and sole engineer across backend, mobile app, infrastructure, design, marketing, billing and operations.",
      "Previous search quality evaluation work for Appen and Datavio.ai, plus a Xamarin internship at E.Leclerc.",
    ],
  },
  "/education": {
    title: "Education — Léo Mesbah",
    description:
      "Engineering studies, certifications and technical training including ESIEE Paris, FIB Barcelona, Azure Fundamentals and CCNA.",
    heading: "Education",
    intro:
      "Engineering studies, certifications, and technical training in computer science, networks, graphics, and software systems.",
    body: [
      "Engineering degree at ESIEE Paris and master's studies at FIB Barcelona.",
      "Background in digital systems, scientific preparation, and mathematics-focused baccalaureate.",
      "Certifications include Microsoft Azure Fundamentals and Cisco CCNA Introduction to Networks.",
    ],
  },
  "/designs": {
    title: "Designs — Léo Mesbah",
    description:
      "Personal visual archive with branding, social covers, motion visuals and insight graphics organized by project.",
    heading: "Designs",
    intro:
      "A visual archive of branding, campaign creatives, social covers and insight graphics created across personal and product projects.",
    body: [
      "Most pieces come from Coinvote campaigns and insight visuals.",
      "The archive also includes logo work and brand assets for other projects such as Bushido Quest, GamesNeed and Rapizz.",
    ],
  },
};

const SECTION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/designs", label: "Designs" },
];

const FEATURED_PROJECT_LINKS = [
  { href: "/projects/coinvote", label: "Coinvote.cc" },
  { href: "/projects/bubblebot", label: "Bubble Bot" },
  { href: "/projects/sigmacraft", label: "SigmaCraft" },
  { href: "/projects/bushido-quest", label: "Bushido Quest" },
];

const DESIGN_PROJECT_LINKS = {
  Coinvote: "/projects/coinvote",
  "Bushido Quest": "/projects/bushido-quest",
  GamesNeed: "/",
  Rapizz: "/",
};

const PROJECT_META = {
  coinvote: {
    title: "Coinvote.cc — Léo Mesbah",
    name: "Coinvote.cc",
    description:
      "Crypto voting and discovery platform — founded as an LLC in 2021, 2.9M+ visitors and 500k+ registered users, profitable, built and operated entirely solo.",
    image: "/assets/images/logos/coinvote_logo.png",
    category: "SoftwareApplication",
    highlights: [
      "Solo full-stack product with backend, infrastructure, automation and operations.",
      "Built around crypto discovery, voting protection, monetization and data ingestion.",
      "Scaled to millions of visits with a custom PHP and infrastructure stack.",
    ],
  },
  bubblebot: {
    title: "Bubble Bot — Léo Mesbah",
    name: "Bubble Bot",
    description:
      "A SaaS built around reverse engineering Dofus Touch — sold as a license-based automation bot, with a desktop client, custom protocol layer, server, API, website and account generation tooling.",
    image: "/assets/images/logos/bubblebot.png",
    category: "SoftwareApplication",
    highlights: [
      "License-based automation SaaS with desktop client and backend services.",
      "Included reverse engineering, protocol work, account generation tooling and API services.",
      "Combined desktop, web, automation and server infrastructure.",
    ],
  },
  hytale: {
    title: "Hytale-Serveur.com — Léo Mesbah",
    name: "Hytale-Serveur.com",
    description:
      "A public Hytale server listing platform built in PHP: rankings, server pages, votes, favorites, premium slots, submission flows and full admin tooling.",
    image: "/assets/images/logos/hytale.png",
    category: "WebSite",
    highlights: [
      "Server listing platform with rankings, votes, favorites and submission flows.",
      "Included premium placements and monetization logic.",
      "Built with PHP, MySQL and JavaScript.",
    ],
  },
  vinted: {
    title: "vinted-republish-extension — Léo Mesbah",
    name: "vinted-republish-extension",
    description:
      "Browser extension that saves Vinted listings, auto-fills new item forms, reuploads photos, and speeds up republishing.",
    image: "/assets/images/logos/vinted.svg",
    category: "SoftwareApplication",
    highlights: [
      "Browser extension focused on Vinted republishing workflows.",
      "Handled data saving, form refill and image reupload automation.",
      "Built as practical browser-side tooling.",
    ],
  },
  vela: {
    title: "VELA-Tracking — Léo Mesbah",
    name: "VELA-Tracking",
    description:
      "Regatta tracking system built with C++, Qt, PHP and JavaScript, driven by GPS coordinates and XBee links, with a Raspberry Pi demo UI and course data handling.",
    image: "/assets/images/logos/vela.png",
    category: "SoftwareApplication",
    highlights: [
      "Realtime regatta tracking with C++, Qt, PHP and JavaScript.",
      "Included GPS-driven course tracking and Raspberry Pi demonstration UI.",
      "Covered desktop, web and embedded-style presentation layers.",
    ],
  },
  leclerc: {
    title: "leclerc-service-app — Léo Mesbah",
    name: "leclerc-service-app",
    description: "SAV Leclerc application for iOS & Android made with Xamarin Forms in C#.",
    image: "/assets/images/logos/leclerc.png",
    category: "MobileApplication",
    highlights: [
      "Cross-platform Xamarin Forms mobile application.",
      "Built in C# for iOS and Android customer service flows.",
      "Created during an internship at E.Leclerc.",
    ],
  },
  sigmacraft: {
    title: "SigmaCraft — Léo Mesbah",
    name: "SigmaCraft",
    description:
      "Built at 14 in 2014 — this is where I actually learned to code. A Minecraft server that grew into a real project: custom Java plugins, a live PHP website, shop logic, and a player base I had to keep happy.",
    image: "/assets/images/logos/sigmacraft.png",
    category: "CreativeWork",
    highlights: [
      "Early large-scale self-taught project combining Java, PHP and MySQL.",
      "Included custom game plugins, website, shop logic and server operations.",
      "A formative project in software, gameplay and community management.",
    ],
  },
  eltacraft: {
    title: "EltaCraft — Léo Mesbah",
    name: "EltaCraft",
    description:
      "One of the first live systems I built around age 12: Minecraft server, website, vote pages, shop connections, community operations and first plugin work.",
    image: "/assets/images/logos/eltacraft.svg",
    category: "CreativeWork",
    highlights: [
      "Very early live server project with website and vote/shop flows.",
      "Connected gameplay systems with web tooling and operations.",
      "A first practical step into coding through real users and real systems.",
    ],
  },
  "dofus-validator": {
    title: "dofus-giftcode-automation — Léo Mesbah",
    name: "dofus-giftcode-automation",
    description: "Node.js tool for automating Dofus gift code redemption across multiple accounts.",
    image: DEFAULT_OG_IMAGE,
    category: "SoftwareSourceCode",
    highlights: [
      "Node.js automation tool for multi-account gift code redemption.",
      "Designed as reusable tooling rather than a one-off script.",
    ],
  },
  scinsta: {
    title: "SCInsta-NoReels — Léo Mesbah",
    name: "SCInsta-NoReels",
    description: "Custom SCInsta fork focused on removing Reels and simplifying Instagram navigation.",
    image: "/assets/images/logos/instagram.svg",
    category: "SoftwareSourceCode",
    highlights: [
      "Custom fork focused on simplifying Instagram navigation.",
      "Removes Reels and reduces visual clutter in the app.",
    ],
  },
  magcubic: {
    title: "magcubic-hy300-root — Léo Mesbah",
    name: "magcubic-hy300-root",
    description:
      "Rooting and firmware customization for the Magcubic HY300 Pro with Magisk, HDMI state detection, and IR override.",
    image: "/assets/images/logos/ubuntu-terminal.svg",
    category: "SoftwareSourceCode",
    highlights: [
      "Firmware and rooting customization project for the Magcubic HY300 Pro.",
      "Includes Magisk support, HDMI state handling and IR override work.",
    ],
  },
  enumsharp: {
    title: "enum-merge — Léo Mesbah",
    name: "enum-merge",
    description: "C# WPF utility for merging and synchronizing enum definitions across source files.",
    image: DEFAULT_OG_IMAGE,
    category: "SoftwareSourceCode",
    highlights: [
      "C# WPF utility for enum synchronization across files.",
      "Focused on practical desktop developer tooling.",
    ],
  },
  "drone-ball": {
    title: "drone-ball — Léo Mesbah",
    name: "drone-ball",
    description:
      "Split-screen Rocket League-like with drones and low-gravity movement, built in Unity during a game jam.",
    image: "/assets/images/logos/drone-ball.png",
    category: "VideoGame",
    highlights: [
      "Unity game jam project with split-screen drone gameplay.",
      "Low-gravity movement and competitive arcade style design.",
    ],
  },
  "bushido-quest": {
    title: "Bushido Quest — Léo Mesbah",
    name: "Bushido Quest",
    description:
      "VR escape game built with Unreal Engine 4, featuring interaction-based progression and reward-driven level design.",
    image: "/assets/images/logos/bushidoQuest.png",
    category: "VideoGame",
    legacyPaths: ["/projects/edu-bushido"],
    highlights: [
      "VR escape game built with Unreal Engine 4.",
      "Focused on interaction-driven progression and reward loops.",
      "Academic project in game design and technical implementation.",
    ],
  },
  "edu-fitmeal": {
    title: "fitmeal-mobile — Léo Mesbah",
    name: "fitmeal-mobile",
    description: "Mobile app built with React Native and Expo for calorie tracking and meal planning.",
    image: "/assets/images/logos/fitmeal.png",
    category: "MobileApplication",
    highlights: [
      "React Native and Expo mobile application.",
      "Focused on calorie tracking and meal planning.",
    ],
  },
  "edu-cardboard": {
    title: "EDU_VAR_GoogleCardboard — Léo Mesbah",
    name: "EDU_VAR_GoogleCardboard",
    description: "EDU - MIRI Course | VAR - 5th Year, FIB UPC - Unity & Google Cardboard",
    image: DEFAULT_OG_IMAGE,
    category: "CreativeWork",
    highlights: [
      "Unity and Google Cardboard VR coursework project.",
      "Developed during studies at FIB UPC Barcelona.",
    ],
  },
  "edu-qt": {
    title: "EDU_QtCalculator — Léo Mesbah",
    name: "EDU_QtCalculator",
    description: "Basic calculator in Qt (C++) built during BTS SNIR coursework.",
    image: DEFAULT_OG_IMAGE,
    category: "SoftwareSourceCode",
    highlights: [
      "Qt calculator built in C++.",
      "Coursework project during BTS SNIR studies.",
    ],
  },
  "edu-opengl": {
    title: "EDU_OpenGL — Léo Mesbah",
    name: "EDU_OpenGL",
    description: "OpenGL coursework project focused on graphics programming fundamentals.",
    image: DEFAULT_OG_IMAGE,
    category: "SoftwareSourceCode",
    highlights: [
      "OpenGL coursework project focused on graphics fundamentals.",
      "Built during engineering studies at ESIEE Paris.",
    ],
  },
};

const DESIGN_META = [
  {
    slug: "coinvote-wordmark-banner",
    title: "Coinvote Wordmark Banner",
    summary: "Wide branding banner used for platform headers and media kits.",
    src: "assets/designs/Asset 2@4x-8.png",
    alt: "Coinvote wordmark banner",
    projectLabel: "Coinvote",
    kind: "Branding",
    year: "2024",
  },
  {
    slug: "most-trending-memecoins-on-coingecko-video",
    title: "Most Trending MemeCoins on CoinGecko (Video)",
    summary: "Animated ranking visual for Coinvote Insights social posts.",
    src: "assets/designs/Coinvote Top Trending.mp4",
    alt: "Most Trending MemeCoins on CoinGecko animated visual",
    projectLabel: "Coinvote",
    kind: "Motion insight",
    year: "2024",
    type: "video",
  },
  {
    slug: "top-memecoins-on-coinmarketcap-apr-2024-variant-a",
    title: "Top MemeCoins on CoinMarketCap (Apr 2024, Variant A)",
    summary: "Most trending and top 24h volume leaderboard snapshot.",
    src: "assets/designs/Copie de Top CMC.png",
    alt: "Top MemeCoins on CoinMarketCap April 2024 variant A",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2024",
  },
  {
    slug: "top-memecoins-on-coinmarketcap-apr-2024-variant-b",
    title: "Top MemeCoins on CoinMarketCap (Apr 2024, Variant B)",
    summary: "Alternative export of the same CoinMarketCap leaderboard concept.",
    src: "assets/designs/Copie de Copie de Top CMC.png",
    alt: "Top MemeCoins on CoinMarketCap April 2024 variant B",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2024",
  },
  {
    slug: "top-memecoins-by-highest-social-engagement",
    title: "Top MemeCoins by Highest Social Engagement",
    summary: "LunarCrush-based engagement leaderboard with ranked coin visuals.",
    src: "assets/designs/Copie de Nouvelle.png",
    alt: "Top MemeCoins by highest social engagement visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "top-memecoins-by-highest-social-mentions",
    title: "Top MemeCoins by Highest Social Mentions",
    summary: "Ranked social mentions visual with top 8 meme coin projects.",
    src: "assets/designs/Copie de Panorama.png",
    alt: "Top MemeCoins by highest social mentions visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "solana-vm-launch-campaign-visual",
    title: "Solana VM Launch Campaign Visual",
    summary: "Promotional creative for SSVM token and pre-sale launch message.",
    src: "assets/designs/Copie de X is now live.jpg",
    alt: "Solana VM launch campaign visual",
    projectLabel: "Coinvote",
    kind: "Campaign",
    year: "2024",
  },
  {
    slug: "twitter-cover-pioneering-early-crypto-discoveries",
    title: "Twitter Cover - Pioneering Early Crypto Discoveries",
    summary: "Twitter/X header creative showcasing the mobile app and positioning.",
    src: "assets/designs/Couverture Twitter - Juillet (1024 x 500 px).png",
    alt: "Coinvote Twitter cover highlighting early crypto discoveries",
    projectLabel: "Coinvote",
    kind: "Social cover",
    year: "2024",
  },
  {
    slug: "bushido-quest-logo",
    title: "Bushido Quest Logo",
    summary: "Logo exploration with samurai silhouette and rising sun mark.",
    src: "assets/designs/Design sans titre.png",
    alt: "Bushido Quest logo",
    projectLabel: "Bushido Quest",
    kind: "Logo",
    year: "2023",
  },
  {
    slug: "gamesneed-brand-lockup",
    title: "GamesNeed Brand Lockup",
    summary: "Primary GamesNeed logo lockup on dark background.",
    src: "assets/designs/GamesNeed.png",
    alt: "GamesNeed logo lockup",
    projectLabel: "GamesNeed",
    kind: "Logo",
    year: "2024",
  },
  {
    slug: "top-meme-coins-by-highest-social-volume",
    title: "Top Meme Coins by Highest Social Volume",
    summary: "Dropstab social volume leaderboard with top meme coin entries.",
    src: "assets/designs/Greatest Volume.png",
    alt: "Top meme coins by highest social volume visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2024",
  },
  {
    slug: "highest-social-contributors-on-bnbchain-dec-2023",
    title: "Highest Social Contributors on BNBChain (Dec 2023)",
    summary: "Contributor ranking card with coin highlights and BNBChain branding.",
    src: "assets/designs/Highest Social Contributors.png",
    alt: "Highest social contributors on BNBChain December 2023",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "top-ethereum-projects-by-highest-social-engagement",
    title: "Top Ethereum Projects by Highest Social Engagement",
    summary: "Engagement leaderboard visual focused on Ethereum ecosystem coins.",
    src: "assets/designs/image.png",
    alt: "Top Ethereum projects by highest social engagement visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "linkedin-cover-find-the-next-rising-cryptos-early",
    title: "LinkedIn Cover - Find The Next Rising Cryptos Early",
    summary: "LinkedIn header creative with product CTA and app store badges.",
    src: "assets/designs/Linkedin Cover (1584 x 396 px).png",
    alt: "Coinvote LinkedIn cover with app call to action",
    projectLabel: "Coinvote",
    kind: "Social cover",
    year: "2024",
  },
  {
    slug: "most-bullish-memecoins-on-x",
    title: "Most Bullish MemeCoins on X",
    summary: "LiveCoinWatch sentiment visual ranking bullish meme coins on X.",
    src: "assets/designs/Livecoinwatch.png",
    alt: "Most bullish meme coins on X visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2024",
  },
  {
    slug: "coinvote-app-icon",
    title: "Coinvote App Icon",
    summary: "Rounded square app icon with the Coinvote emblem.",
    src: "assets/designs/logo.png",
    alt: "Coinvote app icon",
    projectLabel: "Coinvote",
    kind: "Logo",
    year: "2024",
  },
  {
    slug: "top-memecoins-projects-by-highest-social-interactions",
    title: "Top MemeCoins Projects by Highest Social Interactions",
    summary: "LunarCrush interaction leaderboard with multi-project rank panel.",
    src: "assets/designs/Nouvelle.png",
    alt: "Top MemeCoins projects by highest social interactions visual",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "rapizz-pizzeria-logo",
    title: "Rapizz Pizzeria Logo",
    summary: "Pizza-themed logo badge concept for Rapizz branding.",
    src: "assets/designs/Pizzeria Logo.png",
    alt: "Rapizz pizzeria logo",
    projectLabel: "Rapizz",
    kind: "Logo",
    year: "2023",
  },
  {
    slug: "highest-social-contributors-on-bnbchain-circle-layout",
    title: "Highest Social Contributors on BNBChain (Circle Layout)",
    summary: "Circular layout variant of the BNBChain social contributors visual.",
    src: "assets/designs/Social Contributors Circle.png",
    alt: "Highest social contributors on BNBChain circle layout",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "top-bnbchain-projects-by-highest-sentiment-on-telegram",
    title: "Top BNBChain Projects by Highest Sentiment on Telegram",
    summary: "LiveCoinWatch sentiment chart focused on Telegram momentum.",
    src: "assets/designs/TOP 10 - Example 2.png",
    alt: "Top BNBChain projects by highest sentiment on Telegram",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2024",
  },
  {
    slug: "top-projects-on-coinmarketcap-may-2023",
    title: "Top Projects on CoinMarketCap (May 2023)",
    summary: "Legacy CoinMarketCap snapshot featuring trending and volume sections.",
    src: "assets/designs/Top CMC.png",
    alt: "Top projects on CoinMarketCap May 2023",
    projectLabel: "Coinvote",
    kind: "Insight ranking",
    year: "2023",
  },
  {
    slug: "most-active-communities",
    title: "Most Active Communities",
    summary: "Community activity highlight card used in Coinvote Insights content.",
    src: "assets/designs/Trending Coins.png",
    alt: "Most active communities visual card",
    projectLabel: "Coinvote",
    kind: "Insight card",
    year: "2024",
  },
];

const DESIGN_MAP = Object.fromEntries(DESIGN_META.map((item) => [item.slug, item]));

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "") || "/";
}

function absoluteUrl(path) {
  return new URL(path, SITE_ORIGIN).toString();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderLinkList(items) {
  return items
    .map((item) => `<li><a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`)
    .join("");
}

function breadcrumbGraph(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function renderOverviewSnapshot(path, meta) {
  const sectionLinks = `
    <section class="space-section" aria-labelledby="sections-title">
      <p class="eyebrow" id="sections-title">Sections</p>
      <ul class="bullet-list">${renderLinkList(SECTION_LINKS)}</ul>
    </section>
  `;
  const projectLinks = `
    <section class="space-section" aria-labelledby="projects-title">
      <p class="eyebrow" id="projects-title">Featured projects</p>
      <ul class="bullet-list">${renderLinkList(FEATURED_PROJECT_LINKS)}</ul>
    </section>
  `;

  return `
    <article class="space">
      <section class="hero">
        <div class="hero__main">
          <div class="hero__eyebrow hero__eyebrow--hello"><span>software engineer · builder</span></div>
          <h1 class="hero__lead">${escapeHtml(meta.heading)}</h1>
          <p class="hero__sub">${escapeHtml(meta.intro)}</p>
          ${meta.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
      </section>
      <section class="space-body">
        ${sectionLinks}
        ${path === "/designs"
          ? `
            <section class="space-section" aria-labelledby="design-links-title">
              <p class="eyebrow" id="design-links-title">Selected design pages</p>
              <ul class="bullet-list">
                ${DESIGN_META.slice(0, 8)
                  .map(
                    (item) =>
                      `<li><a href="/designs/${escapeHtml(item.slug)}">${escapeHtml(item.title)}</a> — ${escapeHtml(item.summary)}</li>`,
                  )
                  .join("")}
              </ul>
            </section>
          `
          : projectLinks}
      </section>
    </article>
  `;
}

function renderProjectSnapshot(slug, meta) {
  const canonical = `/projects/${slug}`;
  return `
    <article class="project-page">
      <header class="project-head">
        <div class="project-head__title">
          <div>
            <p class="eyebrow">Project</p>
            <h1>${escapeHtml(meta.name)}</h1>
          </div>
        </div>
      </header>
      <p class="project-summary">${escapeHtml(meta.description)}</p>
      <div class="project-layout">
        <section class="project-stage">
          <img class="project-media__image" src="${escapeHtml(meta.image)}" alt="${escapeHtml(meta.name)} preview" loading="eager" />
        </section>
        <aside class="project-aside">
          <section class="project-block">
            <p class="eyebrow">Highlights</p>
            <ul class="bullet-list">
              ${(meta.highlights || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>
          <section class="project-block">
            <p class="eyebrow">Navigate</p>
            <ul class="bullet-list">
              <li><a href="/">Home</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/designs">Designs</a></li>
              <li><a href="${escapeHtml(canonical)}">${escapeHtml(meta.name)}</a></li>
            </ul>
          </section>
        </aside>
      </div>
    </article>
  `;
}

function renderDesignSnapshot(item) {
  const projectHref = DESIGN_PROJECT_LINKS[item.projectLabel] || "/";
  const media =
    item.type === "video"
      ? `<video class="project-media__video" src="/${escapeHtml(item.src)}" controls playsinline preload="metadata"></video>`
      : `<img class="project-media__image" src="/${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="eager" />`;

  return `
    <article class="project-page">
      <header class="project-head">
        <div class="project-head__title">
          <div>
            <p class="eyebrow">${escapeHtml(item.projectLabel)} · ${escapeHtml(item.year)} · ${escapeHtml(item.kind)}</p>
            <h1>${escapeHtml(item.title)}</h1>
          </div>
        </div>
      </header>
      <p class="project-summary">${escapeHtml(item.summary)}</p>
      <div class="project-layout">
        <section class="project-stage">${media}</section>
        <aside class="project-aside">
          <section class="project-block">
            <p class="eyebrow">Navigate</p>
            <ul class="bullet-list">
              <li><a href="/designs">All designs</a></li>
              <li><a href="/">Home</a></li>
              <li><a href="${escapeHtml(projectHref)}">${escapeHtml(item.projectLabel)}</a></li>
            </ul>
          </section>
        </aside>
      </div>
    </article>
  `;
}

function getRouteInfo(url) {
  const path = normalizePath(url.pathname);

  if (OVERVIEW_META[path]) {
    return {
      title: OVERVIEW_META[path].title,
      description: OVERVIEW_META[path].description,
      image: absoluteUrl(DEFAULT_OG_IMAGE),
      url: absoluteUrl(path),
      canonical: absoluteUrl(path),
      type: path === "/" ? "website" : "profile",
      snapshot: renderOverviewSnapshot(path, OVERVIEW_META[path]),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          name: OVERVIEW_META[path].heading,
          url: absoluteUrl(path),
          description: OVERVIEW_META[path].description,
          mainEntity: {
            "@type": "Person",
            name: "Léo Mesbah",
            url: SITE_ORIGIN,
          },
        },
        breadcrumbGraph(
          path === "/"
            ? [{ name: "Home", path: "/" }]
            : [
                { name: "Home", path: "/" },
                { name: OVERVIEW_META[path].heading, path },
              ],
        ),
      ],
    };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    const slug = decodeURIComponent(projectMatch[1]);
    const meta = PROJECT_META[slug];
    if (!meta) return null;
    return {
      title: meta.title,
      description: meta.description,
      image: absoluteUrl(meta.image || DEFAULT_OG_IMAGE),
      url: absoluteUrl(path),
      canonical: absoluteUrl(path),
      type: "article",
      snapshot: renderProjectSnapshot(slug, meta),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": meta.category || "CreativeWork",
          name: meta.name,
          headline: meta.name,
          description: meta.description,
          image: absoluteUrl(meta.image || DEFAULT_OG_IMAGE),
          url: absoluteUrl(path),
          author: {
            "@type": "Person",
            name: "Léo Mesbah",
            url: SITE_ORIGIN,
          },
        },
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: meta.name, path },
        ]),
      ],
    };
  }

  const designMatch = path.match(/^\/designs\/([^/]+)$/);
  if (designMatch) {
    const slug = decodeURIComponent(designMatch[1]);
    const item = DESIGN_MAP[slug];
    if (!item) return null;
    return {
      title: `${item.title} — Design — Léo Mesbah`,
      description: item.summary,
      image: absoluteUrl(item.type === "video" ? DEFAULT_OG_IMAGE : `/${item.src}`),
      url: absoluteUrl(path),
      canonical: absoluteUrl(path),
      type: "article",
      snapshot: renderDesignSnapshot(item),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: item.title,
          description: item.summary,
          image: absoluteUrl(item.type === "video" ? DEFAULT_OG_IMAGE : `/${item.src}`),
          url: absoluteUrl(path),
          creator: {
            "@type": "Person",
            name: "Léo Mesbah",
            url: SITE_ORIGIN,
          },
        },
        breadcrumbGraph([
          { name: "Home", path: "/" },
          { name: "Designs", path: "/designs" },
          { name: item.title, path },
        ]),
      ],
    };
  }

  return null;
}

function findLegacyRedirect(path) {
  for (const [slug, meta] of Object.entries(PROJECT_META)) {
    if ((meta.legacyPaths || []).includes(path)) {
      return absoluteUrl(`/projects/${slug}`);
    }
  }
  return null;
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
  constructor(value, html = false) {
    this.value = value;
    this.html = html;
  }

  element(element) {
    element.setInnerContent(this.value, { html: this.html });
  }
}

function rewriteHtml(response, route) {
  const jsonLd = JSON.stringify(route.jsonLd.length === 1 ? route.jsonLd[0] : route.jsonLd);
  return new HTMLRewriter()
    .on("title", new ContentRewriter(route.title))
    .on('meta[name="description"]', new AttrRewriter("content", route.description))
    .on('meta[name="robots"]', new AttrRewriter("content", INDEX_ROBOTS))
    .on('link[rel="canonical"]', new AttrRewriter("href", route.canonical))
    .on('meta[property="og:type"]', new AttrRewriter("content", route.type))
    .on('meta[property="og:title"]', new AttrRewriter("content", route.title))
    .on('meta[property="og:description"]', new AttrRewriter("content", route.description))
    .on('meta[property="og:url"]', new AttrRewriter("content", route.url))
    .on('meta[property="og:image"]', new AttrRewriter("content", route.image))
    .on('meta[name="twitter:title"]', new AttrRewriter("content", route.title))
    .on('meta[name="twitter:description"]', new AttrRewriter("content", route.description))
    .on('meta[name="twitter:image"]', new AttrRewriter("content", route.image))
    .on("#main-view", new ContentRewriter(route.snapshot, true))
    .on("#route-structured-data", new ContentRewriter(jsonLd))
    .transform(response);
}

function withHeader(response, headerValue) {
  const headers = new Headers(response.headers);
  headers.set("x-robots-tag", headerValue);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = normalizePath(url.pathname);

    const legacyRedirect = findLegacyRedirect(path);
    if (legacyRedirect) {
      const redirectTarget = new URL(legacyRedirect);
      redirectTarget.search = url.search;
      return Response.redirect(redirectTarget.toString(), 301);
    }

    const response = await env.ASSETS.fetch(request);
    const contentType = response.headers.get("content-type") || "";

    if (path.startsWith("/archives/") && contentType.includes("text/html")) {
      return withHeader(response, "noindex, nofollow");
    }

    const route = getRouteInfo(url);
    if (!route || !contentType.includes("text/html")) {
      return response;
    }

    return rewriteHtml(withHeader(response, INDEX_ROBOTS), route);
  },
};
