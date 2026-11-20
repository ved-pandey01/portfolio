import { ArrowUpRight, Check } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/content/site";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { GithubIcon } from "./Icons";
import { Loom, Screenshot } from "./Media";
import { Reveal } from "./Reveal";
import { ButtonLink, Chip, Container, SectionHeading } from "./ui";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-muted">{label}</h4>
      <p className="mt-2 leading-relaxed text-body text-pretty">{children}</p>
    </div>
  );
}

function Study({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`} className="scroll-mt-24">
      <Reveal className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
          <h3 id={`${study.id}-title`} className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {study.name}
          </h3>
          <p className="mt-2 text-lg text-muted">{study.tagline}</p>
          <ul aria-label="Stack" className="mt-5 flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <li key={s}>
                <Chip>{s}</Chip>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {study.links.map((l) =>
            l.placeholder ? (
              <span
                key={l.label}
                aria-disabled
                title="Link coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted"
              >
                {l.label} <span className="font-mono text-[11px]">soon</span>
              </span>
            ) : (
              <ButtonLink key={l.label} href={l.href} variant={l.label === "GitHub" ? "secondary" : "primary"}>
                {l.label === "GitHub" ? <GithubIcon size={15} /> : null}
                {l.label}
                <ArrowUpRight size={15} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </ButtonLink>
            ),
          )}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <Reveal className="flex flex-col gap-7">
          <Block label="Problem">{study.problem}</Block>
          <Block label="What I built">{study.built}</Block>
          <Block label="How it works">{study.howItWorks}</Block>
        </Reveal>
        <Reveal delay={0.1}>
          <Screenshot study={study} />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <ArchitectureDiagram steps={study.diagram} label={study.name} />
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <Reveal className="card p-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-accent">Result</h4>
          <ul className="mt-4 space-y-3">
            {study.result.map((r) => (
              <li key={r} className="flex gap-3 text-body">
                <Check size={18} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <Loom study={study} />
        </Reveal>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Featured work"
            title="Tools I built to sell smarter."
            body="Real systems, built end to end. Each one starts with a real sales problem."
          />
        </Reveal>
        <div className="mt-10 flex flex-col gap-16">
          {caseStudies.map((s, i) => (
            <Study key={s.id} study={s} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
