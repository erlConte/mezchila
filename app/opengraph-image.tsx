import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mezchila — Ponte tra Italia e America Latina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a18",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#b5a96e",
            fontSize: 22,
            marginBottom: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Italia · America Latina
        </div>
        <div
          style={{
            color: "#f5f0e8",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Mezchila
        </div>
        <div
          style={{
            color: "#f5f0e8",
            opacity: 0.6,
            fontSize: 28,
            maxWidth: 700,
          }}
        >
          Il ponte tra le due sponde dell'Atlantico per imprese, produzione e
          partnership.
        </div>
      </div>
    ),
    { ...size },
  );
}
