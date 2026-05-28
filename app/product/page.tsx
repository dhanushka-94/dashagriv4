import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProductImageDisplay } from "@/components/product-image-display";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCT, getBrochureImage, getProductImage } from "@/lib/product";
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
    images: [{ url: absoluteUrl(getProductImage().src), width: 1200, height: 630, alt: getProductImage().alt }],
  },
};

export default function ProductPage() {
  const { src, alt } = getProductImage();
  const brochure = getBrochureImage();
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
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Product"
          title={PRODUCT.title}
          description={PRODUCT.tagline}
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Product" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <p className="text-center font-serif text-xl font-semibold text-coco-leaf sm:text-2xl">
              {PRODUCT.slogan}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <ProductImageDisplay src={src} alt={alt} priority className="min-w-0" />
              <figure className="min-w-0 overflow-hidden rounded-2xl border border-coco-sand bg-white p-4 shadow-md sm:p-6">
                <div className="relative aspect-[4/3] w-full min-w-0">
                  <Image
                    src={brochure.src}
                    alt={brochure.alt}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm text-coco-muted">Product brochure</figcaption>
              </figure>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-start">
              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl">
                  Specifications
                </h2>
                <dl className="mt-6 divide-y divide-coco-sand rounded-2xl border border-coco-sand bg-white shadow-sm">
                  {PRODUCT.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,8.5rem)_1fr] sm:gap-4 sm:px-6"
                    >
                      <dt className="text-sm font-semibold uppercase tracking-wide text-coco-husk-deep">
                        {spec.label}
                      </dt>
                      <dd className="break-words text-sm leading-relaxed text-coco-muted sm:text-base">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="min-w-0">
                <p className="text-lg text-coco-muted">{PRODUCT.shortDesc}</p>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-coco-muted">
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
                How to use your grow bag
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
