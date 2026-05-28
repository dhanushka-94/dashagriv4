"use client";

import { ProductImageDisplay } from "@/components/product-image-display";
import { QuoteButton } from "@/components/quote-contact-provider";
import { PRODUCT } from "@/lib/product";
import { site } from "@/lib/site";
import { getProductImage } from "@/lib/product";

export function HomeHero() {
  const { src, alt } = getProductImage();

  return (
    <section className="relative isolate overflow-hidden border-b border-coco-sand bg-gradient-to-b from-coco-leaf-light/80 via-background to-background">
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-coco-leaf">
            <span className="rounded-full border border-coco-sand bg-white px-3 py-1.5 shadow-sm">
              {PRODUCT.slogan}
            </span>
            <span className="text-coco-muted normal-case">{site.regions.join(" · ")}</span>
          </p>
          <h1 className="mt-5 font-serif text-3xl font-semibold leading-[1.12] tracking-tight text-coco-husk-deep sm:mt-6 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
            {PRODUCT.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-coco-muted sm:mt-6 sm:text-lg">
            {PRODUCT.tagline}
          </p>
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
            <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-6 text-base font-semibold text-white shadow-lg transition hover:bg-coco-husk-deep sm:w-auto sm:px-8">
              Get a quote
            </QuoteButton>
            <a
              href="#product"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-coco-husk/30 bg-white px-6 text-base font-semibold text-coco-husk shadow-sm transition hover:border-coco-husk/50 hover:bg-coco-leaf-light/40 sm:w-auto sm:px-8"
            >
              View product details
            </a>
          </div>
        </div>
        <ProductImageDisplay
          src={src}
          alt={alt}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="min-w-0"
        />
      </div>
    </section>
  );
}
