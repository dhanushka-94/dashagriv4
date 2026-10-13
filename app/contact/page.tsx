import type { Metadata } from "next";
import { ContactLocations } from "@/components/contact-locations";
import { PageHeader } from "@/components/page-header";
import { QuoteButton } from "@/components/quote-contact-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact DashAgri, operated by Dash Trading Inc. in Simi Valley, California, for wholesale coco coir inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Contact"
          title="Contact DashAgri"
          description="Commercial coco coir growing solutions. We welcome inquiries from greenhouse growers, nurseries, hydroponic farms, agricultural distributors, and wholesale buyers."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <section className="py-14 sm:pb-20 md:pb-28">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-coco-sand bg-white p-5 text-sm sm:grid-cols-2 sm:p-6">
              <div>
                <dt className="font-semibold text-coco-husk-deep">Company</dt>
                <dd className="mt-1 text-coco-muted">{site.company}, USA</dd>
              </div>
              <div>
                <dt className="font-semibold text-coco-husk-deep">Brand</dt>
                <dd className="mt-1 text-coco-muted">{site.name}</dd>
              </div>
              <div>
                <dt className="font-semibold text-coco-husk-deep">Website</dt>
                <dd className="mt-1 text-coco-muted">{site.websiteLabel}</dd>
              </div>
              <div>
                <dt className="font-semibold text-coco-husk-deep">Location</dt>
                <dd className="mt-1 text-coco-muted">{site.location}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-coco-husk-deep">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="font-medium text-coco-husk hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8">
              <ContactLocations />
            </div>

            <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-coco-husk via-coco-husk-deep to-coco-husk-deep px-5 py-12 text-center shadow-lg sm:rounded-3xl sm:px-8 sm:py-14">
              <div className="relative">
                <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                  Wholesale pricing, samples, and shipping
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-coco-sand sm:text-base">
                  For wholesale pricing, product specifications, samples, distribution opportunities, or
                  shipping inquiries, request a bulk quote through the inquiry form.
                </p>
                <QuoteButton className="mt-6 inline-flex min-h-12 w-full max-w-md items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-coco-husk-deep shadow-md transition hover:bg-coco-cream sm:mt-8 sm:w-auto sm:px-8 sm:text-base">
                  Request a Bulk Quote
                </QuoteButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
