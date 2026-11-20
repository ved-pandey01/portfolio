import Link from "next/link";
import { profile } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="no-print border-t border-line py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p className="flex gap-5">
          <Link href="/recruiters" className="hover:text-ink">
            Recruiter summary
          </Link>
          <span>Built with Next.js</span>
        </p>
      </Container>
    </footer>
  );
}
