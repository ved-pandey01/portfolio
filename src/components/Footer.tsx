import Link from "next/link";
import { mailtoHref, profile } from "@/content/site";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="no-print border-t border-line py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={mailtoHref} className="text-accent hover:text-accent-hover">
            {profile.email}
          </a>
          <Link href="/recruiters" className="hover:text-ink">
            Recruiter summary
          </Link>
                  </p>
      </Container>
    </footer>
  );
}
