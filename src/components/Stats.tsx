import { stats, statsLabel } from "@/content/site";
import { CountUp } from "./CountUp";
import { Container } from "./ui";
import { Backdrop } from "./Backdrop";

export function Stats() {
  return (
    <section aria-label="Proof" className="section py-5 sm:py-8">
      <Backdrop divider glow="left" contours />
      <Container>
        <p className="rise mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent" style={{ animationDelay: "0.36s" }}>
          {statsLabel}
        </p>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.caption}
              className="rise card depth stat-card @container p-5 sm:p-8"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <p className="stat-value whitespace-nowrap font-display font-semibold tracking-tight text-ink">
                {s.kind === "number" ? (
                  <CountUp
                    from={s.from}
                    to={s.to}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    prefixNode={s.prefix ? <span className="stat-from">{s.prefix}</span> : undefined}
                  />
                ) : (
                  <span>{s.value}</span>
                )}
              </p>
              <p className="mt-2 text-sm text-[var(--stat-caption)]">{s.caption}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
