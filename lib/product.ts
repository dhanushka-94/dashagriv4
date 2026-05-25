import {
  BROCHURE_IMAGE,
  BROCHURE_IMAGE_ALT,
  PRODUCT_IMAGE,
  PRODUCT_IMAGE_ALT,
} from "@/lib/site-images";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductData = {
  slug: string;
  title: string;
  tagline: string;
  slogan: string;
  shortDesc: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
  specs: readonly ProductSpec[];
  imageSrc: string;
  imageAlt: string;
  brochureSrc: string;
  brochureAlt: string;
};

export const PRODUCT: ProductData = {
  slug: "coco-peat-grow-bag",
  title: "Coco Peat Grow Bag",
  tagline: "Plain white poly grow bag filled with premium Sri Lankan coco peat—ready for balconies, patios, and kitchen gardens.",
  slogan: "Grow Fresh, Eat Healthy!",
  shortDesc:
    "Pre-filled elongated grow bag with 70% washed coco chips and 30% low EC coco pith—low salinity, balanced pH, and Dash Agri Coco branding only.",
  paragraphs: [
    "Our coco peat grow bag is an elongated plain white poly bag—113 cm long, 19 cm wide, and 10 cm gusset height—pre-packed with a professional-grade substrate blend from Sri Lanka. No third-party poly pack branding; only Dash Agri Coco.",
    "The medium combines 70% washed coco chips for structure and aeration with 30% low EC coco pith for moisture retention. EC is less than 1 mS/cm and pH is maintained between 5.5 and 6.5 for reliable germination and steady growth in home and greenhouse settings.",
    "Ideal for coriander, mint, basil, lettuce, strawberries, chili, tomatoes, and more. We supply growers and distributors across Sri Lanka, the United States, and Canada.",
  ],
  highlights: [
    "113 cm × 19 cm × 10 cm elongated grow bag",
    "70% washed coco chips · 30% low EC coco pith",
    "EC less than 1 mS/cm · pH 5.5–6.5",
    "Plain white poly—Dash Agri Coco branding only",
    "Balconies, terraces, kitchens, and greenhouses",
  ],
  specs: [
    { label: "Length", value: "113 cm" },
    { label: "Width", value: "19 cm" },
    { label: "Gusset / height", value: "10 cm" },
    { label: "Material", value: "70% washed coco chips, 30% low EC coco pith" },
    { label: "EC level", value: "Less than 1 mS/cm" },
    { label: "pH level", value: "5.5 – 6.5" },
  ],
  imageSrc: PRODUCT_IMAGE,
  imageAlt: PRODUCT_IMAGE_ALT,
  brochureSrc: BROCHURE_IMAGE,
  brochureAlt: BROCHURE_IMAGE_ALT,
} as const;

export function getProductImage() {
  return { src: PRODUCT.imageSrc, alt: PRODUCT.imageAlt };
}

export function getBrochureImage() {
  return { src: PRODUCT.brochureSrc, alt: PRODUCT.brochureAlt };
}
