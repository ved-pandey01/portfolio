import Image from "next/image";
import { ImageIcon, PlayCircle } from "lucide-react";
import type { CaseStudy } from "@/content/site";

function Frame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="card overflow-hidden p-0 shadow-[0_30px_80px_-30px_rgb(59_130_246/0.35)]">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-2" />
          <span className="size-2.5 rounded-full bg-line-2" />
          <span className="size-2.5 rounded-full bg-line-2" />
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
      className="grid aspect-video place-items-center bg-[repeating-linear-gradient(135deg,transparent_0_12px,rgb(148_163_184/0.04)_12px_13px)]"
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
    <Frame title={study.name}>
      {study.screenshot ? (
        <Image
          src={study.screenshot.src}
          alt={study.screenshot.alt}
          width={study.screenshot.width}
          height={study.screenshot.height}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="h-auto w-full"
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
