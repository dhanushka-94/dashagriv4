import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { QuoteButton } from "@/components/quote-contact-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Why growers choose us",
  description:
    "Why commercial growers consider DashAgri coco coir grow bags: chip and pith blend, low EC, buffered coir, and a compressed format.",
  alternates: { canonical: "/why-us" },
};

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Why DashAgri"
          title="Why choose DashAgri?"
          description="Coco coir growing media prepared for commercial greenhouse, nursery, and hydroponic evaluation."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Why DashAgri" }]}
        />
        <section className="py-14 sm:py-20 md:py-28">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {PRODUCT.benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl border border-coco-sand/80 bg-background p-5 sm:p-6">
                  <h2 className="font-semibold text-foreground">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted">{benefit.text}</p>
                </div>
              ))}
            </div>
            <QuoteButton className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto">
              Request a Bulk Quote
            </QuoteButton>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
