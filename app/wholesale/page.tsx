import type { Metadata } from "next";
import { ContactLocations } from "@/components/contact-locations";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WholesaleQuoteForm } from "@/components/wholesale-quote-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a wholesale quote",
  description:
    "Request a DashAgri wholesale quote for coco coir grow bags, including quantity, delivery location, and timeline.",
  alternates: { canonical: "/wholesale" },
};

export default function WholesalePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Wholesale"
          title="Request a Wholesale Quote"
          description="Tell us about your crop, quantity, and delivery timeline. We will use this request for product specifications, volume pricing, packing details, and delivery options."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Wholesale" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div className="min-w-0 rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-8">
              <WholesaleQuoteForm />
            </div>
            <aside className="min-w-0">
              <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep">Talk to the team</h2>
              <p className="mt-3 text-sm leading-relaxed text-coco-muted">
                {site.company}, {site.location}. Email{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-coco-husk hover:underline">
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-6">
                <ContactLocations />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
