"use client";

import Image from "next/image";
import { QuoteButton } from "@/components/quote-contact-provider";
import { PRODUCT } from "@/lib/product";
import { site } from "@/lib/site";
import { getProductImage } from "@/lib/product";

export function HomeHero() {
  const { src, alt } = getProductImage();

  return (
    <section className="relative isolate overflow-hidden border-b border-coco-sand bg-gradient-to-b from-coco-leaf-light/80 via-background to-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
        <div>
          <p className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coco-leaf">
            <span className="rounded-full border border-coco-sand bg-white px-3 py-1.5 shadow-sm">
              {PRODUCT.slogan}
            </span>
            <span className="text-coco-muted normal-case">{site.regions.join(" · ")}</span>
          </p>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-coco-husk-deep sm:text-5xl lg:text-6xl">
            {PRODUCT.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-coco-muted">{PRODUCT.tagline}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <QuoteButton className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-lg transition hover:bg-coco-husk-deep">
              Get a quote
            </QuoteButton>
            <a
              href="#product"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/30 bg-white px-8 text-base font-semibold text-coco-husk shadow-sm transition hover:border-coco-husk/50 hover:bg-coco-leaf-light/40"
            >
              View product details
            </a>
          </div>
        </div>
        <figure className="overflow-hidden rounded-2xl border border-coco-sand bg-white p-4 shadow-lg sm:p-6">
          <div className="relative aspect-[113/40] w-full">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
