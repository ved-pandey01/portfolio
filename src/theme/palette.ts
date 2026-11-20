/**
 * THE ONLY PLACE COLOURS ARE DEFINED.
 *
 * "Ink and Champagne". Change a value here and the whole site, the social
 * card (opengraph-image) and the favicon follow. These become CSS variables
 * on <html> (see cssVariables below) and Tailwind classes such as bg-surface,
 * text-muted, text-accent and bg-button (see src/app/globals.css).
 *
 * Use the accent sparingly: italic headline words, outline buttons, links and
 * small labels only. No gradients, no coloured glows.
 */
export const palette = {
  bg: "#0E0D0B", // page background
  surface: "#161512", // cards
  raised: "#1D1B18", // raised surfaces: inputs, chips, hover states
  line: "#2A2722", // borders and dividers
  text: "#EDE8DF", // body text
  muted: "#8A8276", // secondary text
  heading: "#F5F1EA", // headings
  accent: "#C9B38A", // champagne accent
  accentHover: "#D8C7A3", // champagne on hover
  button: "#EDE8DF", // main button fill
  buttonText: "#0E0D0B", // main button text
  buttonHover: "#F5F1EA", // main button fill on hover
  status: "#22C55E", // the "open to roles" status dot only
};

// Translucent tints derived from the colours above (0 to 1).
const alpha = {
  accentSoft: 0.06, // pill and badge fills (max 6%)
  selection: 0.3, // text selection highlight
  gridLine: 0.045, // background grid lines, barely visible
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
  "--accent-soft": rgba(palette.accent, alpha.accentSoft),
  "--selection": rgba(palette.accent, alpha.selection),
  "--grid-line": rgba(palette.muted, alpha.gridLine),
} as React.CSSProperties;
