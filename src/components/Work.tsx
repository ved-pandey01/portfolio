import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/content/site";
import { Backdrop } from "./Backdrop";
import { FactsBar } from "./FactsBar";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

// The live demo link for a project, if it has a real one.
const liveDemo = (study: CaseStudy) => study.links.find((l) => l.label === "Live demo" && !l.placeholder)?.href;

// Home: two compact project cards. Each opens its full case study at /work/[slug].
export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section scroll-mt-16 py-16 sm:py-20">
      <Backdrop divider glow="right" growth />
      <Container>
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Featured work"
            title="AI tools, built end to end."
            body="Real, working systems. Each one solves a real business problem."
          />
        </Reveal>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal as="li" key={study.id} delay={i * 0.08}>
              {/* The whole card opens the case study (a stretched link); the live demo button sits above it. */}
              <article className="card depth group relative flex h-full flex-col overflow-hidden">
                {study.screenshot ? (
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
                    <Image
                      src={study.screenshot.src}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 id={`${study.id}-card-title`} className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">
                    {study.name}
                  </h3>
                  <p className="mt-2 text-muted">{study.tagline}</p>
                  <FactsBar facts={study.facts} className="mt-3" />
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href={`/work/${study.id}`}
                      aria-labelledby={`${study.id}-card-title`}
                      className="inline-flex items-center gap-2 rounded-full border border-accent/45 px-5 py-2.5 text-sm font-medium text-ink transition-colors after:absolute after:inset-0 after:content-[''] group-hover:border-accent group-hover:text-accent"
                    >
                      View case study <ArrowRight size={15} aria-hidden />
                    </Link>
                    {liveDemo(study) ? (
                      <a
                        href={liveDemo(study)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 inline-flex items-center gap-2 rounded-full bg-button px-5 py-2.5 text-sm font-semibold text-button-text transition-colors hover:bg-button-hover"
                      >
                        Live demo <ArrowRight size={15} aria-hidden />
                        <span className="sr-only">: {study.name} (opens in a new tab)</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
