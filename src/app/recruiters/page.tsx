import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ContactLinks } from "@/components/Contact";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { profile, recruiter, seo, stats } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.recruitersTitle },
  description: seo.recruitersDescription,
  alternates: { canonical: "/recruiters" },
  openGraph: { title: seo.recruitersTitle, description: seo.recruitersDescription, url: "/recruiters" },
};

function statText(s: (typeof stats)[number]) {
  if (s.kind === "text") return `${s.value} ${s.label}`;
  return `${s.label}: ${s.prefix ?? ""}${s.to}${s.suffix ?? ""}${s.detail ? ` (${s.detail.toLowerCase()})` : ""}`;
}

export default function RecruitersPage() {
  return (
    <main id="main" className="relative isolate pb-24 pt-28 sm:pt-36">
      <div aria-hidden className="bg-grid absolute inset-x-0 top-0 -z-10 h-[32rem]" />
      <Container className="max-w-4xl">
        <Eyebrow>For recruiters</Eyebrow>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{profile.name}</h1>
        <p className="mt-3 text-lg text-muted">
          {profile.role} · {profile.location}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={profile.cv} download className="no-print">
            <Download size={16} aria-hidden /> Download CV
          </ButtonLink>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent">
            <span aria-hidden className="size-2 rounded-full bg-status" />
            {profile.status}
          </p>
        </div>

        <section aria-labelledby="summary-title" className="card mt-12 p-6 sm:p-8">
          <h2 id="summary-title" className="font-mono text-xs uppercase tracking-widest text-accent">
            {recruiter.title}
          </h2>
          <ul className="mt-5 space-y-3 text-lg text-body">
            {recruiter.summary.map((line) => (
              <li key={line} className="flex gap-3">
                <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                {line}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="facts-title" className="card p-6 sm:p-8">
            <h2 id="facts-title" className="font-mono text-xs uppercase tracking-widest text-accent">
              Key facts
            </h2>
            <dl className="mt-5 divide-y divide-line">
              {recruiter.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="proof-title" className="card p-6 sm:p-8">
            <h2 id="proof-title" className="font-mono text-xs uppercase tracking-widest text-accent">
              Proof
            </h2>
            <ul className="mt-5 divide-y divide-line">
              {stats.map((s) => (
                <li key={s.label} className="py-3 text-sm text-ink">
                  {statText(s)}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="reach-title" className="mt-12">
          <h2 id="reach-title" className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </h2>
          <ContactLinks />
        </section>
      </Container>
    </main>
  );
}
