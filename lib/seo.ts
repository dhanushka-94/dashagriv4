import type { ProductData } from "@/lib/product";
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
  "DashAgri supplies compressed coco coir grow bags—70% washed coco chips and 30% low-EC coco pith—for commercial greenhouse, nursery, and hydroponic growers.";

export const seoKeywords = [
  "coco coir grow bag",
  "coco coir growing media",
  "commercial greenhouse coco coir",
  "hydroponic coco coir",
  "low EC coco pith",
  "buffered coco coir",
  "DashAgri",
  "Dash Trading Inc",
  "wholesale coco coir",
] as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    brand: site.name,
    url: siteUrl,
    logo: absoluteUrl("/icon.svg"),
    description: defaultDescription,
    email: site.email,
    areaServed: [...site.regions],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Simi Valley",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@type": "Organization", name: site.company, url: siteUrl },
  };
}

export function productJsonLd(product: ProductData, imageAbsoluteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: [imageAbsoluteUrl, absoluteUrl(product.brochureSrc)],
    brand: { "@type": "Brand", name: site.name },
    category: "Growing media — coco coir grow bag",
    additionalProperty: product.specs
      .filter((spec) => !spec.pending)
      .map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; item: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}
