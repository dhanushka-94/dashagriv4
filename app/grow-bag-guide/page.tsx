import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  benefitsOfCocoPeat,
  growBagGuideMeta,
  howToUseSteps,
  importantConsideration,
  suitableCrops,
} from "@/lib/grow-bag-guide-content";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { HERO_BACKGROUND } from "@/lib/site-images";

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
        url: absoluteUrl(HERO_BACKGROUND),
        width: 1200,
        height: 630,
        alt: "Greenhouse cultivation with grow bags and cocopeat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${growBagGuideMeta.title} | ${site.name}`,
    description: growBagGuideMeta.description,
    images: [absoluteUrl(HERO_BACKGROUND)],
  },
};

export default function GrowBagGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Grow bag planting guide (coco peat based)",
          description: growBagGuideMeta.description,
          url: `${siteUrl}/grow-bag-guide`,
          author: { "@type": "Organization", name: site.name, url: siteUrl },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
      <SiteHeader />
      <main className="flex-1 pb-16 pt-8 sm:pb-24 sm:pt-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl">
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
              Resource · Coco peat
            </p>
            <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl">
              Grow bag planting guide{" "}
              <span className="text-coco-leaf">(coco peat based)</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-coco-muted">
              Practical steps for {site.name} grow bags filled with coco peat—crop ideas, setup,
              feeding, and watering so you get strong, healthy plants on patios, rooftops, and in the
              greenhouse.
            </p>
            <p className="mt-4">
              <Link
                href="/#products"
                className="text-sm font-semibold text-coco-husk hover:text-coco-husk-deep hover:underline"
              >
                ← View cocopeat products
              </Link>
              <span className="mx-2 text-coco-sand">·</span>
              <Link
                href="/#contact"
                className="text-sm font-semibold text-coco-leaf hover:text-coco-husk hover:underline"
              >
                Contact us for supply
              </Link>
            </p>
          </header>

          <section className="mt-12" aria-labelledby="suitable-crops-heading">
            <h2
              id="suitable-crops-heading"
              className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl"
            >
              Suitable crops
            </h2>
            <p className="mt-3 text-coco-muted">
              Match crops to slot use—some crops share an opening; others need one plant per hole.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {suitableCrops.map((block) => (
                <article
                  key={block.title}
                  className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-coco-husk-deep">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-coco-muted sm:text-base">{block.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16" aria-labelledby="how-to-heading">
            <h2
              id="how-to-heading"
              className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl"
            >
              How to use the grow bag
            </h2>
            <p className="mt-3 max-w-2xl text-coco-muted">
              Follow these steps in order—from hydrating the medium to choosing a sunny spot.
            </p>
            <ol className="mt-8 space-y-4">
              {howToUseSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-coco-sand/80 bg-coco-cream/40 p-5 sm:gap-5 sm:p-6"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coco-husk text-sm font-bold text-white"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
                      {step.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16" aria-labelledby="benefits-heading">
            <h2
              id="benefits-heading"
              className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl"
            >
              Benefits of using coco peat
            </h2>
            <ul className="mt-6 space-y-3 rounded-2xl border border-coco-sand bg-white px-6 py-6 shadow-sm">
              {benefitsOfCocoPeat.map((line) => (
                <li key={line} className="flex gap-3 text-coco-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <aside
            className="mt-12 rounded-2xl border-2 border-coco-husk/25 bg-coco-cream/80 px-6 py-6 sm:px-8"
            aria-labelledby="important-heading"
          >
            <h2 id="important-heading" className="font-serif text-lg font-semibold text-coco-husk-deep">
              Important consideration
            </h2>
            <p className="mt-3 text-base leading-relaxed text-coco-muted">{importantConsideration}</p>
          </aside>

          <div className="mt-12 flex flex-col gap-3 border-t border-coco-sand pt-10 sm:flex-row sm:flex-wrap">
            <Link
              href="/#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/25 bg-white px-8 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50"
            >
              Explore products
            </Link>
            <Link
              href="/#contact"
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
