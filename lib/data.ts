/* ------------------------------------------------------------------ */
/*  Single source of truth for portfolio content.                     */
/*  Copy was lifted from the original site and lightly cleaned        */
/*  (typos fixed, mislabelled tags corrected).                        */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Oveey",
  fullName: "Oveey",
  role: "Product & UI/UX Designer",
  tagline:
    "I craft visual and product design solutions — from intuitive interfaces to motion graphics that bring ideas to life.",
  status: "Open to work",
  location: "Available worldwide · Remote",
  // NOTE: replace with the real inbox — this is a placeholder.
  email: "hello@oveey.design",
  whatsapp: "2347080262206",
  resumeUrl:
    "https://docs.google.com/document/d/1oP8klpnKBKFJhy6GWPQ56jIgOBEMomXeyElAEEocLEc/edit?usp=sharing",
  about: [
    "My journey in product design began with a love for creativity and problem-solving. I honed my skills crafting user-centric interfaces and delightful interactions, playing a pivotal role in ideation, wireframing, prototyping and user research — always keeping a keen eye on delivering a great experience.",
    "In parallel, I immersed myself in front-end development. With a solid grasp of HTML, CSS and JavaScript, I translate design concepts into pixel-perfect, responsive interfaces — bridging the gap between design and engineering so visions ship exactly as intended.",
  ],
  stats: [
    { value: "5+", label: "Years designing" },
    { value: "20+", label: "Products shipped" },
    { value: "7", label: "Industries" },
  ],
} as const;

export const socials = [
  { label: "Email", href: "mailto:hello@oveey.design", handle: "hello@oveey.design" },
  { label: "WhatsApp", href: "https://wa.me/2347080262206", handle: "+234 708 026 2206" },
  { label: "Résumé", href: profile.resumeUrl, handle: "View résumé" },
] as const;

/* Horizontal shots strip — already on Cloudinary CDN. */
export const shots: string[] = [
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1751278381/WhatsApp_Image_2025-06-30_at_03.08.04_1_tbcbz9.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735605276/WhatsApp_Image_2024-12-31_at_01.04.28_4_an8x7j.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1751278381/WhatsApp_Image_2025-06-30_at_03.08.03_1_k6oogj.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1751278381/WhatsApp_Image_2025-06-30_at_03.08.03_omdklb.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735605275/WhatsApp_Image_2024-12-31_at_01.04.27_pry7hb.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735605275/WhatsApp_Image_2024-12-31_at_01.04.28_3_uxpa8g.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735605276/WhatsApp_Image_2024-12-31_at_01.04.29_ssmugj.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735611711/GXsXzx4W4AAT7MZ_sy2dns.jpg",
  "https://res.cloudinary.com/dw3vqhvte/image/upload/v1735611709/GaZskouWUAAgoQo_xunaef.jpg",
];

export const technicalSkills = [
  { name: "Figma", icon: "/images/skills/figma-logo.svg" },
  { name: "Adobe XD", icon: "/images/skills/adobexd.svg" },
  { name: "Adobe Suite", icon: "/images/skills/adobe.svg" },
  { name: "Sketch", icon: "/images/skills/sketch.svg" },
  { name: "Miro", icon: "/images/skills/miro.svg" },
  { name: "React", icon: "/images/skills/vitejs.svg" },
  { name: "GitHub", icon: "/images/skills/github.svg" },
  { name: "VS Code", icon: "/images/skills/vscode.svg" },
  { name: "Jira", icon: "/images/skills/jira.svg" },
  { name: "Notion", icon: "/images/skills/notion.svg" },
  { name: "Slack", icon: "/images/skills/slack.svg" },
  { name: "OpenAI", icon: "/images/skills/openai.svg" },
];

export const designSkills = [
  { name: "Product Ideation", level: 98 },
  { name: "Mobile Design", level: 96 },
  { name: "Visual Design", level: 97 },
  { name: "UX Auditing", level: 92 },
  { name: "Interactive Prototyping", level: 95 },
  { name: "Design Systems", level: 94 },
];

