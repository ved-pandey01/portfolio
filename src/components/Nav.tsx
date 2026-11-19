"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Command as CommandIcon } from "lucide-react";
import { nav, profile } from "@/content/site";
import { OPEN_COMMAND_MENU } from "./CommandMenu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-b border-line/80 bg-bg/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5 text-sm font-semibold text-ink">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-blue to-emerald font-display text-[13px] font-bold text-white shadow-[0_0_20px_-4px_rgb(59_130_246/0.7)]"
          >
            V
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.shortName}</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/recruiters"
            className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            Recruiters
          </Link>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_MENU))}
            className="flex items-center gap-1.5 rounded-full border border-line-2 bg-surface/60 px-3 py-1.5 text-sm text-body transition-colors hover:border-blue-soft/60 hover:text-ink"
            aria-label="Open quick menu (Command K)"
          >
            <CommandIcon size={14} aria-hidden />
            <span className="font-mono text-xs">K</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
