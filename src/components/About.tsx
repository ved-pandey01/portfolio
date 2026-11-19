import { siClaude, siGooglegemini, siHubspot, siN8n, siPython, type SimpleIcon } from "simple-icons";
import { about, timeline, toolkit } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

// Add an entry here if you add a new simple-icons logo to `toolkit` in site.ts.
const ICONS: Record<string, SimpleIcon> = { siClaude, siGooglegemini, siHubspot, siN8n, siPython };

function Timeline() {
  return (
    <ol className="relative ml-1.5 border-l border-line-2">
      {timeline.map((t, i) => (
        <Reveal as="li" key={t.title} delay={i * 0.08} className="relative pb-10 pl-8 last:pb-0">
          <span
            aria-hidden
            className={`absolute -left-[7px] top-1.5 size-3.5 rounded-full border-2 ${
              t.current
                ? "border-emerald bg-emerald/30 shadow-[0_0_14px_2px_rgb(16_185_129/0.45)]"
                : "border-blue-soft bg-bg"
            }`}
          />
          {t.period ? <p className="font-mono text-xs text-muted">{t.period}</p> : null}
          <h3 className="font-display text-xl font-semibold text-ink">
            {t.title}
            {t.current ? (
              <span className="ml-3 rounded-full bg-emerald/10 px-2 py-0.5 align-middle font-mono text-[11px] font-normal text-emerald-soft">
                Now
              </span>
            ) : null}
          </h3>
          <p className="mt-1 text-body">
            {t.org}
            {t.place ? <span className="text-muted"> · {t.place}</span> : null}
          </p>
          {t.detail ? <p className="mt-2 text-muted">{t.detail}</p> : null}
        </Reveal>
      ))}
    </ol>
  );
}

function ToolkitWall() {
  return (
    <ul aria-label="Toolkit" className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
      {toolkit.map((t) => {
        const icon = t.icon ? ICONS[t.icon] : undefined;
        return (
          <li
            key={t.name}
            className="group flex h-28 flex-col items-center justify-center gap-3 bg-bg-2/95 transition-colors hover:bg-surface"
            style={icon ? ({ "--brand": `#${icon.hex}` } as React.CSSProperties) : undefined}
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
                className="grid size-7 place-items-center rounded-md border-2 border-muted font-display text-sm font-bold text-muted transition-colors group-hover:border-blue-soft group-hover:text-blue-soft"
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
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 border-t border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading id="about-title" eyebrow="About" title={about.title} body={about.body} />
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">Career</h3>
            <Timeline />
          </div>
          <div>
            <h3 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">Toolkit</h3>
            <Reveal>
              <ToolkitWall />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
