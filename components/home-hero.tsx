import Image from "next/image";
import Link from "next/link";
import { PRODUCT } from "@/lib/product";
import { site } from "@/lib/site";
import { HERO_BACKGROUND } from "@/lib/site-images";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden border-b border-coco-sand/80 sm:min-h-[32rem]">
      <Image
        src={HERO_BACKGROUND}
        alt="Greenhouse cultivation with coco peat grow bags"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <p className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coco-leaf">
          <span className="rounded-full border border-coco-sand bg-white/95 px-3 py-1.5 shadow-sm">
            Our product
          </span>
          <span className="text-coco-muted normal-case">{site.regions.join(" · ")}</span>
        </p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-coco-husk-deep sm:text-5xl lg:text-6xl">
          {PRODUCT.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-coco-muted">{PRODUCT.tagline}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-lg transition hover:bg-coco-husk-deep"
          >
            Request a quote
          </Link>
          <Link
            href="/product"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/30 bg-white/95 px-8 text-base font-semibold text-coco-husk shadow-sm backdrop-blur-sm transition hover:border-coco-husk/50"
          >
            Full product details
          </Link>
        </div>
      </div>
    </section>
  );
}
