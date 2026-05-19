import { getProductImageAlt, getProductImageSrc } from "@/lib/site-images";

export type PackFormat = {
  name: string;
  description: string;
};

export type ProductData = {
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
  formats: readonly PackFormat[];
  imageIndex: number;
};

export const PRODUCT: ProductData = {
  slug: "cocopeat",
  title: "Premium organic cocopeat",
  tagline: "Sri Lankan coconut coir for stronger roots, better moisture, and cleaner growing.",
  shortDesc:
    "100% organic, eco-friendly cocopeat—engineered for water retention, soil aeration, and reliable performance in greenhouses, farms, and home gardens.",
  paragraphs: [
    "DashAgri Coco supplies premium cocopeat sourced directly from Sri Lanka, a region known for high-quality coconut-based growing media. Our substrate balances moisture and air in the root zone so plants establish faster and stay healthier through the season.",
    "Whether you run a commercial greenhouse, repack for distribution, or grow on a balcony, we help you choose the right format and hydration approach for your crop and climate. We serve customers across Sri Lanka, the United States, and Canada.",
  ],
  highlights: [
    "100% organic coconut coir from Sri Lanka",
    "Excellent water retention with good drainage",
    "Clean, uniform medium—no mud or weeds",
    "Suitable for greenhouses, nurseries, rooftops, and balconies",
    "Supply and logistics support in Sri Lanka, USA, and Canada",
  ],
  formats: [
    {
      name: "5kg block",
      description: "Compressed blocks for nurseries, potting, and consistent batch expansion.",
    },
    {
      name: "650g briquettes",
      description: "Lightweight units for efficient shipping, trials, and retail-friendly packs.",
    },
    {
      name: "25kg bales",
      description: "Mid-weight bales for distributors, farms, and regional supply chains.",
    },
    {
      name: "500kg bales",
      description: "High-volume bales for commercial growers, blending, and bulk repacking.",
    },
    {
      name: "1000kg bales",
      description: "Maximum bulk format for container loads and industrial-scale operations.",
    },
  ] satisfies PackFormat[],
  imageIndex: 0,
} as const;

export function getProductImage() {
  return {
    src: getProductImageSrc(PRODUCT.imageIndex),
    alt: getProductImageAlt(PRODUCT.imageIndex),
  };
}
