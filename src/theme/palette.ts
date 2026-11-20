/**
 * THE ONLY PLACE COLOURS ARE DEFINED.
 *
 * "Graphite and Amber". Change a value here and the whole site, the social
 * card (opengraph-image) and the favicon follow. These become CSS variables
 * on <html> (see cssVariables below) and Tailwind classes such as bg-surface,
 * text-muted and text-accent (see src/app/globals.css).
 */
export const palette = {
  bg: "#0C0C0E", // page background
  surface: "#151518", // cards
  raised: "#1C1C20", // raised surfaces: inputs, chips, hover states
  line: "#26262B", // borders and dividers
  text: "#E7E5E4", // body text
  muted: "#A1A1AA", // secondary text
  heading: "#FFFFFF", // headings
  accent: "#F59E0B", // amber accent
  accentHover: "#FBBF24", // amber on hover
  status: "#22C55E", // the "open to roles" status dot only
};

// Translucent tints derived from the colours above (0 to 1).
const alpha = {
  accentSoft: 0.12, // glows and pills
  accentGlow: 0.35, // button and node glows
  accentRing: 0.5, // hairline ring around the primary button
  gridLine: 0.07, // background grid lines (neutral grey, from `muted`)
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
  "--status": palette.status,
  "--accent-soft": rgba(palette.accent, alpha.accentSoft),
  "--accent-glow": rgba(palette.accent, alpha.accentGlow),
  "--accent-ring": rgba(palette.accent, alpha.accentRing),
  "--grid-line": rgba(palette.muted, alpha.gridLine),
} as React.CSSProperties;
