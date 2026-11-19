"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Copy,
  Download,
  FileText,
  Mail,
  Sparkles,
  User,
} from "lucide-react";
import { caseStudies, nav, profile } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const OPEN_COMMAND_MENU = "open-command-menu";

type Action = { label: string; hint?: string; icon: React.ReactNode; run: () => void };

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, []);

  const go = useCallback(
    (fn: () => void) => () => {
      setOpen(false);
      fn();
    },
    [],
  );

  const openUrl = (href: string) => window.open(href, "_blank", "noopener,noreferrer");

  const navigate: Action[] = [
    ...nav.map((n) => ({ label: n.label, icon: <ArrowRight size={16} />, run: () => router.push(n.href) })),
    { label: "Recruiter summary", hint: "/recruiters", icon: <User size={16} />, run: () => router.push("/recruiters") },
  ];

  const work: Action[] = caseStudies.flatMap((c) => [
    { label: c.name, hint: "Case study", icon: <Briefcase size={16} />, run: () => router.push(`/#${c.id}`) },
    ...c.links
      .filter((l) => !l.placeholder)
      .map((l) => ({
        label: `${c.name} on ${l.label}`,
        icon: l.label === "GitHub" ? <GithubIcon size={16} /> : <Sparkles size={16} />,
        run: () => openUrl(l.href),
      })),
  ]);

  const contact: Action[] = [
    { label: "Download CV", icon: <Download size={16} />, run: () => window.open(profile.cv, "_blank") },
    {
      label: "Copy email address",
      hint: profile.email,
      icon: <Copy size={16} />,
      run: () => {
        navigator.clipboard?.writeText(profile.email).then(() => {
          setToast("Email copied");
          setTimeout(() => setToast(""), 2000);
        });
      },
    },
    { label: "Send an email", icon: <Mail size={16} />, run: () => window.location.assign(`mailto:${profile.email}`) },
    { label: "LinkedIn", icon: <LinkedinIcon size={16} />, run: () => openUrl(profile.linkedin) },
    { label: "GitHub", icon: <GithubIcon size={16} />, run: () => openUrl(profile.github) },
  ];

  const groups: [string, Action[]][] = [
    ["Navigate", navigate],
    ["Work", work],
    ["Contact", contact],
  ];

  return (
    <>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Quick menu"
        overlayClassName="fixed inset-0 z-[90] bg-bg/70 backdrop-blur-sm"
        contentClassName="fixed left-1/2 top-[14vh] z-[91] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-line-2 bg-surface/95 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8),0_0_0_1px_rgb(59_130_246/0.15)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <FileText size={16} className="text-muted" aria-hidden />
          <Command.Input
            placeholder="Jump to a section, open a link..."
            className="h-13 w-full bg-transparent py-4 text-[15px] text-ink placeholder:text-muted focus:outline-none"
          />
          <kbd className="hidden rounded border border-line-2 px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">ESC</kbd>
        </div>
        <Command.List className="max-h-[60vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted">No results.</Command.Empty>
          {groups.map(([heading, items]) => (
            <Command.Group
              key={heading}
              heading={heading}
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-muted"
            >
              {items.map((a) => (
                <Command.Item
                  key={`${heading}-${a.label}`}
                  value={`${heading} ${a.label}`}
                  onSelect={go(a.run)}
                  className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-body data-[selected=true]:bg-blue/15 data-[selected=true]:text-ink"
                >
                  <span className="text-muted">{a.icon}</span>
                  <span className="flex-1">{a.label}</span>
                  {a.hint ? <span className="truncate font-mono text-xs text-muted">{a.hint}</span> : null}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
        </Command.List>
      </Command.Dialog>
      <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-6 left-1/2 z-[95] -translate-x-1/2">
        {toast ? (
          <span className="rounded-full border border-emerald/40 bg-surface px-4 py-2 text-sm text-ink shadow-lg">{toast}</span>
        ) : null}
      </div>
    </>
  );
}
