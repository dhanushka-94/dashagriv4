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
  "Dash Agri Coco peat grow bags from Sri Lanka—70% washed coco chips, 30% low EC coco pith, low salinity, and supply across Sri Lanka and Canada.";

export const seoKeywords = [
  "coco peat grow bag",
  "cocopeat grow bag",
  "coconut coir grow bag",
  "Sri Lanka cocopeat",
  "low EC coco peat",
  "balcony gardening",
  "kitchen garden",
  "Dash Agri Coco",
  "DashAgri Coco",
  "horticulture",
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

export function productJsonLd(product: ProductData, imageAbsoluteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.shortDesc,
    image: [imageAbsoluteUrl, absoluteUrl(product.brochureSrc)],
    brand: { "@type": "Brand", name: site.name },
    category: "Growing media — coco peat grow bag",
    additionalProperty: [
      ...product.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
      ...product.highlights.map((text) => ({
        "@type": "PropertyValue",
        name: "Feature",
        value: text,
      })),
    ],
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
