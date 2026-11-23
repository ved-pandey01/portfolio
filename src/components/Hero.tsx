import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowDown, CalendarDays, Download, FileText, Mail } from "lucide-react";
import { mailtoHref, now, profile } from "@/content/site";
import { Headshot } from "./Headshot";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ButtonLink, Container } from "./ui";

// Staggered fade-up on load: 60ms between items. The global reduced-motion rule turns it off.
const STEP_MS = 60;
const stagger = (i: number): CSSProperties => ({ animationDelay: `${50 + i * STEP_MS}ms` });

// Desktop only. The column stretches to the text column's height, so the photo's top lines up with
// the status pill and the "Now building" pill (at the bottom) lines up with the icon row.
function HeroPhoto() {
  return (
    <div className="photo-in relative hidden shrink-0 flex-col lg:flex lg:justify-self-center" style={{ width: 240 }}>
      <div aria-hidden className="hero-photo-glow" />
      <div className="hero-photo-frame relative min-h-0 flex-1">
        <Headshot crop="portrait" width={240} height="100%" />
        <div aria-hidden className="hero-photo-rim" />
      </div>
      {/* Exactly the photo's width, edges in line with it, one line only. */}
      <p className="mt-3 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-accent/40 bg-raised/60 px-3 py-2 font-mono text-[11px] text-body backdrop-blur-md">
        <span aria-hidden className="size-2 shrink-0 rounded-full bg-status pulse-dot" />
        <span>
          Now building <span aria-hidden className="text-accent">·</span> {now.heroLabel}
        </span>
      </p>
    </div>
  );
}

// 36px icon-only button with a small label on hover and keyboard focus.
function IconLink({ href, label, external, children }: { href: string; label: string; external?: boolean; children: ReactNode }) {
  const className =
    "group relative inline-flex size-9 items-center justify-center rounded-full border border-[var(--icon-border)] text-muted transition-colors hover:border-accent/60 hover:text-accent focus-visible:border-accent/60 focus-visible:text-accent";
  const tip = (
    <span
      aria-hidden
      className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-line bg-raised px-2 py-1 text-xs text-body opacity-0 shadow-lg transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );
  const aria = external ? `${label} (opens in a new tab)` : label;
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={aria} className={className}>
          {children}
          {tip}
        </a>
      ) : href.startsWith("/") ? (
        <Link href={href} aria-label={aria} className={className}>
          {children}
          {tip}
        </Link>
      ) : (
        <a href={href} aria-label={aria} className={className}>
          {children}
          {tip}
        </a>
      )}
    </li>
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

      <Container className="flex items-center justify-between gap-12 lg:grid lg:grid-cols-[auto_1fr] lg:items-stretch lg:gap-0">
        <div className="flex w-full min-w-0 flex-col items-start lg:w-auto">
          <p
            className="rise inline-flex items-center gap-2 rounded-full border border-line bg-raised/50 px-3 py-1 text-[13px] text-muted"
            style={stagger(0)}
          >
            <span aria-hidden className="size-1.5 rounded-full bg-status pulse-dot" />
            {profile.heroStatus}
          </p>

          {/* Phones and tablets: round photo, centred above the name. */}
          <Headshot
            crop="face"
            width={96}
            height={96}
            priority
            className="photo-ring rise mt-4 self-center rounded-full lg:hidden"
            style={stagger(1)}
          />

          <h1
            id="hero-title"
            className="rise mt-4 font-display text-[2rem] font-semibold leading-[1] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.15rem]"
            style={stagger(1)}
          >
            {profile.name}
          </h1>

          <p
            className="rise mt-3 max-w-3xl font-display text-[1.15rem] font-semibold leading-[1.1] tracking-[-0.025em] text-ink text-balance sm:text-[1.65rem] lg:text-[2rem]"
            style={stagger(2)}
          >
            {profile.headline.lead}{" "}
            <span className="font-serif text-[1.08em] font-normal italic leading-none tracking-[-0.01em] text-accent">
              {profile.headline.accent}
            </span>
          </p>

          <div className="rise mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={stagger(3)}>
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

          <ul aria-label="Profiles and links" className="rise mt-5 flex flex-nowrap gap-2" style={stagger(4)}>
            <IconLink href={profile.linkedin} label="LinkedIn" external>
              <LinkedinIcon size={15} />
            </IconLink>
            <IconLink href={profile.github} label="GitHub" external>
              <GithubIcon size={15} />
            </IconLink>
            <IconLink href={mailtoHref} label="Email">
              <Mail size={15} aria-hidden />
            </IconLink>
            <IconLink href={profile.bookingUrl} label="Book a call" external>
              <CalendarDays size={15} aria-hidden />
            </IconLink>
            <IconLink href="/recruiters" label="Recruiter one-pager">
              <FileText size={15} aria-hidden />
            </IconLink>
          </ul>
        </div>

        <HeroPhoto />
      </Container>
    </section>
  );
}
