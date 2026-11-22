import Image from "next/image";
import { profile } from "@/content/site";

// Crop areas in the original photo's pixels (896 x 1200). The crop is done with
// CSS so the original file stays untouched; adjust these numbers to reframe.
const CROPS = {
  // Head to chest, a little space above the head, background visible.
  portrait: { x: 160, y: 120, w: 600, h: 733 },
  // Head and shoulders for the small circles.
  face: { x: 300, y: 175, w: 320, h: 320 },
};

type Props = {
  crop: keyof typeof CROPS;
  width: number; // rendered box size in CSS px
  height: number;
  className?: string;
  priority?: boolean;
};

export function Headshot({ crop, width, height, className = "", priority = false }: Props) {
  const c = CROPS[crop];
  const scale = width / c.w;
  const imgW = Math.round(profile.photo.width * scale);
  const imgH = Math.round(profile.photo.height * scale);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      <Image
        src={profile.photo.src}
        alt={profile.photo.alt}
        width={profile.photo.width}
        height={profile.photo.height}
        sizes={`${imgW}px`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        className="headshot-grade absolute max-w-none"
        style={{ width: imgW, height: imgH, left: -Math.round(c.x * scale), top: -Math.round(c.y * scale) }}
      />
    </div>
  );
}
