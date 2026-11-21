import {
  siClaude,
  siGooglegemini,
  siHubspot,
  siN8n,
  siPython,
  type SimpleIcon,
} from "simple-icons";
import { about, timeline, toolkit } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";
import { Backdrop } from "./Backdrop";
import { MobileCollapse } from "./MobileCollapse";

// Add an entry here if you add a new simple-icons logo to `toolkit` in site.ts.
const ICONS: Record<string, SimpleIcon> = {
  siClaude,
  siGooglegemini,
  siHubspot,
  siN8n,
  siPython,
};

function Timeline() {
  return (
    <ol className="relative ml-1.5 border-l border-line">
      {timeline.map((t, i) => (
        <Reveal
          as="li"
          key={t.title}
          delay={i * 0.08}
          className="relative pb-10 pl-8 last:pb-0"
        >
          <span
            aria-hidden
            className={`absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 ${
              t.current ? "border-accent bg-bg" : "border-muted bg-bg"
            }`}
          />
          {t.period ? (
            <p className="font-mono text-xs text-muted">{t.period}</p>
          ) : null}
          <h3 className="font-display text-xl font-semibold text-ink">
            {t.title}
            {t.current ? (
              <span className="ml-3 rounded-full bg-accent-soft px-2 py-0.5 align-middle font-mono text-[11px] font-normal text-accent">
                Now
              </span>
            ) : null}
          </h3>
          <p className="mt-1 text-body">
            {t.org}
            {t.place ? (
              <span className="text-muted">
                {t.org ? " · " : ""}
                {t.place}
              </span>
            ) : null}
          </p>
          {t.detail ? <p className="mt-2 text-muted">{t.detail}</p> : null}
        </Reveal>
      ))}
    </ol>
  );
}

function ToolkitWall() {
  return (
    <ul
      aria-label="Toolkit"
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
    >
      {toolkit.map((t, i) => {
        // An odd last tile spans the row so the wall stays a clean rectangle.
        const last = i === toolkit.length - 1;
        const span = last
          ? `${toolkit.length % 2 === 1 ? "col-span-2" : ""} ${toolkit.length % 3 === 1 ? "sm:col-span-3" : "sm:col-span-1"}`
          : "";
        const icon = t.icon ? ICONS[t.icon] : undefined;
        return (
          <li
            key={t.name}
            className={`group flex h-28 flex-col items-center justify-center gap-3 bg-surface/95 transition-colors hover:bg-raised ${span}`}
            style={
              icon
                ? ({ "--brand": `#${icon.hex}` } as React.CSSProperties)
                : undefined
            }
          >
            {icon ? (
              <svg
                viewBox="0 0 24 24"
                width={28}
                height={28}
                aria-hidden
                className="fill-muted transition-colors duration-300 group-hover:fill-[var(--brand)]"
              >
                <path d={icon.path} />
              </svg>
            ) : (
              <span
                aria-hidden
                className="grid size-7 place-items-center rounded-md border-2 border-muted font-display text-sm font-bold text-muted transition-colors group-hover:border-accent group-hover:text-accent"
              >
                {t.name.charAt(0)}
              </span>
            )}
            <span className="text-sm text-body">{t.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section scroll-mt-16 py-16 sm:py-20"
    >
      <Backdrop divider glow="left" dots />
      <Container>
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title={about.title}
            body={about.body}
          />
        </Reveal>
        <MobileCollapse
          preview={`Career timeline (${timeline.length} steps) and toolkit (${toolkit.length} tools)`}
        >
          <div className="mt-6 grid gap-10 md:mt-10 lg:grid-cols-2">
            <div>
              <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
                Career
              </h3>
              <Timeline />
            </div>
            <div>
              <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
                Toolkit
              </h3>
              <Reveal>
                <ToolkitWall />
              </Reveal>
            </div>
          </div>
        </MobileCollapse>
      </Container>
    </section>
  );
}
