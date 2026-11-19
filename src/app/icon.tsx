import { ImageResponse } from "next/og";

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
          background: "linear-gradient(135deg, #3b82f6, #10b981)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
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
