/**
 * ALL SITE CONTENT LIVES HERE.
 *
 * Edit text, links and numbers in this file only. Components read from it.
 * Search for "PLACEHOLDER" to find everything that still needs a real value.
 *
 * House style: British English, no emojis, no em dashes, short and confident.
 */

export type Link = { label: string; href: string; placeholder?: boolean };

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
export const profile = {
  name: "Ved Prakash Pandey",
  shortName: "Ved",
  location: "Bedford, UK",
  role: "Business Development, moving into GTM Engineering",
  positioning: "The SDR who builds his own tools.",
  // Line under the name in the hero.
  subline: "Business Development \u2192 GTM Engineering \u00b7 Bedford, UK",
  headline: {
    lead: "I don’t just sell.",
    accent: "I build the systems that sell.",
  },
  // Key line: hero intro, /recruiters subtitle and social-sharing description.
  keyLine: "A business developer who builds his own sales systems.",
  status: "Open to SDR/BDR and GTM roles in the UK",

  email: "vedpandey0108@gmail.com",
  // Subject pre-filled on every email link.
  emailSubject: "Hello Ved, saw your portfolio",
  linkedin: "https://www.linkedin.com/in/ved-prakash-pandey-954493202/",
  github: "https://github.com/ved-pandey01",

  // PLACEHOLDER: replace public/cv/Ved-Prakash-Pandey-CV.pdf with your real CV (keep the file name).
  cv: "/cv/Ved-Prakash-Pandey-CV.pdf",
};

// Every email link on the site: opens a new draft with the subject filled in.
export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;

// Live domain (used for SEO, sitemap and social cards). Update if you add a custom domain.
export const siteUrl = "https://portfolio-two-lemon-kp20ftvw2b.vercel.app";

export const seo = {
  title: "Ved Prakash Pandey | The SDR who builds his own tools",
  // Google search description.
  description: "A business developer who builds his own sales systems.",
  // Social-sharing (Open Graph and X) description for the home page.
  shareDescription: "A business developer who builds his own sales systems.",
  recruitersTitle: "Recruiter summary | Ved Prakash Pandey",
  recruitersDescription:
    "A 30-second summary of Ved Prakash Pandey: key facts, CV and contact details.",
};

// ---------------------------------------------------------------------------
// Proof stats. Numbers count up on scroll. Never add a number that is not true.
// ---------------------------------------------------------------------------
export type Stat =
  | { kind: "number"; from?: number; to: number; prefix?: string; suffix?: string; label: string; detail?: string }
  | { kind: "text"; value: string; label: string; detail?: string };

export const stats: Stat[] = [
  { kind: "number", from: 72, to: 89, suffix: "%", label: "Client satisfaction", detail: "Up from 72%" },
  { kind: "number", to: 200, suffix: "%", label: "Increase in engagement" },
  { kind: "number", to: 6, suffix: " months", label: "Promoted within" },
  { kind: "text", value: "Roche", label: "Diabetic Care partnership" },
];

// ---------------------------------------------------------------------------
// Featured work
// ---------------------------------------------------------------------------
export type DiagramStep = { title: string; items: string[] };

export type CaseStudy = {
  id: string;
  name: string;
  tagline: string;
  stack: string[];
  problem: string;
  built: string;
  howItWorks: string;
  diagram: DiagramStep[];
  result: string[];
  links: Link[];
  // Path in /public, or null to show a "coming soon" frame.
  screenshot: { src: string; alt: string; width: number; height: number } | null;
  // Loom share URL (https://www.loom.com/share/...), or null to show a "coming soon" frame.
  loom: string | null;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "whynow",
    name: "WhyNow",
    tagline: "AI account research agent. Know the fit. Know the moment.",
    stack: ["Python", "Streamlit", "Gemini", "Tavily", "Companies House API"],
    problem:
      "SDRs often spend 20 to 30 minutes researching each account before they write a single line.",
    built:
      "Type any UK company and get a sourced snapshot, an ICP fit score from 1 to 10, buying signals, who to contact and an outreach email that opens with a real trigger.",
    howItWorks:
      "Companies House confirms the company and its officers. Tavily reads recent news, hiring and funding. Gemini scores the fit and writes the report, with every fact linked to its source.",
    diagram: [
      { title: "Input", items: ["UK company name"] },
      { title: "Sources", items: ["Companies House API", "Tavily search"] },
      { title: "Reasoning", items: ["Gemini"] },
      { title: "Output", items: ["Fit score", "Signals", "Email"] },
    ],
    result: [
      "Built to cut account research to under a minute.",
      "Exports a printable PDF and a CRM-ready CSV row.",
    ],
    links: [
      // PLACEHOLDER: live demo URL.
      { label: "Live demo", href: "#", placeholder: true },
      // PLACEHOLDER: WhyNow GitHub URL.
      { label: "GitHub", href: "#", placeholder: true },
    ],
    screenshot: {
      src: "/work/whynow-landing.png",
      alt: "WhyNow landing page with a company search bar and example companies",
      width: 1280,
      height: 940,
    },
    loom: null, // PLACEHOLDER: Loom walkthrough URL.
  },
  {
    id: "inbound-lead-engine",
    name: "Inbound Lead Engine",
    tagline: "Scores, routes and follows up every inbound lead.",
    stack: ["n8n", "Clay", "Gemini", "HubSpot", "SQLite"],
    problem:
      "Inbound leads sit in an inbox for hours, reps chase leads that never fitted, and follow-ups get forgotten.",
    built:
      "An n8n workflow that scores every lead on arrival, lets only qualified leads reach outreach, and replies to or nudges every contacted lead.",
    howItWorks:
      "Leads sourced via Clay land in a sheet. Gemini scores each one against ICP rules. Hot leads get a personalised email and a HubSpot contact with the score and reasoning. SQLite keeps the full history for RevOps reporting.",
    diagram: [
      { title: "Intake", items: ["Clay", "Google Sheets"] },
      { title: "Scoring", items: ["Gemini", "Score 70+ and qualified"] },
      { title: "Action", items: ["Gmail outreach", "HubSpot"] },
      { title: "Reporting", items: ["SQLite"] },
    ],
    result: [
      "New leads scored and, if Hot, emailed within minutes.",
      "In a 15-lead test batch, 3 Cold leads were filtered out before any rep time was spent.",
      "Reporting flagged two accounts with 2 Hot leads each, ready to multi-thread.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/ved-pandey01/inbound-lead-engine" }],
    screenshot: {
      src: "/work/inbound-lead-engine-workflow.png",
      alt: "The Inbound Lead Engine workflow in n8n, from intake through scoring, outreach and follow-up",
      width: 2359,
      height: 676,
    },
    loom: null, // PLACEHOLDER: Loom walkthrough URL.
  },
];

