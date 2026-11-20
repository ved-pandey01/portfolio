import { ImageResponse } from "next/og";
import { palette } from "@/theme/palette";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: palette.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: palette.bg,
          fontSize: 40,
          fontWeight: 700,
        }}
      >
        V
      </div>
    ),
    size,
  );
}
