"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

// Phones: closed by default behind a short preview line, tap to expand.
// Desktop (md and up): the content is always shown and the toggle is hidden.
export function MobileCollapse({ preview, children }: { preview: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="card depth mt-6 flex w-full items-center justify-between gap-4 p-4 text-left md:hidden"
      >
        <span className="text-body">{preview}</span>
        <span className="flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-widest text-accent">
          {open ? "Hide" : "Show"}
          <ChevronDown size={16} aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      <div id={id} className={open ? "block" : "hidden md:block"}>
        {children}
      </div>
    </div>
  );
}
