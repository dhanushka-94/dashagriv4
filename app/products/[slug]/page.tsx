import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getAllProductSlugs, getProductBySlug, getProductImage } from "@/lib/products";
import { absoluteUrl, breadcrumbJsonLd, productJsonLd, siteUrl } from "@/lib/seo";
import { getProductImageAlt } from "@/lib/site-images";
import { site } from "@/lib/site";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };

  const { src } = getProductImage(product);
  const imageUrl = absoluteUrl(src);
  const pageUrl = `${siteUrl}/products/${slug}`;
  const title = `${product.title} — cocopeat pack`;

  return {
    title,
    description: product.shortDesc,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.title} | ${site.name}`,
      description: product.shortDesc,
      url: pageUrl,
      type: "website",
      images: [
        { url: imageUrl, width: 800, height: 800, alt: getProductImageAlt(product.imageIndex) },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | ${site.name}`,
      description: product.shortDesc,
      images: [imageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const { src, alt } = getProductImage(product);
  const imageAbsolute = absoluteUrl(src);

  return (
    <>
      <JsonLd data={productJsonLd(product, imageAbsolute)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", item: siteUrl },
          { name: "Products", item: `${siteUrl}/#products` },
          { name: product.title, item: `${siteUrl}/products/${slug}` },
        ])}
      />
      <SiteHeader />
      <main className="flex-1 pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <nav className="text-sm text-coco-muted" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="font-medium text-coco-leaf hover:text-coco-husk">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-coco-sand">
                /
              </li>
              <li>
                <Link href="/#products" className="font-medium text-coco-leaf hover:text-coco-husk">
                  Products
                </Link>
              </li>
              <li aria-hidden className="text-coco-sand">
                /
              </li>
              <li className="text-foreground">{product.title}</li>
            </ol>
          </nav>

          <div className="mt-8 overflow-hidden rounded-2xl border border-coco-sand bg-coco-sand/40 shadow-sm">
            <div className="relative mx-auto aspect-square w-full max-w-lg sm:max-w-none">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </div>

          <h1 className="mt-10 font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl">
            {product.title}
          </h1>
          <p className="mt-4 text-lg text-coco-muted">{product.shortDesc}</p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-coco-muted">
            {product.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-coco-sand bg-coco-cream/60 px-5 py-6 sm:px-8">
            <h2 className="font-serif text-lg font-semibold text-coco-husk-deep">Highlights</h2>
            <ul className="mt-4 space-y-3 text-coco-muted">
              {product.highlights.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#contact"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:flex-none"
            >
              Request a quote
            </Link>
            <Link
              href="/#products"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-coco-husk/25 bg-white px-8 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50 sm:flex-none"
            >
              All products
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
