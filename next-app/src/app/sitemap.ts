import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://ericksixto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
