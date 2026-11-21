import {
  Building2,
  FileDown,
  Gauge,
  Layers,
  ListOrdered,
  Mail,
  MessageSquareText,
  Radar,
  type LucideIcon,
} from "lucide-react";
import type { CaseStudy } from "@/content/site";

// Icon names usable in site.ts `details.items[].icon`.
const ICONS: Record<string, LucideIcon> = {
  building: Building2,
  radar: Radar,
  gauge: Gauge,
  mail: Mail,
  message: MessageSquareText,
  list: ListOrdered,
  file: FileDown,
  layers: Layers,
};

// Shown in place of the Loom video until a Loom URL is added in site.ts.
export function ProductDetails({ study }: { study: CaseStudy }) {
  const d = study.details;
  return (
    <section aria-label={`${study.name} product details`} className="card depth depth-static p-6">
      <h4 className="font-mono text-xs uppercase tracking-widest text-accent">{d.title}</h4>

      {d.kind === "features" ? (
        <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {d.items.map((item) => {
            const Icon = ICONS[item.icon] ?? Layers;
            return (
              <li key={item.label} className="flex gap-3 text-base leading-[1.6] text-body md:text-sm md:leading-normal">
                <Icon size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <dl className="mt-4 divide-y divide-line">
          {d.rows.map((row) => (
            <div key={row.label} className="grid gap-1 py-2.5 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted sm:pt-0.5">{row.label}</dt>
              <dd className="font-mono text-[13px] leading-relaxed text-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
