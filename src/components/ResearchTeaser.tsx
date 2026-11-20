import { Search, Sparkles } from "lucide-react";
import { researchTeaser } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, Eyebrow } from "./ui";
import { Backdrop } from "./Backdrop";

export function ResearchTeaser() {
  return (
    <section aria-labelledby="research-title" className="section py-8 sm:py-10">
      <Backdrop divider glow="left" />
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-line bg-surface px-6 py-10 sm:px-12 sm:py-12">
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

            <form aria-describedby="research-note" className="mx-auto mt-8 flex max-w-lg flex-col gap-2 sm:flex-row">
              <label htmlFor="research-input" className="sr-only">
                Company name or website
              </label>
              <div className="relative flex-1">
                <Search size={16} aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  id="research-input"
                  type="text"
                  disabled
                  placeholder={researchTeaser.inputPlaceholder}
                  className="h-12 w-full cursor-not-allowed rounded-full border border-line bg-bg/70 pl-11 pr-4 text-ink opacity-70 placeholder:text-muted"
                />
              </div>
              <button
                type="submit"
                disabled
                aria-disabled="true"
                className="h-12 cursor-not-allowed rounded-full border border-dashed border-line bg-transparent px-6 text-sm font-medium text-muted opacity-60"
              >
                {researchTeaser.button}
              </button>
            </form>
            <p id="research-note" className="mt-3 font-mono text-xs text-muted">
              Powered by WhyNow. Not live yet.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
