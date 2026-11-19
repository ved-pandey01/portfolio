"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() =>
        navigator.clipboard?.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
      }
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-muted transition-colors hover:border-blue-soft/60 hover:text-ink"
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {copied ? <Check size={15} className="text-emerald" aria-hidden /> : <Copy size={15} aria-hidden />}
    </button>
  );
}
