// Thin row of key facts in small mono text, separated by champagne dots.
export function FactsBar({ facts, className = "" }: { facts: string[]; className?: string }) {
  return (
    <p aria-label="Key facts" className={`flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-muted ${className}`}>
      {facts.map((f, i) => (
        <span key={f} className="whitespace-nowrap">
          {f}
          {i < facts.length - 1 ? <span aria-hidden className="ml-2 text-accent">·</span> : null}
        </span>
      ))}
    </p>
  );
}