export const services = [
  {
    title: "Product Design",
    body: "End-to-end UX/UI for web & mobile apps — from research and wireframes to polished, shippable interfaces.",
  },
  {
    title: "Design Systems",
    body: "Reusable, developer-ready component libraries that keep products consistent and fast to build.",
  },
  {
    title: "Motion & Visual",
    body: "Micro-interactions, motion graphics and brand visuals that make products feel alive.",
  },
  {
    title: "Front-end Handoff",
    body: "I speak code — HTML, CSS, JS & React — so designs translate into pixel-perfect builds.",
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumb: string;
  liveUrl: string | null;
  liveLabel?: string;
  hasCaseStudy: boolean;
  wip?: boolean;
  accent?: string;
  // case-study fields
  role?: string;
  timeline?: string;
  platform?: string;
  overview?: string;
  process?: string;
  features?: string[];
  results?: string;
  video?: string;
  gallery?: { src: string; caption: string }[];
};

const gallery = (slug: string, files: [string, string][]) =>
  files.map(([file, caption]) => ({
    src: `/images/gallery/${slug}/${file}.webp`,
    caption,
  }));

export const projects: Project[] = [
  {
    slug: "gokardinal",
    title: "Gokardinal",
    subtitle: "Business travel platform reimagining how organisations manage corporate travel.",
    category: "Business Travel · B2B",
    year: "2020 — 2025",
    thumb: "/images/projects/gokardinal.webp",
    liveUrl: "https://gokardinal.com/",
    liveLabel: "gokardinal.com",
    hasCaseStudy: true,
    accent: "#5b8def",
    role: "Product Designer",
    timeline: "Website 2020 · Reporting dashboard, Apr 2025",
    platform: "B2B Web App",
    overview:
      "A business travel platform re-imagining how organisations manage corporate travel — seamlessly booking flights, cars, hotels and experiences to connect and collaborate with remote, distributed employees. I designed the live website back in 2020 when the company was still a startup; today it has grown into a fully established business.",
    process:
      "In April 2025 Gokardinal reached out again to help with the reporting page of their dashboard. My task was to create a clear, user-friendly interface where admins could view trip data, customer bookings, revenue breakdowns and performance insights. I organised the information into charts and tables, ensuring reports were easy to filter by date, destination and travel package. The design balanced clarity and usability — helping the company make faster, data-driven decisions.",
    features: [
      "Book flights, cars, hotels & experiences",
      "Reporting dashboard with trip data",
      "Revenue breakdowns & performance insights",
      "Filter by date, destination & package",
      "Charts and structured data tables",
    ],
    results:
      "A reporting experience that balanced clarity and usability, helping the company make faster, data-driven decisions.",
    video: "/media/booking-summary.mp4",
    gallery: gallery("gokardinal", [
      ["reporting-overview", "Reporting dashboard overview"],
      ["reporting-charts", "Revenue & performance charts"],
    ]),
  },
  {
    slug: "billport",
    title: "Billport",
    subtitle: "A merchant platform that helps businesses manage finances with ease.",
    category: "Fintech · B2B",
    year: "2025",
    thumb: "/images/projects/billport.webp",
    liveUrl: "https://merchant.billport.co",
    liveLabel: "merchant.billport.co",
    hasCaseStudy: true,
    accent: "#4f8cff",
    role: "Product Designer",
    timeline: "July 2025",
    platform: "Fintech Web App · mobile-responsive",
    overview:
      "Billport is a business platform that helps merchants manage finances with ease. I designed an intuitive dashboard for tracking wallets, viewing transactions, handling invoices and managing beneficiaries — with payment reminders, KYC verification, notifications and security controls throughout.",
    process:
      "I was approached to design a merchant dashboard and ensure it was fully mobile-responsive. I started with a verification flow defining what users see during registration and onboarding, granting access to the main dashboard only once verification is approved. The wallet became the primary home element — letting users view balance, fund the wallet, send money, track upcoming payments, view service providers and monitor recent transactions. From there I designed the Invoice module (view & pay invoices), the Transactions module, and finally the Settings module — rounding out the full merchant experience.",
    features: [
      "KYC verification & onboarding flow",
      "Wallet: balance, funding & transfers",
      "Invoice creation & payment",
      "Transaction tracking & details",
      "Beneficiary management",
      "Notifications & security controls",
    ],
    results:
      "A user-friendly, mobile-optimised dashboard covering the full merchant journey from onboarding to settings.",
    gallery: gallery("billport", [
      ["get-started", "Get started"],
      ["create-account", "Create account"],
      ["merchant-sign-up-billport", "Merchant sign up"],
      ["kyc", "KYC verification"],
      ["home", "Wallet home"],
      ["send-money", "Send money"],
      ["invoice", "Invoices"],
      ["transaction-list", "Transactions"],
      ["transactions-details", "Transaction details"],
      ["success", "Success state"],
    ]),
  },
  {
    slug: "tripperway",
    title: "Tripperzway",
    subtitle: "A travel agency delivering swift, memorable experiences to travellers worldwide.",
    category: "Travel · B2C",
    year: "2024",
    thumb: "/images/projects/tripperway.webp",
    liveUrl: "https://tripperzway.ng/",
    liveLabel: "tripperzway.ng",
    hasCaseStudy: false,
    accent: "#22c1a6",
  },
  {
    slug: "eff",
    title: "EFF",
    subtitle: "A DeFi platform providing liquidity solutions to green-energy companies.",
    category: "DeFi · Green Energy",
    year: "2024",
    thumb: "/images/projects/eff.webp",
    liveUrl: "https://eff.groverseenergy.com/",
    liveLabel: "eff.groverseenergy.com",
    hasCaseStudy: true,
    accent: "#39d98a",
    role: "Product Designer",
    timeline: "2024",
    platform: "Decentralised Finance Web App",
    overview:
      "EFF is a decentralised finance (DeFi) platform dedicated to providing liquidity solutions to green-energy companies. By sourcing capital from institutional and accredited investors, EFF offers short-term financing so payment providers have adequate funding to facilitate green-energy projects for individuals and businesses — particularly in Africa and other emerging markets.",
    process:
      "The product centres on making complex DeFi lending legible: a clear dashboard overview, wallet management, lender administration and a streamlined credit-purchase flow — so both individual and institutional participants can move capital with confidence.",
    features: [
      "Dashboard overview",
      "Wallet overview",
      "Lender management",
      "Credit purchase flow",
      "Borrow-as-an-individual form",
    ],
    gallery: gallery("eff", [
      ["dashbord-overview", "Dashboard overview"],
      ["wallet-overview", "Wallet overview"],
      ["lender-managment", "Lender management"],
      ["credit-purchase", "Credit purchase"],
      ["credit-purchase-1", "Credit purchase — detail"],
      ["borrow-as-an-individual-form", "Borrow as an individual"],
    ]),
  },
  {
    slug: "sportsbants",
    title: "SportsBants",
    subtitle: "A peer-to-peer betting platform where fans counter each other's bets on live matches.",
    category: "Betting · B2C",
    year: "2024",
    thumb: "/images/projects/sportsbants.webp",
    liveUrl: "https://sportsbant.com/",
    liveLabel: "sportsbant.com",
    hasCaseStudy: true,
    accent: "#ff8a3d",
    role: "Product Designer",
    timeline: "2024",
    platform: "Betting Web App",
    overview:
      "A peer-to-peer betting platform where users place bets on live matches from the top five leagues. Each bet needs an opponent to counter it with the same stake — bet on Chelsea to win, someone counters with Chelsea to lose, winner takes the entire pot. Fund your wallet, place bets, get countered and win. A built-in chat lets users negotiate and banter.",
    process:
      "In 2024, SportsBants reached out to design their betting platform. They needed a user-friendly, engaging interface that would attract users and keep them coming back. I worked closely with their team to understand their vision and goals. After several iterations and feedback sessions, we finalised a design that met their needs and exceeded their expectations. I also designed a real-time chat feature — a crucial part of the platform's success — letting users negotiate and discuss bets seamlessly through a simple, intuitive interface.",
    features: [
      "Peer-to-peer counter-betting",
      "Live matches, top five leagues",
      "Wallet funding & payouts",
      "Real-time chat for banter & negotiation",
      "Bet history & win details",
    ],
    results:
      "A design that met the client's needs and exceeded their expectations, anchored by a standout real-time chat experience.",
    gallery: gallery("sportsbants", [
      ["120shots-so", "Landing"],
      ["home-2", "Home feed"],
      ["search", "Search matches"],
      ["bants-details", "Bet details"],
      ["bants-history", "Bet history"],
      ["chats", "Real-time chat"],
      ["win-details", "Win details"],
      ["success-screen", "Success state"],
    ]),
  },
  {
    slug: "castle",
    title: "Castle Hub",
    subtitle: "A crypto gaming platform of featured games, wagers and competitive tournaments.",
    category: "Crypto Gaming",
    year: "2024",
    thumb: "/images/projects/castle.webp",
    liveUrl: null,
    hasCaseStudy: true,
    accent: "#a78bfa",
    role: "Product Designer",
    timeline: "2024",
    platform: "Gaming Web App · with Admin dashboard",
    overview:
      "Experience a curated selection of featured games, thrilling wagers and competitive tournaments. A dynamic landing page invites users to engage through clear calls-to-action, while registration unlocks the full range of platform features. With highlighted games, promotions and tournaments, Castle Hub delivers personalised notifications to enhance the gaming journey — backed by a full admin dashboard.",
    process:
      "We started fast. Wireframes got everyone on the same page about the flow and key features — no endless debates, no overthinking, just a quick way to check we were moving in the right direction. Once that felt good, I focused on crafting the best UI possible: clean design, clear charts, friendly details. I kept the client in the loop with frequent updates — Loom videos and quick text recaps. Along the way I built a simple design system of reusable elements to keep everything consistent and ready for development.",
    features: [
      "Featured games, wagers & tournaments",
      "Dynamic landing with clear CTAs",
      "Personalised notifications",
      "Head-to-head & elimination modes",
      "Shoutbox community feature",
      "Full admin dashboard",
      "Reusable design system",
    ],
    gallery: gallery("castle", [
      ["login", "Login"],
      ["account-setup", "Account setup"],
      ["games", "Games"],
      ["h2h-overview", "Head-to-head overview"],
      ["elimination", "Elimination"],
      ["upload-game", "Upload game"],
      ["shoutbox", "Shoutbox"],
      ["notification", "Notifications"],
      ["admin-dashboard", "Admin dashboard"],
      ["admin-h2h", "Admin — head-to-head"],
    ]),
  },
  {
    slug: "heam",
    title: "Heam",
    subtitle: "A hospital-management admin dashboard centralising healthcare operations.",
    category: "Healthcare · B2C",
    year: "2024",
    thumb: "/images/projects/heam.webp",
    liveUrl: null,
    hasCaseStudy: true,
    wip: true,
    accent: "#38bdf8",
    role: "Product Designer",
    timeline: "2024 · in progress",
    platform: "Healthcare Web App",
    overview:
      "A comprehensive hospital-management admin dashboard designed to give administrators full visibility and control over hospital operations — managing patients, doctors, appointments, subscriptions, roles & permissions, test results, announcements and more. It provides real-time analytics on hospital activity, specialty performance and patient care, while enabling secure access control and communication between staff and patients. The goal: simplify workflows, improve efficiency and centralise operations into one intuitive platform.",
    process:
      "This case study is currently in progress — full screens and process notes are on the way.",
    features: [
      "Patient & doctor management",
      "Appointments & subscriptions",
      "Roles & permissions",
      "Test results & announcements",
      "Real-time hospital analytics",
      "Secure access control",
    ],
    gallery: [],
  },
];

export const projectMap = Object.fromEntries(projects.map((p) => [p.slug, p]));

export function getProject(slug: string): Project | undefined {
  return projectMap[slug];
}
