import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/site";
import { palette } from "@/theme/palette";

export const alt = `${profile.name}: ${profile.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same head-and-shoulders crop as the round photos on the site (see components/Headshot.tsx).
const FACE = { x: 300, y: 175, w: 320 };
const CIRCLE = 320;

export default async function OgImage() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo.src));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const scale = CIRCLE / FACE.w;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 72,
          background: palette.bg,
          color: palette.text,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 680 }}>
          <div style={{ fontSize: 80, fontWeight: 700, color: palette.heading, letterSpacing: -2.5, lineHeight: 1.02 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 46, color: palette.accent, letterSpacing: -1, lineHeight: 1.15 }}>
            {profile.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: CIRCLE + 16,
            height: CIRCLE + 16,
            borderRadius: 9999,
            border: `2px solid ${palette.accent}`,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "relative",
              width: CIRCLE,
              height: CIRCLE,
              borderRadius: 9999,
              overflow: "hidden",
            }}
          >
            <img
              src={src}
              alt=""
              width={Math.round(profile.photo.width * scale)}
              height={Math.round(profile.photo.height * scale)}
              style={{
                position: "absolute",
                left: -Math.round(FACE.x * scale),
                top: -Math.round(FACE.y * scale),
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
