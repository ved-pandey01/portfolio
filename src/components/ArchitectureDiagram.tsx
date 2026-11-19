import type { DiagramStep } from "@/content/site";

// Simple left-to-right flow (top-to-bottom on mobile), driven by data in site.ts.
export function ArchitectureDiagram({ steps, label }: { steps: DiagramStep[]; label: string }) {
  return (
    <figure className="card overflow-hidden p-4 sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted">
        <span>How it works</span>
        <span className="hidden sm:inline">architecture</span>
      </figcaption>
      <ol aria-label={`${label} architecture`} className="flex flex-col items-stretch md:flex-row md:items-center">
        {steps.map((step, i) => (
          <li key={step.title} className="flex flex-col md:flex-1 md:flex-row md:items-center">
            <div className="flex-1 rounded-xl border border-line-2 bg-bg/70 p-3.5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-blue-soft">
                {String(i + 1).padStart(2, "0")} {step.title}
              </p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md px-2 py-1 text-[13px] ${
                      i === steps.length - 1
                        ? "bg-emerald/10 text-emerald-soft ring-1 ring-emerald/25"
                        : "bg-surface text-ink ring-1 ring-line-2"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < steps.length - 1 ? (
              <div aria-hidden className="relative mx-auto h-7 w-px bg-line-2 md:mx-2 md:h-px md:w-8 md:shrink-0">
                <span
                  className="flow-dot absolute size-1.5 rounded-full bg-blue-soft shadow-[0_0_10px_2px_rgb(96_165_250/0.7)]"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
