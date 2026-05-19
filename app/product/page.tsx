import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCT, getProductImage } from "@/lib/product";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: PRODUCT.title,
  description: PRODUCT.shortDesc,
  alternates: { canonical: "/product" },
  openGraph: {
    title: `${PRODUCT.title} | ${site.name}`,
    description: PRODUCT.shortDesc,
    url: `${siteUrl}/product`,
    type: "website",
    images: [{ url: absoluteUrl(getProductImage().src), width: 800, height: 800, alt: getProductImage().alt }],
  },
};

export default function ProductPage() {
  const { src, alt } = getProductImage();
  const imageAbsolute = absoluteUrl(src);

  return (
    <>
      <JsonLd data={productJsonLd(PRODUCT, imageAbsolute)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: siteUrl },
          { name: "Product", item: `${siteUrl}/product` },
        ])}
      />
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="Product"
          title={PRODUCT.title}
          description={PRODUCT.tagline}
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Product" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-coco-sand bg-coco-sand/40 shadow-md">
                <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              </div>
              <div className="min-w-0">
                <p className="text-lg text-coco-muted">{PRODUCT.shortDesc}</p>
                <div className="mt-8 space-y-5 text-base leading-relaxed text-coco-muted">
                  {PRODUCT.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <ul className="mt-8 space-y-3">
                  {PRODUCT.highlights.map((line) => (
                    <li key={line} className="flex gap-3 text-coco-muted">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl">
                Available pack formats
              </h2>
              <p className="mt-3 max-w-2xl text-coco-muted">
                One premium cocopeat product—supplied in the format and weight class that fits your farm,
                greenhouse, or supply chain.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PRODUCT.formats.map((format) => (
                  <li
                    key={format.name}
                    className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6"
                  >
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-coco-husk-deep">
                      {format.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-coco-muted">{format.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-coco-sand pt-10 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep"
              >
                Request a quote
              </Link>
              <Link
                href="/grow-bag-guide"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/25 px-8 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50"
              >
                Grow bag planting guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
