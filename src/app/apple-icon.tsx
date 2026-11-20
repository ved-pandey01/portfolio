import { ImageResponse } from "next/og";
import { palette } from "@/theme/palette";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: palette.bg,
          border: `3px solid ${palette.accent}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: palette.accent,
          fontSize: 110,
          fontWeight: 700,
        }}
      >
        V
      </div>
    ),
    size,
  );
}
