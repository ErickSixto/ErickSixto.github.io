import { ImageResponse } from "next/og";

// Required for `output: export` — prerender this image at build time.
export const dynamic = "force-static";

export const alt = "Erick Sixto — Salesforce Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Editorial OG card: warm oat canvas, charcoal wordmark, single gold accent.
// Mirrors the site's palette so shared links read as the same brand.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F1F1EF",
          color: "#2F2E2E",
          padding: "76px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#7E5618",
          }}
        >
          Erick Sixto · Salesforce Specialist
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Salesforce that doesn&apos;t fight your team.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 28,
              color: "#4B5563",
              maxWidth: 940,
              lineHeight: 1.4,
            }}
          >
            Senior Salesforce specialist. 7 years untangling orgs other consultants ducked.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            color: "#4B5563",
          }}
        >
          <div style={{ display: "flex", width: 44, height: 3, background: "#7E5618" }} />
          <div style={{ display: "flex" }}>ericksixto.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
