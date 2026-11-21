import Link from "next/link";
import { nav } from "@/content/site";

// Phones only: a small pill bar fixed to the bottom of the screen.
export function MobileTabBar() {
  return (
    <nav
      aria-label="Sections"
      className="no-print fixed inset-x-0 z-50 flex justify-center px-4 md:hidden"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <ul className="flex items-center gap-1 rounded-full border border-line bg-raised/95 p-1 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.8)] backdrop-blur-xl">
        {nav.map((n) => (
          <li key={n.href}>
            <Link
              href={n.href}
              className="block rounded-full px-4 py-2 text-sm text-body transition-colors hover:text-accent active:bg-surface"
            >
              {n.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
