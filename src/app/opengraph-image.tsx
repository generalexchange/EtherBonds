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
          background: "radial-gradient(circle at top left, #2c2c2a, #1a1a18)",
          color: "#f7f5f1",
          fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 14,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#4a7c59",
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
            color: "rgba(247, 245, 241, 0.72)",
            maxWidth: 720,
            fontFamily: "Georgia, Cambria, 'Times New Roman', serif",
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
