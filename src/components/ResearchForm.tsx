"use client";

import { ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import { profile, researchTeaser, whynowUrl } from "@/content/site";

// Research opens the live WhyNow app in a new tab with the company pre-filled (?company=<name>).
// WhyNow fills in the search bar but does not start a search until the visitor clicks Research there.
export function ResearchForm() {
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = company.trim();
    if (!name) {
      setError(researchTeaser.emptyError);
      return;
    }
    setError("");
    const url = new URL(whynowUrl);
    url.searchParams.set("company", name);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  // Secondary option: ask for a report by email. Uses the typed name when there is one.
  const name = company.trim() || "my company";
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    researchTeaser.emailSubject.replace("[company]", name),
  )}&body=${encodeURIComponent(researchTeaser.emailBody.replace("[company]", name))}`;

  return (
    <>
      <form onSubmit={submit} noValidate aria-describedby="research-note" className="mx-auto mt-8 flex max-w-lg flex-col gap-2 sm:flex-row">
        <label htmlFor="research-input" className="sr-only">
          Company name or website
        </label>
        <div className="relative flex-1">
          <Search size={16} aria-hidden className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="research-input"
            type="text"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
              if (error) setError("");
            }}
            placeholder={researchTeaser.inputPlaceholder}
            autoComplete="organization"
            aria-invalid={error ? true : undefined}
            aria-errormessage={error ? "research-error" : undefined}
            className="h-12 w-full rounded-full border border-line bg-bg/70 pl-11 pr-4 text-ink placeholder:text-muted focus:border-accent/60"
          />
        </div>
        <button
          type="submit"
          className="h-12 rounded-full bg-button px-6 text-sm font-semibold text-button-text transition-colors hover:bg-button-hover"
        >
          {researchTeaser.button}
          <span className="sr-only"> (opens WhyNow in a new tab)</span>
        </button>
      </form>

      {error ? (
        <p id="research-error" role="alert" className="mt-2 text-sm text-accent">
          {error}
        </p>
      ) : null}

      <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted">
        <span>{researchTeaser.tryLabel}</span>
        <a
          href={researchTeaser.sampleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-xs text-body transition-colors hover:border-accent/60 hover:text-accent"
        >
          {researchTeaser.tryCompany}
          <span className="sr-only"> sample report (opens in a new tab)</span>
        </a>
      </div>

      <p id="research-note" className="mt-4 text-base text-muted md:text-sm">
        {researchTeaser.note}
      </p>
      <p className="mt-1 text-sm text-muted">
        {researchTeaser.emailPrompt}{" "}
        <a href={mailto} className="inline-flex items-center gap-1 text-accent hover:text-accent-hover">
          {researchTeaser.emailLink} <ArrowRight size={13} aria-hidden />
        </a>
      </p>
      <a
        href={researchTeaser.sampleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover"
      >
        {researchTeaser.sampleLabel} <ArrowUpRight size={14} aria-hidden />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </>
  );
}
