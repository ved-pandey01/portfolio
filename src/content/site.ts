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
  // Tagline: tab title and social image.
  positioning: "The builder behind the pipeline.",
  // Mono line under the name on /recruiters.
  subline: "Business Development \u00b7 AI Automation \u00b7 Bedford, UK",
  // Serif italic tagline under the name in the home hero.
  tagline: "Business thinking, builder\u2019s hands.",
  // Key line: hero intro, /recruiters subtitle, and meta/social descriptions.
  keyLine: "I build AI tools that help businesses grow.",
  status: "Open to SDR/BDR and GTM roles in the UK",
  heroStatus: "Open to SDR/BDR and GTM roles \u00b7 Bedford, UK", // shorter status line in the home hero

  email: "vedpandey0108@gmail.com",
  // Subject pre-filled on every email link.
  emailSubject: "Hello Ved, saw your portfolio",
  linkedin: "https://www.linkedin.com/in/vedprakashpandey01",
  github: "https://github.com/ved-pandey01",
  bookingUrl: "https://cal.com/vedpandey/15min", // "Book a call" (opens in a new tab)
  photo: { src: "/images/ved-headshot.jpg", width: 896, height: 1200, alt: "Ved Prakash Pandey" },

  // CV file: public/cv/Ved-Prakash-Pandey-CV.pdf (replace it to update; keep the file name).
  cv: "/cv/Ved-Prakash-Pandey-CV.pdf",
};

