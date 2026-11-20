import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-lg text-muted text-pretty">{body}</p> : null}
    </div>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 disabled:opacity-50";
const variants = {
  primary: "bg-button text-button-text font-semibold hover:bg-button-hover",
  secondary: "border border-accent/45 text-ink hover:border-accent hover:text-accent",
  ghost: "text-body hover:text-ink",
};

type ButtonLinkProps = ComponentProps<"a"> & { variant?: keyof typeof variants; external?: boolean };

export function ButtonLink({ variant = "primary", external, className = "", href = "#", ...rest }: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.endsWith(".pdf") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      />
    );
  }
  return <Link href={href} className={cls} {...rest} />;
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface/80 px-3 py-1 font-mono text-xs text-body">
      {children}
    </span>
  );
}