// ---------------------------------------------------------------------------
// Research my company (teaser)
// ---------------------------------------------------------------------------
export const researchTeaser = {
  eyebrow: "Coming soon",
  title: "Research my company",
  body: "Type your company and see how I’d prospect it.",
  inputPlaceholder: "yourcompany.co.uk",
  button: "Research",
};

// ---------------------------------------------------------------------------
// Now: what I'm building this month. Edit freely.
// ---------------------------------------------------------------------------
export const now = {
  updated: "November 2026", // Update when you edit the list.
  items: [
    { title: "Shipping WhyNow Stage 1", detail: "Hosting the app and adding a public demo." },
    { title: "This portfolio", detail: "Built in Next.js with Claude Code." },
    { title: "Sharpening my GTM stack", detail: "Hands-on practice with Clay, n8n and HubSpot." },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  title: "From selling to building",
  body: "Business development taught me where sales time goes. Now I build the tools that win it back.",
};

export type TimelineItem = { period?: string; title: string; org: string; place?: string; detail?: string; current?: boolean };

export const timeline: TimelineItem[] = [
  {
    period: "Feb 2023 to Nov 2024",
    title: "Business Development",
    org: "Rose Pharmaco and Omgreek Services",
    place: "India",
  },
  {
    period: "2025 to May 2026",
    title: "MSc International Business",
    org: "Anglia Ruskin University",
    place: "UK",
  },
  {
    period: "2026 to present",
    title: "GTM Engineering",
    org: "Building AI-powered sales systems",
    place: "Bedford, UK",
    current: true,
  },
];

// `icon` must be a simple-icons export name (see https://simpleicons.org), or omit it for a text chip.
export const toolkit: { name: string; icon?: string }[] = [
  { name: "Clay" },
  { name: "n8n", icon: "siN8n" },
  { name: "HubSpot", icon: "siHubspot" },
  { name: "Python", icon: "siPython" },
  { name: "Claude Code", icon: "siClaude" },
  { name: "Gemini", icon: "siGooglegemini" },
];

// ---------------------------------------------------------------------------
// Recruiter page (/recruiters)
// ---------------------------------------------------------------------------
export const recruiter = {
  title: "The 30-second version",
  summary: [
    "I\u2019ve sold, so I know where sales time is lost: research, lead triage and follow-ups.",
    "Now I build the systems that fix it, with AI research agents and automated lead engines.",
    "Proven in business development: client satisfaction from 72% to 89%, engagement up 200%, promoted within six months, and a Roche Diabetic Care partnership.",
    "Ready for SDR/BDR roles today, and growing into GTM Engineering.",
  ],
  whyHireTitle: "Why hire me",
  whyHire: [
    { title: "I know the job I\u2019m automating.", body: "Business development taught me what reps actually need." },
    { title: "I build, not just suggest.", body: "WhyNow and the Inbound Lead Engine are real, working tools. Code for the Lead Engine is on GitHub." },
    { title: "I speak sales and systems.", body: "I talk pipeline with sales leaders and workflows, data and CRM with ops." },
  ],
  capabilitiesTitle: "What I can do for your team",
  capabilities: [
    "Account research",
    "Lead scoring and routing",
    "AI-personalised outreach",
    "HubSpot workflows",
    "n8n and Clay automation",
    "Pipeline reporting",
  ],
  facts: [
    { label: "Location", value: "Bedford, UK" },
    { label: "Looking for", value: "SDR/BDR and GTM roles in the UK" },
    { label: "Education", value: "MSc International Business, Anglia Ruskin" },
    { label: "MSc result", value: "100/100 in Finance module" },
    { label: "Certification", value: "HubSpot Sales Hub Software" },
    { label: "Toolkit", value: "Clay, n8n, HubSpot, Python, Claude Code, Gemini" },
    { label: "Right to work", value: "Graduate visa, full right to work in the UK until November 2028. No sponsorship needed." },
    { label: "Availability", value: "Immediately" },
  ],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------
export const contact = {
  title: "Let’s talk pipeline.",
  body: "Hiring for SDR, BDR or GTM? Get in touch.",
};

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Now", href: "/#now" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
