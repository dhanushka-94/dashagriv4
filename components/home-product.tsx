import Image from "next/image";
import { ProductImageDisplay } from "@/components/product-image-display";
import {
  howToUseSteps,
  howToUseTitle,
  nutrientStep,
  plantingInstructions,
  proTips,
  recommendedPlants,
  recommendedPlantsTitle,
  sunlightRequirement,
  wateringGuide,
} from "@/lib/grow-bag-guide-content";
import { PRODUCT, getBrochureImage, getProductImage } from "@/lib/product";
import { QuoteButton } from "@/components/quote-contact-provider";

export function HomeProduct() {
  const { src, alt } = getProductImage();
  const brochure = getBrochureImage();

  return (
    <div id="product" className="scroll-mt-24 min-w-0">
      <section className="border-t border-coco-sand bg-white py-14 sm:py-20">
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-coco-leaf">
            {PRODUCT.slogan}
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl font-semibold tracking-tight text-coco-husk-deep sm:text-4xl">
            {PRODUCT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-coco-muted">{PRODUCT.shortDesc}</p>

          <ProductImageDisplay
            src={src}
            alt={alt}
            priority
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

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            <div className="min-w-0">
              <h3 className="font-serif text-2xl font-semibold text-coco-husk-deep">Specifications</h3>
              <dl className="mt-6 divide-y divide-coco-sand rounded-2xl border border-coco-sand bg-coco-cream/30">
                {PRODUCT.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[minmax(0,8.5rem)_1fr] sm:gap-4 sm:px-6"
                  >
                    <dt className="text-sm font-semibold uppercase tracking-wide text-coco-husk">{spec.label}</dt>
                    <dd className="break-words text-sm leading-relaxed text-coco-muted sm:text-base">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-2xl font-semibold text-coco-husk-deep">About this product</h3>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-coco-muted">
                {PRODUCT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {PRODUCT.highlights.map((line) => (
                  <li key={line} className="flex gap-3 text-coco-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <QuoteButton className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-coco-husk px-6 text-base font-semibold text-white shadow-md transition hover:bg-coco-husk-deep sm:w-auto sm:px-8">
              Get a quote
            </QuoteButton>
            <a
              href="#how-to-use"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border-2 border-coco-husk/25 px-6 text-base font-semibold text-coco-husk transition hover:border-coco-husk/50 hover:bg-coco-leaf-light/50 sm:w-auto sm:px-8"
            >
              How to use
            </a>
          </div>
        </div>
      </section>

      <section
        id="how-to-use"
        className="scroll-mt-24 border-t border-coco-sand bg-coco-cream/60 py-14 sm:py-20"
      >
        <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
          <h3 className="font-serif text-2xl font-semibold text-coco-husk-deep sm:text-3xl">{howToUseTitle}</h3>
          <p className="mt-3 max-w-2xl text-coco-muted">
            Everything you need to start growing with your Dash Agri Coco peat grow bag.
          </p>

          <ol className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {howToUseSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6"
              >
                <h4 className="font-semibold text-foreground">
                  <span className="text-coco-leaf">{index + 1}.</span> {step.title}
                </h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-coco-muted">
                  {step.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
              <h4 className="font-serif text-lg font-semibold text-coco-husk-deep">{recommendedPlantsTitle}</h4>
              <ul className="mt-4 space-y-3">
                {recommendedPlants.map((group) => (
                  <li key={group.level}>
                    <span className="text-sm font-semibold text-coco-husk">{group.level}: </span>
                    <span className="text-sm text-coco-muted">{group.plants.join(", ")}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
              <h4 className="font-serif text-lg font-semibold text-coco-husk-deep">
                {plantingInstructions.title}
              </h4>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-coco-muted">
                {plantingInstructions.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-foreground">{nutrientStep.title}</h4>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-coco-muted">
                {nutrientStep.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-coco-sand bg-white p-5 shadow-sm">
              <h4 className="font-semibold text-foreground">{wateringGuide.title}</h4>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-coco-muted">
                {wateringGuide.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-coco-sand bg-coco-leaf-light/80 p-5 shadow-sm sm:col-span-2 lg:col-span-1 lg:col-start-auto">
              <h4 className="font-semibold text-coco-husk-deep">{sunlightRequirement.title}</h4>
              <p className="mt-2 text-sm font-medium text-foreground">{sunlightRequirement.value}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-coco-sand bg-white p-5 shadow-sm sm:p-6">
            <h4 className="font-serif text-lg font-semibold text-coco-husk-deep">Pro tips</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {proTips.map((tip) => (
                <li key={tip} className="flex gap-3 text-sm text-coco-muted">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coco-leaf" aria-hidden />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-center font-serif text-xl text-coco-leaf sm:text-2xl">
            Grow Fresh, Eat Healthy!
          </p>

          <div className="mt-8 flex justify-center px-2">
            <QuoteButton className="inline-flex min-h-12 w-full max-w-md items-center justify-center rounded-full bg-coco-husk px-6 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-coco-husk-deep sm:w-auto sm:px-10 sm:text-base">
              Get a quote — contact us
            </QuoteButton>
          </div>
        </div>
      </section>
    </div>
  );
}
