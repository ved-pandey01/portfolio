import type { Metadata } from "next";
import { Download } from "lucide-react";
import { ContactLinks } from "@/components/Contact";
import { Headshot } from "@/components/Headshot";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { profile, recruiter, seo, stats } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: seo.recruitersTitle },
  description: seo.recruitersDescription,
  alternates: { canonical: "/recruiters" },
  openGraph: { title: seo.recruitersTitle, description: seo.recruitersDescription, url: "/recruiters" },
};

export default function RecruitersPage() {
  return (
    <main id="main" className="relative isolate pb-16 pt-24 sm:pt-28">
      <div aria-hidden className="bg-dots absolute inset-x-0 top-0 -z-10 h-[32rem]" />
      <Container className="max-w-4xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
          <Headshot crop="face" width={120} height={120} priority className="photo-ring shrink-0 rounded-full" />
          <div>
            <Eyebrow>For recruiters</Eyebrow>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">{profile.name}</h1>
          </div>
        </div>
        <p className="mt-4 text-xl text-body sm:text-2xl">{profile.keyLine}</p>
        <p className="mt-2 font-mono text-sm text-muted">{profile.subline}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={profile.cv} download className="no-print">
            <Download size={16} aria-hidden /> Download CV
          </ButtonLink>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-4 py-2 text-sm text-accent">
            <span aria-hidden className="size-2 rounded-full bg-status" />
            {profile.status}
          </p>
        </div>

        <section aria-labelledby="summary-title" className="card depth depth-static mt-8 p-6 sm:p-8">
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

        <section aria-labelledby="why-title" className="mt-10">
          <h2 id="why-title" className="font-mono text-xs uppercase tracking-widest text-accent">
            {recruiter.whyHireTitle}
          </h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {recruiter.whyHire.map((w) => (
              <li key={w.title} className="card depth p-5 sm:p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{w.title}</h3>
                <p className="mt-2 text-muted">{w.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="can-do-title" className="mt-10">
          <h2 id="can-do-title" className="font-mono text-xs uppercase tracking-widest text-accent">
            {recruiter.capabilitiesTitle}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {recruiter.capabilities.map((c) => (
              <li key={c} className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="facts-title" className="card depth depth-static p-6 sm:p-8">
            <h2 id="facts-title" className="font-mono text-xs uppercase tracking-widest text-accent">
              Key facts
            </h2>
            <dl className="mt-5 divide-y divide-line">
              {recruiter.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-3 py-3">
                  <dt className="text-sm text-muted">{f.label}</dt>
                  <dd className="text-base leading-[1.6] text-ink md:text-sm md:leading-normal">{f.value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section aria-labelledby="proof-title" className="card depth depth-static p-6 sm:p-8">
            <h2 id="proof-title" className="font-mono text-xs uppercase tracking-widest text-accent">
              Proof
            </h2>
            <ul className="mt-5 divide-y divide-line">
              {stats.map((s) => (
                <li key={s.caption} className="py-3 text-base text-ink md:text-sm">
                  {s.recruiterLine}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section aria-labelledby="reach-title" className="mt-8">
          <h2 id="reach-title" className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            Contact
          </h2>
          <ContactLinks />
        </section>
      </Container>
    </main>
  );
}
