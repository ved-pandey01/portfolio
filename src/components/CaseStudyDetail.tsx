import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import type { CaseStudy } from "@/content/site";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { FactsBar } from "./FactsBar";
import { GithubIcon } from "./Icons";
import { Loom, Screenshot } from "./Media";
import { ProductDetails } from "./ProductDetails";
import { Reveal } from "./Reveal";
import { ButtonLink, Chip } from "./ui";

// The full case study, shown on /work/[slug].
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{label}</h2>
      <p className="mt-2 leading-relaxed text-body text-pretty">{children}</p>
    </div>
  );
}

export function CaseStudyDetail({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article aria-labelledby={`${study.id}-title`}>
      <div className="rise rise-1 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
          <h1 id={`${study.id}-title`} className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {study.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{study.tagline}</p>
          <FactsBar facts={study.facts} className="mt-3" />
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
                {l.label === "Live demo" ? <ArrowRight size={15} aria-hidden /> : <ArrowUpRight size={15} aria-hidden />}
                <span className="sr-only">(opens in a new tab)</span>
              </ButtonLink>
            ),
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <div className="rise rise-2 flex flex-col gap-7">
          <Block label="Problem">{study.problem}</Block>
          <Block label="What I built">{study.built}</Block>
          <Block label="How it works">{study.howItWorks}</Block>
        </div>
        <div className="rise rise-3">
          <Screenshot study={study} />
        </div>
      </div>

      <Reveal className="mt-8">
        <ArchitectureDiagram steps={study.diagram} label={study.name} />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <h2 className="mr-1 font-mono text-[11px] uppercase tracking-widest text-muted">Next up</h2>
          <ul aria-label={`${study.name}: next up`} className="contents">
            {study.nextUp.map((n) => (
              <li key={n} className="rounded-full border border-dashed border-accent/40 px-3 py-1 font-mono text-xs text-body">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
        <Reveal className="card depth p-6">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Result</h2>
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
          {study.loom ? <Loom study={study} /> : <ProductDetails study={study} />}
        </Reveal>
      </div>
    </article>
  );
}
