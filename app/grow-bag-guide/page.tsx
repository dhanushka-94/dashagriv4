import Link from "next/link";
import type { Metadata } from "next";
import { ProductImageDisplay } from "@/components/product-image-display";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  closingMessage,
  guideIntro,
  growBagGuideMeta,
  howToUseSteps,
  howToUseTitle,
  nutrientStep,
  plantingInstructions,
  proTips,
  recommendedPlants,
  recommendedPlantsTitle,
  sunlightRequirement,
  wateringGuide,
} from "@/lib/grow-bag-guide-content";
import { getProductImage } from "@/lib/product";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const productImage = getProductImage();

export const metadata: Metadata = {
  title: growBagGuideMeta.title,
  description: growBagGuideMeta.description,
  alternates: { canonical: "/grow-bag-guide" },
  openGraph: {
    title: `${growBagGuideMeta.title} | ${site.name}`,
    description: growBagGuideMeta.description,
    url: `${siteUrl}/grow-bag-guide`,
    type: "article",
    images: [
      {
        url: absoluteUrl(productImage.src),
        width: 1200,
        height: 630,
        alt: productImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${growBagGuideMeta.title} | ${site.name}`,
    description: growBagGuideMeta.description,
    images: [absoluteUrl(productImage.src)],
  },
};

export default function GrowBagGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: howToUseTitle,
          description: growBagGuideMeta.description,
          url: `${siteUrl}/grow-bag-guide`,
          author: { "@type": "Organization", name: site.name, url: siteUrl },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="mx-auto w-full min-w-0 max-w-3xl px-4 sm:px-6 lg:max-w-4xl">
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
              <li className="text-foreground">Grow bag guide</li>
            </ol>
          </nav>

          <header className="mt-8 border-b border-coco-sand pb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-coco-leaf">
              Resource · {site.name}
            </p>
            <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl">
              {howToUseTitle}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-coco-muted">{guideIntro}</p>
            <p className="mt-4">
              <Link
                href="/product"
                className="text-sm font-semibold text-coco-husk hover:text-coco-husk-deep hover:underline"
              >
                View product specifications
              </Link>
              <span className="mx-2 text-coco-sand">·</span>
              <Link
                href="/contact"
                className="text-sm font-semibold text-coco-leaf hover:text-coco-husk hover:underline"
              >
                Contact us for supply
              </Link>
            </p>
          </header>

          <ProductImageDisplay
            src={productImage.src}
            alt={productImage.alt}
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="mx-auto mt-10"
          />

          <section className="mt-12" aria-labelledby="how-to-heading">
            <h2 id="how-to-heading" className="sr-only">
              Steps
            </h2>
            <ol className="space-y-4">
              {howToUseSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-coco-sand/80 bg-coco-cream/40 p-5 sm:p-6"
                >
                  <h3 className="font-semibold text-foreground">
                    <span className="text-coco-leaf">{index + 1}.</span> {step.title}
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
                    {step.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-12" aria-labelledby="plants-heading">
            <h2
              id="plants-heading"
              className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl"
            >
              {recommendedPlantsTitle}
            </h2>
            <ul className="mt-6 space-y-4">
              {recommendedPlants.map((group) => (
                <li
                  key={group.level}
                  className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-coco-husk-deep">{group.level}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted sm:text-base">
                    {group.plants.join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-serif text-xl font-semibold text-coco-husk-deep sm:text-2xl">
              {plantingInstructions.title}
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
              {plantingInstructions.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ol>
          </section>

          <section className="mt-8 rounded-2xl border border-coco-sand bg-coco-cream/40 p-5 sm:p-6">
            <h2 className="font-semibold text-foreground">{nutrientStep.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
              {nutrientStep.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-serif text-xl font-semibold text-coco-husk-deep">{wateringGuide.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
              {wateringGuide.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </section>

          <section className="mt-8 rounded-2xl border-2 border-coco-husk/20 bg-coco-cream/60 px-6 py-6">
            <h2 className="font-serif text-xl font-semibold text-coco-husk-deep">{sunlightRequirement.title}</h2>
            <p className="mt-3 text-base font-medium text-foreground">{sunlightRequirement.value}</p>
          </section>

          <section className="mt-12" aria-labelledby="tips-heading">
            <h2
              id="tips-heading"
              className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl"
            >
              Pro Tips
            </h2>
            <ul className="mt-6 space-y-3 rounded-2xl border border-coco-sand bg-white px-6 py-6 shadow-sm">
              {proTips.map((line) => (
                <li key={line} className="flex gap-3 text-coco-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <aside className="mt-12 rounded-2xl border border-coco-sand bg-coco-husk/5 px-6 py-8 text-center sm:px-10">
            <p className="font-serif text-xl font-semibold text-coco-husk-deep">{closingMessage.heading}</p>
            <p className="mt-3 font-serif text-2xl text-coco-leaf sm:text-3xl">
              &ldquo;{closingMessage.quote}&rdquo;
            </p>
          </aside>

          <div className="mt-12 flex flex-col gap-3 border-t border-coco-sand pt-10 sm:flex-row sm:flex-wrap">
            <Link
              href="/product"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/25 bg-white px-8 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50"
            >
              View product
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
