/**
 * THE ONLY PLACE COLOURS ARE DEFINED.
 *
 * "Ink and Champagne". Change a value here and the whole site, the social
 * card (opengraph-image) and the favicon follow. These become CSS variables
 * on <html> (see cssVariables below) and Tailwind classes such as bg-surface,
 * text-muted, text-accent and bg-button (see src/app/globals.css).
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
  pillBorder: "#34302A", // hero link pills
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
  connector: 0.5, // architecture diagram connector lines
  flowGlow: 0.6, // soft glow around the travelling connector dot
  rim: 0.07, // rim light along the top edge of raised cards (from `heading`)
  depthShadow: 0.6, // soft drop shadow under raised cards (black)
  sectionGlow: 0.07, // soft glow in each section, alternating sides
  risingGlow: 0.08, // warm glow rising from the bottom of Contact
  growthLine: 0.045, // "growth" curves behind Work
  contourLine: 0.05, // upward contour lines behind the stats
  divider: 0.35, // fading hairline between sections (at its brightest point)
};

function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${a})`;
}

export const cssVariables = {
  "--bg": palette.bg,
  "--surface": palette.surface,
  "--raised": palette.raised,
  "--line": palette.line,
  "--text": palette.text,
  "--muted": palette.muted,
  "--heading": palette.heading,
  "--accent": palette.accent,
  "--accent-hover": palette.accentHover,
  "--button": palette.button,
  "--button-text": palette.buttonText,
  "--button-hover": palette.buttonHover,
  "--status": palette.status,
  "--pill-border": palette.pillBorder,
  "--accent-soft": rgba(palette.accent, alpha.accentSoft),
  "--selection": rgba(palette.accent, alpha.selection),
  "--hero-glow": rgba(palette.accent, alpha.heroGlow),
  "--hero-glow-faint": rgba(palette.accent, alpha.heroGlowFaint),
  "--dots": rgba(palette.accent, alpha.dots),
  "--hairline": rgba(palette.accent, alpha.hairline),
  "--card-glow": rgba(palette.accent, alpha.cardGlow),
  "--grain-opacity": String(alpha.grain),
  "--connector": rgba(palette.accentHover, alpha.connector),
  "--flow-glow": rgba(palette.accentHover, alpha.flowGlow),
  "--rim": rgba(palette.heading, alpha.rim),
  "--depth-shadow": rgba("#000000", alpha.depthShadow),
  "--section-glow": rgba(palette.accent, alpha.sectionGlow),
  "--rising-glow": rgba(palette.accent, alpha.risingGlow),
  "--growth-line": rgba(palette.accent, alpha.growthLine),
  "--contour-line": rgba(palette.accent, alpha.contourLine),
  "--divider": rgba(palette.accent, alpha.divider),
} as React.CSSProperties;
