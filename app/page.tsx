import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ContactLocations } from "@/components/contact-locations";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  DropletIcon,
  LeafIcon,
  PackageIcon,
  WindIcon,
} from "@/components/icons";
import { PRODUCTS, getProductImage } from "@/lib/products";
import { ABOUT_IMAGE, HERO_BACKGROUND } from "@/lib/site-images";
import { absoluteUrl, defaultDescription, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium organic cocopeat from Sri Lanka",
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteUrl,
    title: `${site.name} | Premium organic cocopeat from Sri Lanka`,
    description: defaultDescription,
    type: "website",
    images: [
      {
        url: absoluteUrl(HERO_BACKGROUND),
        width: 1200,
        height: 630,
        alt: "Commercial greenhouse cultivation with cocopeat grow bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium organic cocopeat from Sri Lanka`,
    description: defaultDescription,
    images: [absoluteUrl(HERO_BACKGROUND)],
  },
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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />

        {/* About */}
        <section id="about" className="scroll-mt-20 py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div className="min-w-0">
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-coco-husk-deep sm:text-3xl md:text-4xl">
                  About DashAgri Coco
                </h2>
                <p className="mt-5 text-base leading-relaxed text-coco-muted sm:mt-6 sm:text-lg">
                  Our cocopeat is <strong className="font-medium text-foreground">100% organic</strong>,{" "}
                  <strong className="font-medium text-foreground">eco-friendly</strong>, and engineered to
                  optimize water retention and soil aeration for enhanced plant growth.
                </p>
                <p className="mt-4 text-base leading-relaxed text-coco-muted sm:text-lg">
                  We supply blocks, briquettes, and bales in sizes from{" "}
                  <strong className="font-medium text-foreground">650g to 1000kg</strong> to match your
                  operation. With distribution aligned for{" "}
                  <strong className="font-medium text-foreground">{site.regions.join(", ")}</strong>, we
                  focus on quality, sustainability, and performance—from commercial farms and greenhouses
                  to home gardens.
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
                  <p className="font-serif text-lg font-semibold text-coco-husk-deep">
                    Sri Lankan cocopeat
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-coco-muted">
                    Consistent quality from Sri Lankan coir—tailored to farms, greenhouses, and
                    distributors.
                  </p>
                  <ul className="mt-5 space-y-3 border-t border-coco-sand/80 pt-5 text-sm text-coco-muted">
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" />
                      Direct sourcing from Sri Lanka—trusted coconut coir origin
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" />
                      Serving growers in Sri Lanka, the United States, and Canada
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" />
                      Blocks, briquettes &amp; bales tailored to your logistics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section
          id="products"
          className="scroll-mt-20 border-y border-coco-sand bg-coco-cream/50 py-14 sm:py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-coco-husk-deep sm:text-3xl md:text-4xl">
                Products &amp; pack sizes
              </h2>
              <p className="mt-4 text-base text-coco-muted sm:text-lg">
                Coconut cocopeat in the format and weight class that fits your farm, greenhouse, or
                supply chain—we advise on expansion ratios and logistics across our markets.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
              {PRODUCTS.map((p) => {
                const { src, alt } = getProductImage(p);
                return (
                  <article
                    key={p.slug}
                    className="flex flex-col overflow-hidden rounded-2xl border border-coco-sand bg-white shadow-sm transition hover:shadow-md"
                  >
                    <Link
                      href={`/products/${p.slug}`}
                      className="relative block aspect-square w-full bg-coco-sand/80 outline-none ring-coco-leaf/30 ring-offset-2 ring-offset-white transition hover:opacity-95 focus-visible:ring-2"
                    >
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-wide text-coco-husk-deep sm:text-xl">
                        <Link
                          href={`/products/${p.slug}`}
                          className="hover:text-coco-leaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coco-leaf"
                        >
                          {p.title}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-coco-muted sm:text-base">
                        {p.shortDesc}
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-6">
                        <Link
                          href={`/products/${p.slug}`}
                          className="inline-flex min-h-11 items-center text-sm font-semibold text-coco-husk hover:text-coco-husk-deep"
                        >
                          View details →
                        </Link>
                        <a
                          href="/#contact"
                          className="inline-flex min-h-11 items-center text-sm font-semibold text-coco-leaf hover:text-coco-husk"
                        >
                          Discuss specs
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section id="quality" className="scroll-mt-20 py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-coco-husk-deep sm:text-3xl md:text-4xl">
              Why growers choose us
            </h2>
            <p className="mt-4 max-w-2xl text-base text-coco-muted sm:text-lg">
              Cocopeat that works in the real world—water, air, and biology in balance.
            </p>
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-coco-sand/80 bg-background p-5 sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coco-leaf/10 text-coco-leaf sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-coco-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-14 sm:pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-coco-husk-deep sm:text-3xl md:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 max-w-2xl text-base text-coco-muted sm:text-lg">
              Reach our team in Canada and the USA for quotes, specifications, and logistics. We also
              serve Sri Lanka and global markets through our network.
            </p>
            <ContactLocations className="mt-10" />

            <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-coco-husk via-coco-husk-deep to-coco-husk-deep px-5 py-12 text-center shadow-lg sm:rounded-3xl sm:px-8 sm:py-14 md:px-12">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(196,165,116,0.2) 0%, transparent 40%)`,
                }}
                aria-hidden
              />
              <div className="relative">
                <h3 className="font-serif text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                  Ready to plan your next grow?
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-coco-sand sm:text-base">
                  Tell us about your crop, volume, and timeline—we’ll help you pick the right cocopeat
                  format and grade, whether you&apos;re in {site.regions.join(", ")}.
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
