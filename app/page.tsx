import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { ProductSpotlight } from "@/components/product-spotlight";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCT } from "@/lib/product";
import { absoluteUrl, defaultDescription, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { HERO_BACKGROUND } from "@/lib/site-images";

export const metadata: Metadata = {
  title: `${PRODUCT.title} from Sri Lanka`,
  description: PRODUCT.shortDesc,
  alternates: { canonical: "/" },
  openGraph: {
    url: siteUrl,
    title: `${site.name} | ${PRODUCT.title}`,
    description: PRODUCT.shortDesc,
    type: "website",
    images: [
      {
        url: absoluteUrl(HERO_BACKGROUND),
        width: 1200,
        height: 630,
        alt: "Commercial greenhouse with cocopeat grow bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${PRODUCT.title}`,
    description: PRODUCT.shortDesc,
    images: [absoluteUrl(HERO_BACKGROUND)],
  },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <ProductSpotlight />
      </main>
      <SiteFooter />
    </>
  );
}
