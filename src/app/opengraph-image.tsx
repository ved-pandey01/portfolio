import { ImageResponse } from "next/og";
import { profile } from "@/content/site";

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
          background: "radial-gradient(ellipse 70% 60% at 50% 0%, #1e3a8a 0%, #0b1120 70%)",
          color: "#cbd5e1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #3b82f6, #10b981)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            V
          </div>
          <div style={{ fontSize: 28, color: "white" }}>{profile.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "white", letterSpacing: -2, lineHeight: 1.05 }}>
            {profile.headline.lead}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#60a5fa", letterSpacing: -2, lineHeight: 1.05 }}>
            {profile.headline.accent}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
          <div style={{ color: "#34d399" }}>{profile.positioning}</div>
          <div>{profile.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
