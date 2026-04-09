import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zahin — Building Pakistan's Intellect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FAF7F2 0%, #f0ebe0 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Geometric grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "repeating-conic-gradient(from 0deg at 50% 50%, #01796f 0deg 60deg, transparent 60deg 120deg)",
            backgroundSize: "40px 35px",
            opacity: 0.04,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
          <div style={{ fontSize: 28, color: "#01796F", letterSpacing: "0.2em", opacity: 0.7 }}>
            ذہین
          </div>
          <div style={{ fontSize: 120, fontWeight: 800, color: "#1A1A2E", letterSpacing: "-2px", fontFamily: "Georgia, serif", lineHeight: 1 }}>
            zahin
          </div>
          <div style={{ fontSize: 18, color: "#01796F", letterSpacing: "0.25em", textTransform: "uppercase" as const, marginTop: 12 }}>
            Building Pakistan&apos;s Intellect
          </div>
          <div style={{ fontSize: 22, color: "#1A1A2E", opacity: 0.5, marginTop: 32, maxWidth: 700, textAlign: "center" as const, lineHeight: 1.5 }}>
            Pakistan has 240 million people and zero sovereign AI. We&apos;re changing that.
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #01796F, #C4956A, #01796F)" }} />
      </div>
    ),
    { ...size }
  );
}
