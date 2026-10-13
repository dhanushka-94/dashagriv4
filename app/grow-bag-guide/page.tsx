import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/page-header";
import { QuoteButton } from "@/components/quote-contact-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  guideConfirmationNote,
  guideIntro,
  growBagGuideMeta,
  howToUseSteps,
  howToUseTitle,
} from "@/lib/grow-bag-guide-content";
import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: growBagGuideMeta.title,
  description: growBagGuideMeta.description,
  alternates: { canonical: "/grow-bag-guide" },
  openGraph: {
    title: `${growBagGuideMeta.title} | ${site.name}`,
    description: growBagGuideMeta.description,
    url: `${siteUrl}/grow-bag-guide`,
    type: "article",
  },
};

export default function GrowBagGuidePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: howToUseTitle,
          description: growBagGuideMeta.description,
          url: `${siteUrl}/grow-bag-guide`,
          step: howToUseSteps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.title,
            text: step.points.join(" "),
          })),
        }}
      />
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Growing guide"
          title={howToUseTitle}
          description={guideIntro}
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Growing guide" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full min-w-0 max-w-3xl px-4 sm:px-6">
            <ol className="space-y-4">
              {howToUseSteps.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
                  <h2 className="font-semibold text-foreground">
                    <span className="text-coco-leaf">Step {index + 1} — </span>
                    {step.title}
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted sm:text-base">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-8 rounded-2xl border border-coco-sand bg-coco-cream/70 px-5 py-4 text-sm leading-relaxed text-coco-muted">
              {guideConfirmationNote}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto">
                Request a Bulk Quote
              </QuoteButton>
              <Link
                href="/specifications"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-coco-husk/25 px-8 text-base font-semibold text-coco-husk sm:w-auto"
              >
                Technical specifications
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
