import Image from "next/image";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { ABOUT_IMAGE } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "About us",
  description:
    "DashAgri Coco supplies premium organic cocopeat from Sri Lanka to growers in Sri Lanka, the USA, and Canada.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="About"
          title="About DashAgri Coco"
          description="Premium organic cocopeat from Sri Lanka—built for water retention, aeration, and sustainable agriculture."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <section className="py-14 sm:py-20">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 md:items-center lg:gap-16">
              <div className="min-w-0 space-y-5 text-base leading-relaxed text-coco-muted sm:text-lg">
                <p>
                  Our cocopeat is <strong className="font-medium text-foreground">100% organic</strong>,{" "}
                  <strong className="font-medium text-foreground">eco-friendly</strong>, and engineered to
                  optimize water retention and soil aeration for enhanced plant growth.
                </p>
                <p>
                  We focus on one product:{" "}
                  <strong className="font-medium text-foreground">premium organic cocopeat</strong>, available
                  in blocks, briquettes, and bales to match your operation. With distribution aligned for{" "}
                  <strong className="font-medium text-foreground">{site.regions.join(", ")}</strong>, we
                  support commercial farms, greenhouses, distributors, and home gardeners.
                </p>
                <p>
                  From sourcing in Sri Lanka to delivery in North America, we prioritize consistent quality,
                  sustainability, and performance in every batch.
                </p>
              </div>
              <div className="relative min-w-0 overflow-hidden rounded-2xl border border-coco-sand bg-coco-sand/30 shadow-md">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={ABOUT_IMAGE}
                    alt="Healthy plants and premium growing media"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="border-t border-coco-sand bg-coco-cream/95 px-4 py-5 sm:px-6">
                  <p className="font-serif text-lg font-semibold text-coco-husk-deep">Sri Lankan cocopeat</p>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted">
                    Direct sourcing from Sri Lanka—trusted coconut coir origin.
                  </p>
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
