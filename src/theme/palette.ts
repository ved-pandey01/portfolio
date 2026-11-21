/**
 * THE ONLY PLACE COLOURS ARE DEFINED.
 *
 * "Ink and Champagne". Change a value here and the whole site, the social
 * card (opengraph-image) and the favicon follow. These become CSS variables
 * (see paletteCss below, injected in app/layout.tsx) and Tailwind classes such
 * as bg-surface, text-muted, text-accent and bg-button (see src/app/globals.css).
 * Phones (under 768px) get the brighter overrides in `mobile` and `mobileAlpha`.
 *
 * Use the accent sparingly: italic headline words, outline buttons, links and
 * small labels only. Background effects (glows, dots, grain) are tuned in `alpha`.
 */
export const palette = {
  bg: "#14120F", // page background (warm espresso)
  surface: "#1B1915", // cards
  raised: "#23201B", // raised surfaces: inputs, chips, hover states
  line: "#302C25", // borders and dividers
  text: "#EDE8DF", // body text
  muted: "#948C7F", // secondary text (#8A8276 nudged lighter to pass WCAG AA on raised surfaces)
  heading: "#F5F1EA", // headings
  accent: "#C9B38A", // champagne accent
  accentHover: "#D8C7A3", // champagne on hover
  button: "#EDE8DF", // main button fill
  buttonText: "#14120F", // main button text
  buttonHover: "#F5F1EA", // main button fill on hover
  status: "#22C55E", // the "open to roles" status dot only
  archBoxTop: "#1F1D19", // architecture box gradient, top
  archBoxBottom: "#171512", // architecture box gradient, bottom
  connectorDot: "#D8C7A3", // always-visible dots at each end of a connector
  pulse: "#F5E9CF", // bright pulse travelling along the connectors
};

// Translucent tints derived from the colours above (0 to 1).
const alpha = {
  accentSoft: 0.06, // pill and badge fills
  selection: 0.3, // text selection highlight
  heroGlow: 0.1, // large hero glow, top right
  heroGlowFaint: 0.05, // smaller hero glow, bottom left
  dots: 0.13, // champagne dot pattern
  hairline: 0.55, // thin line along the top of the hero (at its brightest point)
  cardGlow: 0.22, // stat card border glow on hover
  grain: 0.03, // film-grain noise over the whole page
  connector: 0.35, // architecture diagram connector lines
  connectorGlow: 0.55, // glow around connector end dots and the pulse
  rim: 0.07, // rim light along the top edge of raised cards (from `heading`)
  depthShadow: 0.6, // soft drop shadow under raised cards (black)
  sectionGlow: 0.07, // soft glow in each section, alternating sides
  risingGlow: 0.08, // warm glow rising from the bottom of Contact
  growthLine: 0.045, // "growth" curves behind Work
  contourLine: 0.05, // upward contour lines behind the stats
  divider: 0.35, // fading hairline between sections (at its brightest point)
  frameBorder: 0.5, // champagne border around case study screenshots
};

// Phones only (under 768px): brighter text and borders so nothing looks faded on small screens.
// All pass WCAG AA (muted is at least 7:1 on every surface).
export const mobile: Partial<typeof palette> = {
  text: "#EDE8DF",
  muted: "#B5AC9E",
  heading: "#FFFFFF",
  accent: "#D8C7A3", // italic headline words and labels
  line: "#3A352D", // card borders
};
const mobileAlpha: Partial<typeof alpha> = {
  sectionGlow: 0.1,
};

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${a})`;
}

function variables(p: typeof palette, a: typeof alpha): Record<string, string> {
  return {
    "--bg": p.bg,
    "--surface": p.surface,
    "--raised": p.raised,
    "--line": p.line,
    "--text": p.text,
    "--muted": p.muted,
    "--heading": p.heading,
    "--accent": p.accent,
    "--accent-hover": p.accentHover,
    "--button": p.button,
    "--button-text": p.buttonText,
    "--button-hover": p.buttonHover,
    "--status": p.status,
    "--accent-soft": rgba(p.accent, a.accentSoft),
    "--selection": rgba(p.accent, a.selection),
    "--hero-glow": rgba(p.accent, a.heroGlow),
    "--hero-glow-faint": rgba(p.accent, a.heroGlowFaint),
    "--dots": rgba(p.accent, a.dots),
    "--hairline": rgba(p.accent, a.hairline),
    "--card-glow": rgba(p.accent, a.cardGlow),
    "--grain-opacity": String(a.grain),
    "--connector": rgba(p.accent, a.connector),
    "--connector-glow": rgba(p.accent, a.connectorGlow),
    "--connector-dot": p.connectorDot,
    "--pulse": p.pulse,
    "--arch-box-top": p.archBoxTop,
    "--arch-box-bottom": p.archBoxBottom,
    "--rim": rgba(p.heading, a.rim),
    "--depth-shadow": rgba("#000000", a.depthShadow),
    "--section-glow": rgba(p.accent, a.sectionGlow),
    "--rising-glow": rgba(p.accent, a.risingGlow),
    "--growth-line": rgba(p.accent, a.growthLine),
    "--contour-line": rgba(p.accent, a.contourLine),
    "--divider": rgba(p.accent, a.divider),
    "--frame-border": rgba(p.accent, a.frameBorder),
  };
}

function block(vars: Record<string, string>) {
  return Object.entries(vars)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");
}

const base = variables(palette, alpha);
const phone = variables({ ...palette, ...mobile }, { ...alpha, ...mobileAlpha });
const phoneChanges = Object.fromEntries(Object.entries(phone).filter(([k, v]) => base[k] !== v));

// Injected as a <style> in app/layout.tsx (a stylesheet, so the phone media query can override it).
export const paletteCss = `:root{${block(base)}}@media (max-width: 767px){:root{${block(phoneChanges)}}}`;
