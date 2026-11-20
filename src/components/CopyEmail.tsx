"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <span className="relative inline-flex shrink-0">
      <button
        type="button"
        onClick={() =>
          navigator.clipboard?.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
        }
        className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-ink"
        aria-label="Copy email address"
      >
        {copied ? <Check size={15} className="text-accent" aria-hidden /> : <Copy size={15} aria-hidden />}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded-md border border-line bg-raised px-2 py-1 text-xs text-ink transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}
