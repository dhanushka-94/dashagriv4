import {
  BROCHURE_IMAGE,
  BROCHURE_IMAGE_ALT,
  PRODUCT_IMAGE,
  PRODUCT_IMAGE_ALT,
} from "@/lib/site-images";

export type ProductSpec = {
  label: string;
  value: string;
  pending?: boolean;
};

export type ProductData = {
  slug: string;
  title: string;
  tagline: string;
  slogan: string;
  shortDesc: string;
  paragraphs: readonly string[];
  highlights: readonly string[];
  benefits: readonly { title: string; text: string }[];
  crops: readonly string[];
  cropNote: string;
  dimensionNote: string;
  specs: readonly ProductSpec[];
  imageSrc: string;
  imageAlt: string;
  brochureSrc: string;
  brochureAlt: string;
};

export const PRODUCT: ProductData = {
  slug: "coco-coir-grow-bag",
  title: "DashAgri Coco Peat Grow Bag",
  tagline:
    "A compressed, pre-filled coco coir grow bag for commercial greenhouses, nurseries, hydroponic growers, distributors, and home gardeners.",
  slogan: "Coco coir growing solutions",
  shortDesc:
    "The DashAgri Coco Peat Grow Bag is a compressed, pre-filled coco coir growing medium. Composition and EC figures are prior specifications and still need test confirmation.",
  paragraphs: [
    "The main confirmed product is the DashAgri Coco Peat Grow Bag, a compressed, pre-filled coco coir growing medium for commercial greenhouses, nurseries, hydroponic growers, agricultural distributors, and home gardeners.",
    "Prior specifications describe a blend of 70% washed coco chips and 30% coco pith, with EC below 1 mS/cm and pH 5.5–6.5. Those figures are shown for reference and should be confirmed with laboratory results before they are treated as certified.",
    "Blocks, briquettes, and bales are not listed as available products. Whether DashAgri will sell any format besides this grow bag is still an open decision.",
  ],
  highlights: [
    "Designed for commercial cultivation",
    "70% washed coco chips and 30% low-EC coco pith",
    "Low-EC growing medium",
    "Buffered coco coir",
    "Supports moisture retention and root-zone aeration",
    "Convenient compressed grow bag format",
    "Suitable for a range of greenhouse crops",
  ],
  benefits: [
    {
      title: "Root-zone aeration",
      text: "Coco chips help maintain air spaces within the growing medium.",
    },
    {
      title: "Moisture retention",
      text: "Coco pith helps retain water for plant availability.",
    },
    {
      title: "Convenient handling",
      text: "The compressed format is designed for easier storage, transportation, and preparation before planting.",
    },
    {
      title: "Commercial growing applications",
      text: "Suitable for evaluation in commercial greenhouse and soilless cultivation systems. Crop results depend on management and growing conditions.",
    },
  ],
  crops: ["Tomatoes", "Cucumbers", "Peppers", "Strawberries", "Leafy greens", "Flowering plants"],
  cropNote: "Suitability depends on crop management and growing conditions.",
  dimensionNote:
    "The product graphic shows 44 × 7 × 4 inches. An earlier specification lists 113 × 19 × 10 cm (about 44.5 × 7.5 × 3.9 inches). Both are published here until the manufacturer confirms a single size.",
  specs: [
    { label: "Product", value: "DashAgri Coco Peat Grow Bag" },
    { label: "Product type", value: "Compressed, pre-filled coco coir growing medium" },
    { label: "Size on product graphic", value: "44 × 7 × 4 inches", pending: true },
    {
      label: "Earlier specification",
      value: "113 × 19 × 10 cm (about 44.5 × 7.5 × 3.9 inches)",
      pending: true,
    },
    {
      label: "Material composition",
      value: "70% washed coco chips / 30% coco pith (prior specification, pending verification)",
      pending: true,
    },
    {
      label: "Electrical conductivity",
      value: "Below 1 mS/cm (prior specification, pending test results)",
      pending: true,
    },
    { label: "pH range", value: "5.5–6.5 (prior specification, pending test results)", pending: true },
    { label: "Treatment", value: "Buffered coco coir" },
    {
      label: "Applications",
      value: "Commercial greenhouses, nurseries, hydroponics, distributors, and home gardeners",
    },
    { label: "Water for expansion", value: "Pending manufacturer confirmation", pending: true },
    { label: "Expanded volume", value: "Pending manufacturer confirmation", pending: true },
    { label: "Packing and pallet quantity", value: "Pending manufacturer confirmation", pending: true },
    { label: "Commercial order quantity", value: "Contact DashAgri for a quote" },
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
