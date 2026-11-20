import Link from "next/link";
import { ArrowDown, Download, FileText, Mail } from "lucide-react";
import { mailtoHref, profile } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ButtonLink, Container } from "./ui";

const pill =
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-pill-border px-3 py-1.5 text-[13px] text-body transition-colors hover:border-accent hover:text-accent sm:gap-2 sm:px-3.5 sm:text-sm";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28">
      {/* Background: dot pattern, drifting champagne glows, hairline. All CSS. */}
      <div aria-hidden className="bg-dots absolute inset-0 -z-10" />
      <div aria-hidden className="glow glow-main -z-10" />
      <div aria-hidden className="glow glow-faint -z-10" />
      <div aria-hidden className="hairline absolute inset-x-0 top-0 h-px" />

      <Container className="flex flex-col items-start">
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

        <ul aria-label="Profiles and contact" className="rise rise-2 mt-5 grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${pill} w-full`}>
              <LinkedinIcon size={15} /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${pill} w-full`}>
              <GithubIcon size={15} /> GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={mailtoHref} className={`${pill} w-full`}>
              <Mail size={15} aria-hidden /> Email
            </a>
          </li>
          <li>
            <Link href="/recruiters" className={`${pill} w-full`}>
              <FileText size={15} aria-hidden /> Recruiter one-pager
            </Link>
          </li>
        </ul>

        <p className="rise rise-3 mt-6 max-w-3xl font-display text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink text-balance sm:text-5xl lg:text-[3.6rem]">
          {profile.headline.lead}{" "}
          <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em] text-accent">
            {profile.headline.accent}
          </span>
        </p>

        <p className="rise rise-3 mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty sm:text-xl">
          <span className="text-body">{profile.keyLine}</span>
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

        <p className="rise rise-4 mt-7 hidden items-center gap-2 text-sm text-muted sm:flex">
          Press
          <kbd className="rounded border border-line bg-raised px-1.5 py-0.5 font-mono text-xs text-body">Cmd</kbd>
          <kbd className="rounded border border-line bg-raised px-1.5 py-0.5 font-mono text-xs text-body">K</kbd>
          to get around
        </p>
      </Container>
    </section>
  );
}
