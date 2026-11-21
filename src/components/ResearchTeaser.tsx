import { ArrowUpRight, Sparkles } from "lucide-react";
import { researchTeaser } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, Eyebrow } from "./ui";
import { Backdrop } from "./Backdrop";
import { ResearchForm } from "./ResearchForm";

export function ResearchTeaser() {
  return (
    <section aria-labelledby="research-title" className="section py-8 sm:py-10">
      <Backdrop divider glow="left" />
      <Container>
        <Reveal className="relative isolate overflow-hidden depth depth-static rounded-3xl border border-line px-6 py-10 sm:px-12 sm:py-12">
          <div aria-hidden className="bg-dots absolute inset-0 -z-10" />
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={13} aria-hidden /> {researchTeaser.eyebrow}
                </span>
              </Eyebrow>
            </div>
            <h2 id="research-title" className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              {researchTeaser.title}
            </h2>
            <p className="mt-4 text-lg text-muted">{researchTeaser.body}</p>

            <ResearchForm />
            <p id="research-note" className="mt-4 text-base text-muted md:text-sm">
              {researchTeaser.note}
            </p>
            <a
              href={researchTeaser.sampleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
            >
              {researchTeaser.sampleLabel} <ArrowUpRight size={14} aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
