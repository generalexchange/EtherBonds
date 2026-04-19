import { ImageResponse } from "next/og";

export const alt = "EtherBonds — Infrastructure as Pension";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "radial-gradient(circle at top left, #0A1628, #050B14)",
          color: "#FAFAF7",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 14,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#0ABAB5",
            marginBottom: 24,
          }}
        >
          ETHERBONDS
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 900,
          }}
        >
          <div style={{ display: "flex" }}>Pensions,</div>
          <div style={{ display: "flex" }}>
            <span style={{ fontStyle: "italic" }}>reimagined</span>
            <span> as</span>
          </div>
          <div style={{ display: "flex" }}>sovereign infrastructure.</div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 18,
            lineHeight: 1.6,
            color: "rgba(250, 250, 247, 0.72)",
            maxWidth: 720,
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
          }}
        >
          {
            "Decentralised pensions, secured by Ethereum. Backed by real computational yield."
          }
        </div>
      </div>
    ),
    size,
  );
}
