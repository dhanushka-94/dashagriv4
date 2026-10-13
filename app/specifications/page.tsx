import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { QuoteButton } from "@/components/quote-contact-provider";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Technical specifications",
  description:
    "Technical specifications for the DashAgri compressed coco coir grow bag, including composition, EC, pH, treatment, and dimensions.",
  alternates: { canonical: "/specifications" },
};

export default function SpecificationsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Specifications"
          title="DashAgri Coco Coir Grow Bag — Technical Specifications"
          description="Published figures are limited to the product details supplied for DashAgri. Items still awaiting manufacturer confirmation are marked pending."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Technical specifications" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <dl className="divide-y divide-coco-sand overflow-hidden rounded-2xl border border-coco-sand bg-white shadow-sm">
              <div className="hidden bg-coco-cream px-5 py-4 text-sm font-semibold text-coco-husk-deep sm:grid sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4 sm:px-6">
                <span>Specification</span>
                <span>Details</span>
              </div>
              {PRODUCT.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-start sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-semibold text-coco-husk-deep">{spec.label}</dt>
                  <dd className="break-words text-sm leading-relaxed text-coco-muted sm:text-base">{spec.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-coco-muted">{PRODUCT.dimensionNote}</p>
            <p className="mt-3 text-sm leading-relaxed text-coco-muted">
              Composition, EC, and pH are prior specifications. Verify them with laboratory results before
              treating them as certified test results. Laboratory reports and certifications are not published
              here yet. Claims such as a reduced risk of soil-borne diseases are not made on this site.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-coco-muted">
              Featured crops: {PRODUCT.crops.join(", ")}. {PRODUCT.cropNote}
            </p>

            <h2 className="mt-14 font-serif text-2xl font-semibold text-coco-husk-deep">Product benefits</h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PRODUCT.benefits.map((benefit) => (
                <li key={benefit.title} className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted">{benefit.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto">
                Request a Bulk Quote
              </QuoteButton>
              <Link
                href="/product"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-coco-husk/25 px-8 text-base font-semibold text-coco-husk sm:w-auto"
              >
                View products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
