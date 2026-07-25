import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://oveey.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const work = projects
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({
      url: `${BASE}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    ...work,
  ];
}
