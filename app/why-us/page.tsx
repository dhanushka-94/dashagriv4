import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  DropletIcon,
  LeafIcon,
  PackageIcon,
  WindIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Why growers choose us",
  description:
    "Organic cocopeat from Sri Lanka with excellent water retention, aeration, and supply across Sri Lanka, the USA, and Canada.",
  alternates: { canonical: "/why-us" },
};

const benefits = [
  {
    icon: DropletIcon,
    title: "Water retention",
    text: "Holds moisture effectively while reducing runoff—supporting healthier roots and less waste.",
  },
  {
    icon: WindIcon,
    title: "Soil aeration",
    text: "Open structure improves oxygen exchange for stronger growth in containers and beds.",
  },
  {
    icon: LeafIcon,
    title: "100% organic",
    text: "Natural coconut coir—eco-friendly and renewable, aligned with sustainable agriculture.",
  },
  {
    icon: PackageIcon,
    title: "Global reach",
    text: "Sourced in Sri Lanka with dependable supply for customers across Sri Lanka, the USA, and Canada.",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 min-w-0 w-full">
        <PageHeader
          eyebrow="Why us"
          title="Why growers choose us"
          description="Cocopeat that works in the real world—water, air, and biology in balance."
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Why us" }]}
        />
        <section className="py-14 sm:py-20 md:py-28">
          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-coco-sand/80 bg-background p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coco-leaf/10 text-coco-leaf sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-semibold text-foreground">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-coco-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
