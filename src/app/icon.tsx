import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a18",
          color: "#4a7c59",
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontSize: 20,
          fontWeight: 500,
        }}
      >
        E
      </div>
    ),
    size,
  );
}
