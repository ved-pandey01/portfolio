// Decorative section backgrounds. CSS and inline SVG only, all aria-hidden.
// Colours and opacities come from src/theme/palette.ts (see globals.css).

type Props = {
  glow?: "left" | "right"; // soft champagne glow on one side
  divider?: boolean; // fading champagne hairline along the top edge
  dots?: boolean; // faint champagne dot grid
  growth?: boolean; // "growth" line-chart curves, bottom left to top right
  contours?: boolean; // upward contour lines
  rising?: boolean; // warm glow rising from the bottom
};

// Line-chart curves that climb from bottom left to top right.
const GROWTH_PATHS = [
  "M0 780 C 120 770, 200 740, 300 720 S 460 700, 540 640 S 700 600, 800 520 S 980 380, 1200 140",
  "M0 800 C 160 790, 260 770, 360 760 S 520 720, 620 690 S 780 640, 880 560 S 1060 420, 1200 300",
  "M0 740 C 100 720, 180 690, 260 650 S 380 620, 460 560 S 600 480, 700 430 S 900 260, 1200 40",
];

// Stacked contours that rise left to right.
const CONTOUR_PATHS = Array.from({ length: 9 }, (_, i) => {
  const y = 140 + i * 28;
  return `M0 ${y + 30} C 300 ${y + 20}, 600 ${y - 20}, 900 ${y - 70} S 1150 ${y - 120}, 1200 ${y - 130}`;
});

function Lines({ paths, stroke, height }: { paths: string[]; stroke: string; height: number }) {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      viewBox={`0 0 1200 ${height}`}
      preserveAspectRatio="none"
      fill="none"
    >
      {paths.map((d) => (
        <path key={d} d={d} stroke={stroke} strokeWidth="1.25" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

export function Backdrop({ glow, divider, dots, growth, contours, rising }: Props) {
  return (
    <>
      {divider ? <div aria-hidden className="section-divider" /> : null}
      {glow ? <div aria-hidden className={`section-glow section-glow-${glow}`} /> : null}
      {dots ? <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 -z-10" /> : null}
      {growth ? <Lines paths={GROWTH_PATHS} stroke="var(--growth-line)" height={800} /> : null}
      {contours ? <Lines paths={CONTOUR_PATHS} stroke="var(--contour-line)" height={400} /> : null}
      {rising ? <div aria-hidden className="rising-glow" /> : null}
    </>
  );
}
