import type { Metadata } from "next";
import { ContactLocations } from "@/components/contact-locations";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Contact DashAgri Coco in Canada and the USA for cocopeat quotes, specifications, and logistics.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHeader
          eyebrow="Contact"
          title="Contact us"
          description={`Reach our team in Canada and the USA for quotes, specifications, and logistics. We also serve ${site.regions.join(", ")}.`}
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <section className="py-14 sm:pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <ContactLocations />
            <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-coco-husk via-coco-husk-deep to-coco-husk-deep px-5 py-12 text-center shadow-lg sm:rounded-3xl sm:px-8 sm:py-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(196,165,116,0.2) 0%, transparent 40%)`,
                }}
                aria-hidden
              />
              <div className="relative">
                <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl">
                  Ready to plan your next grow?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-coco-sand sm:text-base">
                  Tell us about your crop, volume, and timeline—we’ll help you with our premium organic
                  cocopeat.
                </p>
                <a
                  href="mailto:hello@dashagricoco.com"
                  className="mt-6 inline-flex min-h-12 w-full max-w-md items-center justify-center break-all rounded-full bg-white px-5 py-3 text-sm font-semibold text-coco-husk-deep shadow-md transition hover:bg-coco-cream sm:mt-8 sm:w-auto sm:px-8 sm:text-base"
                >
                  hello@dashagricoco.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
