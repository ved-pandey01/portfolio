import { ImageResponse } from "next/og";
import { profile } from "@/content/site";
import { palette } from "@/theme/palette";

export const alt = `${profile.name}: ${profile.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: palette.bg,
          color: palette.text,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              border: `2px solid ${palette.accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: palette.accent,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            V
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: palette.heading, letterSpacing: -3, lineHeight: 1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 56, color: palette.accent, fontStyle: "italic", letterSpacing: -1, lineHeight: 1.1 }}>
            {profile.positioning}
          </div>
        </div>
        <div style={{ display: "flex" }} />
      </div>
    ),
    size,
  );
}
