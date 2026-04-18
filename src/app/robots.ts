import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/brief", "/brief/"] },
    ],
    sitemap: "https://zahin.ai/sitemap.xml",
  };
}
