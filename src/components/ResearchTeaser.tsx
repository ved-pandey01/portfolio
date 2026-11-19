import { Search, Sparkles } from "lucide-react";
import { researchTeaser } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, Eyebrow } from "./ui";

export function ResearchTeaser() {
  return (
    <section aria-labelledby="research-title" className="py-12 sm:py-16">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-3xl border border-line-2 bg-gradient-to-br from-bg-2 via-surface to-bg-2 px-6 py-12 sm:px-12 sm:py-16">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
          <div
            aria-hidden
            className="absolute -bottom-24 left-1/2 -z-10 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(16_185_129/0.18),transparent)] blur-2xl"
          />
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow tone="emerald">
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
                  className="h-12 w-full cursor-not-allowed rounded-full border border-line-2 bg-bg/70 pl-11 pr-4 text-ink placeholder:text-muted"
                />
              </div>
              <button
                type="submit"
                disabled
                className="relative h-12 cursor-not-allowed overflow-hidden rounded-full border border-line-2 bg-[linear-gradient(110deg,#111827_40%,#1e3a5f_50%,#111827_60%)] bg-[length:200%_100%] px-6 text-sm font-medium text-body animate-shimmer"
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
