import type { MetadataRoute } from "next";
import { articles } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zahin.ai";

  const journalEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    lastModified: new Date(a.dateModified || a.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/journal`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...journalEntries,
    { url: `${baseUrl}/join`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/whitepaper`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
