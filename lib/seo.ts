import type { Product } from "@/lib/products";
import { site } from "@/lib/site";

/**
 * Production site origin — set `NEXT_PUBLIC_SITE_URL` in your host (e.g. Vercel env)
 * to your real domain so canonical URLs, Open Graph, sitemap, and JSON-LD are correct.
 */
export const siteUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL.length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
    : "https://www.dashagricoco.com";

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${p}`;
}

export const defaultDescription =
  "High-quality organic cocopeat from Sri Lanka—5kg blocks, 650g briquettes, and 25–1000kg bales. Serving agriculture and horticulture in Sri Lanka, the USA, and Canada.";

export const seoKeywords = [
  "cocopeat",
  "coconut coir",
  "grow media",
  "Sri Lanka cocopeat",
  "organic substrate",
  "greenhouse growing media",
  "cocopeat bales",
  "cocopeat briquettes",
  "DashAgri Coco",
  "horticulture",
  "agriculture",
] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    logo: absoluteUrl("/icon.svg"),
    description: defaultDescription,
    sameAs: [site.social.facebook, site.social.youtube].filter(Boolean),
    areaServed: [...site.regions],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@type": "Organization", name: site.name, url: siteUrl },
  };
}

export function productJsonLd(product: Product, imageAbsoluteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: [imageAbsoluteUrl],
    brand: { "@type": "Brand", name: site.name },
    category: "Growing media — cocopeat / coconut coir",
    additionalProperty: product.highlights.map((text) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: text,
    })),
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; item: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((el, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: el.name,
      item: el.item,
    })),
  };
}
