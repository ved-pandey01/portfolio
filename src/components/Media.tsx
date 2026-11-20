import { ImageIcon, PlayCircle } from "lucide-react";
import type { CaseStudy } from "@/content/site";
import { ZoomableImage } from "./ZoomableImage";

function Frame({ children, title, champagne = false }: { children: React.ReactNode; title: string; champagne?: boolean }) {
  return (
    <div className={`card depth depth-static overflow-hidden p-0 ${champagne ? "frame-champagne" : ""}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="ml-2 truncate font-mono text-xs text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}

function ComingSoon({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      role="img"
      aria-label={text}
      className="grid aspect-video place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_12px,var(--accent-soft)_12px_13px)]"
    >
      <div className="flex flex-col items-center gap-2 text-muted">
        {icon}
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
}

export function Screenshot({ study }: { study: CaseStudy }) {
  return (
    <Frame title={study.name} champagne>
      {study.screenshot ? (
        <ZoomableImage
          src={study.screenshot.src}
          alt={study.screenshot.alt}
          width={study.screenshot.width}
          height={study.screenshot.height}
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      ) : (
        <ComingSoon icon={<ImageIcon size={28} aria-hidden />} text="Screenshot coming soon" />
      )}
    </Frame>
  );
}

function loomEmbed(url: string) {
  return url.replace("/share/", "/embed/");
}

export function Loom({ study }: { study: CaseStudy }) {
  return (
    <Frame title={`${study.name} walkthrough`}>
      {study.loom ? (
        <div className="aspect-video">
          <iframe
            src={loomEmbed(study.loom)}
            title={`${study.name} walkthrough video`}
            loading="lazy"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <ComingSoon icon={<PlayCircle size={28} aria-hidden />} text="Loom walkthrough coming soon" />
      )}
    </Frame>
  );
}
