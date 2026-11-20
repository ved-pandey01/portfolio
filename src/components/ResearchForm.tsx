"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { profile, researchTeaser, whynowUrl } from "@/content/site";

// Sends a research request. With `whynowUrl` set in site.ts, opens WhyNow with the
// company pre-filled instead of drafting an email.
export function ResearchForm() {
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = company.trim();
    if (!name) {
      setError("Type a company name or website first.");
      return;
    }
    setError("");
    if (whynowUrl) {
      const url = new URL(whynowUrl);
      url.searchParams.set("company", name);
      window.open(url.toString(), "_blank", "noopener,noreferrer");
      return;
    }
    const subject = researchTeaser.emailSubject.replace("[company]", name);
    const body = researchTeaser.emailBody.replace("[company]", name);
    window.location.assign(
      `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  }

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
          onChange={(e) => setCompany(e.target.value)}
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
      </button>
    </form>
    {error ? (
      <p id="research-error" role="alert" className="mt-2 text-sm text-accent">
        {error}
      </p>
    ) : null}
    </>
  );
}
