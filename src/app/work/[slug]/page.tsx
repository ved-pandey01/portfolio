import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Backdrop } from "@/components/Backdrop";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { Container } from "@/components/ui";
import { caseStudies } from "@/content/site";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.id === slug);
  if (!study) return {};
  const title = `${study.name} case study`;
  return {
    title,
    description: study.tagline,
    alternates: { canonical: `/work/${study.id}` },
    openGraph: { title, description: study.tagline, url: `/work/${study.id}` },
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.id === slug);
  if (index === -1) notFound();
  const study = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <main id="main" className="section pb-16 pt-24 sm:pb-20 sm:pt-28">
      <Backdrop glow="right" growth />
      <Container>
        <Link href="/#work" className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent">
          <ArrowLeft size={15} aria-hidden /> All work
        </Link>

        <CaseStudyDetail study={study} index={index} />

        {next.id !== study.id ? (
          <nav aria-label="More work" className="mt-16 border-t border-line pt-8">
            <Link
              href={`/work/${next.id}`}
              className="card depth glow-card group flex items-center justify-between gap-4 p-6"
            >
              <span>
                <span className="block font-mono text-xs uppercase tracking-widest text-muted">Next project</span>
                <span className="mt-1 block font-display text-2xl font-semibold text-ink">{next.name}</span>
              </span>
              <ArrowRight size={22} aria-hidden className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>
        ) : null}
      </Container>
    </main>
  );
}
