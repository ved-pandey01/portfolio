import { stats } from "@/content/site";
import { CountUp } from "./CountUp";
import { Container } from "./ui";
import { Backdrop } from "./Backdrop";

export function Stats() {
  return (
    <section aria-label="Proof" className="section py-5 sm:py-8">
      <Backdrop divider glow="left" contours />
      <Container>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li
              key={s.label}
              className="rise card depth stat-card p-5 sm:p-8"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <p className="text-sm text-muted">{s.label}</p>
              <p className="mt-3 whitespace-nowrap font-display text-[1.75rem] font-semibold tracking-tight text-ink min-[400px]:text-4xl sm:text-5xl">
                {s.kind === "number" ? (
                  <CountUp from={s.from} to={s.to} prefix={s.prefix} suffix={s.suffix} />
                ) : (
                  <span>{s.value}</span>
                )}
              </p>
              {s.detail ? <p className="mt-2 font-mono text-xs text-accent">{s.detail}</p> : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
