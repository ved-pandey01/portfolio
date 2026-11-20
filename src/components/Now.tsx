import { now } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Now() {
  return (
    <section id="now" aria-labelledby="now-title" className="scroll-mt-16 py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <SectionHeading id="now-title" eyebrow="Now" title="What I’m building this month." />
          <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            Updated {now.updated}
          </p>
        </Reveal>
        <ol className="flex flex-col gap-3">
          {now.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.07} className="card flex gap-5 p-5 sm:p-6">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-medium text-ink">{item.title}</h3>
                <p className="mt-1 text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
