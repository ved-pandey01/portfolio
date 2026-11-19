import { stats } from "@/content/site";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { Container } from "./ui";

export function Stats() {
  return (
    <section aria-label="Proof" className="relative py-8 sm:py-12">
      <Container>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.08} className="bg-bg-2/95 p-5 sm:p-8">
              <p className="text-sm text-muted">{s.label}</p>
              <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                {s.kind === "number" ? (
                  <CountUp from={s.from} to={s.to} prefix={s.prefix} suffix={s.suffix} />
                ) : (
                  <span className="text-gradient">{s.value}</span>
                )}
              </p>
              {s.detail ? <p className="mt-2 font-mono text-xs text-emerald-soft">{s.detail}</p> : null}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
