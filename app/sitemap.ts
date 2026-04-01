import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const home = {
    url: siteUrl,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1,
  };

  const productEntries: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${siteUrl}/products/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [home, ...productEntries];
}
