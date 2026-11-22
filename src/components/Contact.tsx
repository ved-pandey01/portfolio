import { ArrowUpRight, CalendarDays, Download, Mail } from "lucide-react";
import { contact, mailtoHref, profile } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Container, Eyebrow } from "./ui";
import { Backdrop } from "./Backdrop";

const rowCls =
  "depth group flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors sm:p-5";

export function ContactLinks() {
  return (
    <ul className="flex flex-col gap-3">
      <li className={rowCls}>
        <Mail size={20} aria-hidden className="text-accent" />
        <a href={mailtoHref} className="min-w-0 flex-1 truncate text-ink hover:text-accent">
          <span className="block text-xs text-muted">Email</span>
          {profile.email}
        </a>
        <CopyEmail email={profile.email} />
      </li>
      {[
        { label: "Book a call", value: "15-minute call", href: profile.bookingUrl, icon: <CalendarDays size={20} aria-hidden className="text-accent" /> },
        { label: "LinkedIn", value: "Ved Prakash Pandey", href: profile.linkedin, icon: <LinkedinIcon size={20} className="text-accent" /> },
        { label: "GitHub", value: "ved-pandey01", href: profile.github, icon: <GithubIcon size={20} className="text-accent" /> },
      ].map((l) => (
        <li key={l.label}>
          <a href={l.href} target="_blank" rel="noopener noreferrer" className={rowCls}>
            {l.icon}
            <span className="flex-1">
              <span className="block text-xs text-muted">{l.label}</span>
              <span className="text-ink">{l.value}</span>
            </span>
            <ArrowUpRight size={18} aria-hidden className="text-muted transition-colors group-hover:text-ink" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
      <li>
        <a href={profile.cv} download className={rowCls}>
          <Download size={20} aria-hidden className="text-accent" />
          <span className="flex-1">
            <span className="block text-xs text-muted">CV</span>
            <span className="text-ink">Download PDF</span>
          </span>
          <ArrowUpRight size={18} aria-hidden className="text-muted transition-colors group-hover:text-ink" />
        </a>
      </li>
    </ul>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section scroll-mt-16 py-12 sm:py-16">
      <Backdrop divider rising />
      <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 id="contact-title" className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{contact.body}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactLinks />
        </Reveal>
      </Container>
    </section>
  );
}
