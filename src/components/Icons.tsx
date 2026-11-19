import { siGithub } from "simple-icons";

type Props = { size?: number; className?: string };

export function GithubIcon({ size = 16, className }: Props) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden fill="currentColor">
      <path d={siGithub.path} />
    </svg>
  );
}

// simple-icons does not include LinkedIn, so this is a neutral "in" mark, not the brand asset.
export function LinkedinIcon({ size = 16, className }: Props) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
      <rect x="1.5" y="1.5" width="21" height="21" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <text x="12" y="16.6" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif" fill="currentColor">
        in
      </text>
    </svg>
  );
}
