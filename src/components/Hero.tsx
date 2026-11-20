import Link from "next/link";
import { ArrowDown, Download, FileText, Mail } from "lucide-react";
import { mailtoHref, now, profile } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ButtonLink, Container } from "./ui";

const quietLink = "inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent";

// Desktop-only card: the first item of the Now list, so it always matches that section.
function CurrentlyBuilding() {
  const item = now.items[0];
  if (!item) return null;
  return (
    <aside aria-label="Currently building" className="rise rise-3 card depth hidden w-[21rem] shrink-0 p-6 lg:block">
      <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted">
        <span aria-hidden className="size-2 rounded-full bg-status pulse-dot" />
        Currently building
      </p>
      <p className="mt-4 font-display text-xl font-semibold text-ink">{item.title}</p>
      <p className="mt-1.5 text-muted">{item.detail}</p>
    </aside>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28">
      {/* Background: dot pattern, drifting champagne glows, hairline. All CSS. */}
      <div aria-hidden className="bg-dots absolute inset-0 -z-10" />
      <div aria-hidden className="glow glow-main -z-10" />
      <div aria-hidden className="glow glow-faint -z-10" />
      <div aria-hidden className="hairline absolute inset-x-0 top-0 h-px" />

      <Container className="flex items-center justify-between gap-12">
        <div className="flex min-w-0 flex-col items-start">
          <p className="rise rise-1 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 text-sm text-accent">
            <span aria-hidden className="size-2 rounded-full bg-status pulse-dot" />
            {profile.status}
          </p>

          <h1
            id="hero-title"
            className="rise rise-2 mt-6 font-display text-[2rem] font-semibold leading-[1] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.15rem]"
          >
            {profile.name}
          </h1>
          <p className="rise rise-2 mt-3 font-mono text-sm text-muted sm:text-base">{profile.subline}</p>

          <p className="rise rise-3 mt-6 max-w-3xl font-display text-[1.35rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink text-balance sm:text-[1.95rem] lg:text-[2.35rem]">
            {profile.headline.lead}{" "}
            <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-accent">
              {profile.headline.accent}
            </span>
          </p>

          <div className="rise rise-4 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="#work">
              View work <ArrowDown size={16} aria-hidden />
            </ButtonLink>
            <ButtonLink href={profile.cv} variant="secondary" download>
              <Download size={16} aria-hidden /> Download CV
            </ButtonLink>
            <ButtonLink href={mailtoHref} variant="secondary">
              <Mail size={16} aria-hidden /> Contact
            </ButtonLink>
          </div>

          <ul aria-label="Profiles" className="rise rise-4 mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={quietLink}>
                <LinkedinIcon size={14} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={quietLink}>
                <GithubIcon size={14} /> GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <Link href="/recruiters" className={quietLink}>
                <FileText size={14} aria-hidden /> Recruiter one-pager
              </Link>
            </li>
          </ul>
        </div>

        <CurrentlyBuilding />
      </Container>
    </section>
  );
}