// Every email link on the site: opens a new draft with the subject filled in.
export const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(profile.emailSubject)}`;

// Live domain (used for SEO, sitemap and social cards). Update if you add a custom domain.
export const siteUrl = "https://vedpandey.vercel.app";

export const seo = {
  title: "Ved Prakash Pandey | The builder behind the pipeline",
  // Google search description.
  description: "I build AI tools that help businesses grow.",
  // Social-sharing (Open Graph and X) description for the home page.
  shareDescription: "I build AI tools that help businesses grow.",
  recruitersTitle: "Recruiter summary | Ved Prakash Pandey",
  recruitersDescription: "I build AI tools that help businesses grow.",
};

// ---------------------------------------------------------------------------
// Proof stats. Numbers count up on scroll. Never add a number that is not true.
// ---------------------------------------------------------------------------
// `caption` is the short line on the home page cards; `recruiterLine` is the full line on /recruiters.
export type Stat =
  | { kind: "number"; from?: number; to: number; prefix?: string; suffix?: string; caption: string; recruiterLine: string }
  | { kind: "text"; value: string; caption: string; recruiterLine: string };

// Small label shown above the four cards.
export const statsLabel = "Business Development";

export const stats: Stat[] = [
  { kind: "number", from: 72, to: 89, prefix: "72% \u2192 ", suffix: "%", caption: "Client satisfaction", recruiterLine: "Client satisfaction: 89% (up from 72%)" },
  { kind: "number", to: 200, suffix: "%", caption: "Account engagement", recruiterLine: "Increase in engagement: 200%" },
  { kind: "number", to: 6, suffix: " months", caption: "To promotion", recruiterLine: "Promoted within: 6 months" },
  { kind: "text", value: "Roche", caption: "Partnership closed", recruiterLine: "Roche Diabetic Care partnership" },
];

// ---------------------------------------------------------------------------
// Featured work
// ---------------------------------------------------------------------------
export type DiagramStep = { title: string; items: string[] };

export type CaseStudy = {
  id: string;
  name: string;
  tagline: string;
  // Thin row of key facts under the title. Facts from the README and code only.
  facts: string[];
  stack: string[];
  problem: string;
  built: string;
  howItWorks: string;
  diagram: DiagramStep[];
  // Planned improvements, shown as dashed chips under the diagram.
  nextUp: string[];
  result: string[];
  links: Link[];
  // Path in /public, or null to show a "coming soon" frame.
  screenshot: { src: string; alt: string; width: number; height: number } | null;
  // Loom share URL (https://www.loom.com/share/...). While null, the Product details panel shows instead.
  loom: string | null;
  // Product details panel: a feature list with icons, or a spec sheet with mono labels.
  details:
    | { kind: "features"; title: string; items: { icon: string; label: string }[] }
    | { kind: "spec"; title: string; rows: { label: string; value: string }[] };
};

// The live WhyNow app. Research opens it with ?company=<name> (pre-filled, not searched);
// ?sample=paddle opens the saved Paddle sample report.
export const whynowUrl = "https://whynow.streamlit.app";

export const caseStudies: CaseStudy[] = [
  {
    id: "whynow",
    name: "WhyNow",
    tagline: "AI account research agent. Know the fit. Know the moment.",
    facts: ["487 tests", "15/15 companies matched", "PDF + CSV export", "3 persona emails", "every fact sourced"],
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
    nextUp: ["Public live demo", "Markets beyond the UK", "Email capture for extra searches"],
    result: [
      "487 automated tests, run without API keys.",
      "Sourced account brief in about 45 seconds; 15 of 15 companies matched with 0 unsourced claims in a live test on 18 UK companies.",
      "PDF report, CRM-ready CSV and ranked research for lists of up to 10 companies.",
    ],
    links: [
      { label: "Live demo", href: whynowUrl },
      { label: "GitHub", href: "https://github.com/ved-pandey01/whynow" },
    ],
    screenshot: {
      src: "/work/whynow-landing.png",
      alt: "WhyNow landing page with a company search bar and example companies",
      width: 1280,
      height: 940,
    },
    loom: null, // PLACEHOLDER: Loom walkthrough URL.
    details: {
      kind: "features",
      title: "Product details",
      items: [
        { icon: "building", label: "Companies House verification" },
        { icon: "radar", label: "Buying signals from the last 6 months only" },
        { icon: "gauge", label: "ICP fit score from 1 to 10" },
        { icon: "mail", label: "Persona emails: Head of Sales, Head of RevOps or Founder / CEO" },
        { icon: "message", label: "LinkedIn note and two-line call opener" },
        { icon: "list", label: "Batch mode: up to 10 companies, ranked by fit" },
        { icon: "file", label: "PDF report and CRM-ready CSV export" },
        { icon: "layers", label: "3 backup AI models, each tried once" },
      ],
    },
  },
  {
    id: "inbound-lead-engine",
    name: "Inbound Lead Engine",
    tagline: "Scores, routes and follows up every inbound lead.",
    facts: ["29-node n8n workflow", "15-lead test batch", "AI score + reasoning", "5 lead statuses", "4 SQL reports"],
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
    nextUp: ["Slack alerts for Hot leads", "Weekly SQL pipeline report", "Loom walkthrough"],
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
    details: {
      kind: "spec",
      title: "Spec sheet",
      rows: [
        { label: "Trigger", value: "Google Sheets, checked every minute" },
        { label: "AI scoring", value: "Gemini returns score (1 to 100), one-sentence reasoning, qualified (true/false)" },
        { label: "Routing", value: "Hot = score 70+ and qualified. Otherwise Cold" },
        { label: "Outreach", value: "Personalised Gmail email. AI-drafted reply when a lead responds" },
        { label: "Follow-up", value: "Waits 2 days, then one nudge if no reply" },
        { label: "HubSpot", value: "lead_score · lead_score_reasoning · score note" },
        { label: "SQLite", value: "leads table · Scored, Contacted, Replied, Nudged, Cold" },
        { label: "Files", value: "workflow.json · schema.sql · reports.sql" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Research my company (teaser)
// ---------------------------------------------------------------------------
export const researchTeaser = {
  eyebrow: "Free research",
  title: "Research my company",
  body: "Type your company and see how I\u2019d prospect it.",
  inputPlaceholder: "yourcompany.co.uk",
  button: "Research",
  emptyError: "Type a company name first.",
  note: "Runs live on WhyNow. 2 free searches a day.",
  tryLabel: "Try:",
  tryCompany: "Paddle", // the chip opens the Paddle sample report, like the sample link
  sampleLabel: "See a sample report (Paddle)",
  sampleUrl: `${whynowUrl}/?sample=paddle`,
  // Small secondary link: a report by email instead (mailto with these).
  emailPrompt: "Prefer a report by email?",
  emailLink: "Request one",
  emailSubject: "Research request: [company]",
  emailBody: "Hi Ved,\n\nCould you research [company] for me?\n\nThanks,",
};

// ---------------------------------------------------------------------------
// Now: what I'm building this month. Edit freely.
// ---------------------------------------------------------------------------
export const now = {
  // Short label for the desktop hero pill ("Now building · ..."). Keep in step with the first item.
  heroLabel: "WhyNow live",
  updated: "November 2026", // Update when you edit the list.
  items: [
    { title: "Taking WhyNow live", detail: "A free AI research desk for any UK company. Next: markets beyond the UK." },
    { title: "Pipeline reporting with SQL", detail: "Turning raw lead data into weekly pipeline insights." },
    { title: "Sharpening my GTM stack", detail: "Clay, n8n, HubSpot and SQL, hands-on every week." },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  title: "Commercial instinct, technical craft.",
  body: "Business development taught me where time goes. Now I build the tools that win it back.",
};

export type TimelineItem = { period?: string; title: string; org?: string; place?: string; detail?: string; current?: boolean };

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
    title: "Building AI and automation tools",
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
  { name: "SQL" },
  { name: "Claude Code", icon: "siClaude" },
  { name: "Gemini", icon: "siGooglegemini" },
];

// ---------------------------------------------------------------------------
// Recruiter page (/recruiters)
// ---------------------------------------------------------------------------
export const recruiter = {
  title: "The 30-second version",
  summary: [
    "Commercial instinct meets technical craft. I design automations that research, qualify and follow up at scale.",
    "Built an AI account research agent (WhyNow) and an automated inbound lead engine.",
    "Proven in business development: client satisfaction from 72% to 89%, engagement up 200%, promoted within six months, and a Roche Diabetic Care partnership.",
    "Ready to start in an SDR/BDR or GTM role today.",
  ],
  whyHireTitle: "Why hire me",
  whyHire: [
    { title: "I know the job I\u2019m automating.", body: "Business development taught me what reps actually need." },
    { title: "I build, not just suggest.", body: "WhyNow and the Inbound Lead Engine are real, working tools on GitHub." },
    { title: "I speak business and systems.", body: "I talk pipeline with revenue leaders and workflows, data and CRM with ops." },
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
    { label: "Toolkit", value: "Clay, n8n, HubSpot, Python, SQL, Claude Code, Gemini" },
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
