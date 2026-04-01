import Image from "next/image";
import { site } from "@/lib/site";
import { HERO_BACKGROUND } from "@/lib/site-images";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(100svh,56rem)] overflow-hidden border-b border-coco-sand/80">
      <Image
        src={HERO_BACKGROUND}
        alt="Commercial greenhouse with cocopeat grow bags"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Readability overlay: strong on the left where text sits; lighter on the right */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/25 sm:via-background/75"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40 sm:from-background/70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,56rem)] max-w-6xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-32">
        <div className="max-w-xl">
          <p className="inline-flex max-w-full flex-col gap-2 text-[0.65rem] font-semibold uppercase tracking-wider text-coco-leaf sm:flex-row sm:flex-wrap sm:items-center sm:text-xs">
            <span className="w-fit rounded-full border border-coco-sand bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
              Organic cocopeat
            </span>
            <span className="hidden text-coco-muted sm:inline">·</span>
            <span className="w-fit rounded-full border border-coco-sand bg-white/95 px-3 py-1.5 text-coco-muted shadow-sm backdrop-blur-sm normal-case">
              {site.regions.join(" · ")}
            </span>
          </p>
          <h1 className="mt-6 font-serif text-[2rem] font-semibold leading-[1.1] tracking-tight text-coco-husk-deep drop-shadow-sm sm:text-5xl lg:text-[3.25rem]">
            Grow stronger with premium cocopeat
          </h1>
          <p className="mt-6 text-base leading-relaxed text-coco-muted text-pretty sm:text-lg lg:text-xl">
            High-quality cocopeat from Sri Lanka—serving growers across{" "}
            <strong className="font-medium text-foreground">Sri Lanka, the United States, and Canada</strong>
            . Organic, eco-friendly coconut coir built for water retention, aeration, and healthy roots.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-coco-husk px-8 text-base font-semibold text-white shadow-lg transition hover:bg-coco-husk-deep"
            >
              Request a quote
            </a>
            <a
              href="/#products"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coco-husk/30 bg-white/95 px-8 text-base font-semibold text-coco-husk shadow-sm backdrop-blur-sm transition hover:border-coco-husk/50"
            >
              View products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
