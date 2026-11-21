import type { MetadataRoute } from "next";
import { caseStudies, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/recruiters`, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies.map((c) => ({ url: `${siteUrl}/work/${c.id}`, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
