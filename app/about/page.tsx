import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { QuoteButton } from "@/components/quote-contact-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { ABOUT_IMAGE } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About us",
  description:
    "DashAgri is an agricultural growing-media business operated by Dash Trading Inc. in Simi Valley, California.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="About"
          title="About DashAgri"
          description="Coco coir growing media for commercial agricultural applications."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16">
              <div className="min-w-0 space-y-5 text-base leading-relaxed text-coco-muted sm:text-lg">
                <p>
                  At DashAgri, our goal is to provide reliable coco coir growing media for commercial
                  agricultural applications. Our coco coir grow bags use a blend of washed coco chips and
                  low-EC coco pith, selected to support moisture management and root-zone aeration.
                </p>
                <p>
                  DashAgri is an agricultural growing-media business operated by{" "}
                  <strong className="font-medium text-foreground">{site.company}</strong>, USA. We work with
                  commercial growers, nurseries, greenhouses, and agricultural distributors interested in coco
                  coir growing solutions.
                </p>
                <ul className="space-y-2 text-base">
                  <li>70% washed coco chips / 30% low-EC coco pith</li>
                  <li>EC below 1.0 mS/cm</li>
                  <li>pH range 5.5–6.5</li>
                  <li>Buffered coco coir</li>
                </ul>
                <p>
                  Product testing documentation and additional technical information can be requested from our
                  sales team, subject to availability. Origin, supplier, and ship-from location are not stated
                  here until they are confirmed.
                </p>
                <p>
                  For technical questions, commercial quantities, pricing, and delivery inquiries, contact the
                  DashAgri team through the wholesale inquiry form.
                </p>
                <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto">
                  Request a Bulk Quote
                </QuoteButton>
              </div>
              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-coco-sand bg-coco-sand/30 shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Greenhouse plants growing in soilless media"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="border-t border-coco-sand bg-coco-cream/95 px-4 py-5 sm:px-6">
                  <p className="font-serif text-lg font-semibold text-coco-husk-deep">{site.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted">{site.location}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
