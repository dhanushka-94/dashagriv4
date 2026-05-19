import Image from "next/image";
import Link from "next/link";
import { PRODUCT, getProductImage } from "@/lib/product";

export function ProductSpotlight() {
  const { src, alt } = getProductImage();

  return (
    <section className="py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative aspect-square max-w-lg overflow-hidden rounded-2xl border border-coco-sand bg-coco-sand/40 shadow-lg lg:max-w-none">
            <Image src={src} alt={alt} fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
          <div className="min-w-0">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-coco-husk-deep sm:text-3xl">
              {PRODUCT.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-coco-muted sm:text-lg">{PRODUCT.shortDesc}</p>
            <ul className="mt-6 space-y-3">
              {PRODUCT.highlights.slice(0, 4).map((line) => (
                <li key={line} className="flex gap-3 text-sm text-coco-muted sm:text-base">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/product"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep"
              >
                View full details
              </Link>
              <Link
                href="/grow-bag-guide"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/25 px-8 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50"
              >
                Grow bag guide
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center text-base font-semibold text-coco-leaf hover:text-coco-husk"
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
