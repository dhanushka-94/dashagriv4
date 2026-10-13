import Image from "next/image";
import Link from "next/link";
import { ProductImageDisplay } from "@/components/product-image-display";
import { QuoteButton } from "@/components/quote-contact-provider";
import { PRODUCT, getBrochureImage, getProductImage } from "@/lib/product";

const whyChoose = [
  "Designed for commercial cultivation",
  "Balanced coco chip and coco pith blend",
  "Low-EC growing medium",
  "Buffered coco coir",
  "Supports moisture retention and root-zone aeration",
  "Convenient compressed grow bag format",
  "Suitable for a range of greenhouse crops",
] as const;

export function HomeProduct() {
  const { src, alt } = getProductImage();
  const brochure = getBrochureImage();

  return (
    <div id="product" className="scroll-mt-24 min-w-0">
      <section className="border-t border-coco-sand bg-white py-14 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-coco-leaf">
            Featured product
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl">
            {PRODUCT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-coco-muted">
            A compressed, pre-filled coco coir grow bag. Prior specifications list 70% washed coco chips and
            30% coco pith. The product graphic shows 44 × 7 × 4 inches.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-coco-muted">
            Featured crops: {PRODUCT.crops.join(", ")}. {PRODUCT.cropNote}
          </p>

          <ProductImageDisplay
            src={src}
            alt={alt}
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="mx-auto mt-10 max-w-5xl"
          />

          <div className="mx-auto mt-10 w-full min-w-0 max-w-2xl">
            <figure className="overflow-hidden rounded-2xl border border-coco-sand bg-coco-cream/50 p-4 shadow-sm sm:p-6">
              <div className="relative aspect-[4/3] w-full min-w-0">
                <Image
                  src={brochure.src}
                  alt={brochure.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-coco-muted">Product brochure</figcaption>
            </figure>
          </div>

          <div className="mt-10 flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-6 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto sm:px-8">
              Request a Bulk Quote
            </QuoteButton>
            <Link
              href="/specifications"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-coco-husk/25 px-6 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50 hover:bg-coco-leaf-light/50 sm:w-auto sm:px-8"
            >
              Technical specifications
            </Link>
          </div>
        </div>
      </section>

      <section id="why" className="scroll-mt-24 border-t border-coco-sand bg-coco-cream/60 py-14 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl">
            Why choose DashAgri?
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-coco-sand bg-white p-5 text-coco-muted shadow-sm"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-coco-sand bg-white py-14 sm:py-20">
        <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="min-w-0 rounded-2xl border border-coco-sand bg-coco-cream/40 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep">
              Wholesale and commercial buyers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-coco-muted">
              Are you a greenhouse operator, nursery owner, commercial grower, or agricultural distributor?
              DashAgri welcomes inquiries from businesses looking for coco coir growing media in commercial
              quantities.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-coco-muted">
              Contact us for product specifications, volume pricing, packing details, and delivery options.
            </p>
            <QuoteButton className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-6 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep">
              Request a Bulk Quote
            </QuoteButton>
          </div>
          <div className="min-w-0 rounded-2xl border border-coco-sand bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-coco-husk-deep">Home gardeners</h2>
            <p className="mt-4 text-base leading-relaxed text-coco-muted">
              Looking for DashAgri products for personal gardening? Amazon and Walmart listings will be added
              here once those store pages are confirmed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
