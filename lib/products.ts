import { getProductImageAlt, getProductImageSrc } from "@/lib/site-images";

export type Product = {
  slug: string;
  title: string;
  shortDesc: string;
  /** Longer copy for the detail page */
  paragraphs: string[];
  highlights: string[];
  imageIndex: number;
};

export const PRODUCTS: Product[] = [
  {
    slug: "5kg-block",
    title: "5kg block",
    shortDesc:
      "Compressed cocopeat blocks—easy to store, stack, and hydrate for nurseries, potting, and consistent batch expansion.",
    paragraphs: [
      "Our 5kg compressed blocks are designed for operations that need predictable unit weights, clean stacking, and straightforward hydration. Each block expands to a high-quality, fibrous substrate that holds moisture while maintaining air space for roots.",
      "Ideal for nurseries, potting lines, and growers who batch-prepare media and want repeatable results across seasons. We can advise on expansion ratios and irrigation setup for your climate and crop.",
    ],
    highlights: [
      "Standardized 5kg unit for inventory and logistics",
      "Compact storage and palletization",
      "Suitable for nurseries, greenhouses, and potting mixes",
      "Organic coconut coir sourced from Sri Lanka",
    ],
    imageIndex: 0,
  },
  {
    slug: "650g-briquettes",
    title: "650g briquettes",
    shortDesc:
      "Lightweight briquettes for efficient shipping and handling; expands to fine, airy substrate when hydrated.",
    paragraphs: [
      "650g briquettes are a practical format for shipping efficiency and manual handling. Once hydrated, they break apart into a fine, workable cocopeat fraction suited to seedling trays, small bags, and precision blending.",
      "Use them when you want smaller pack sizes for retail, trials, or export-friendly cartons without sacrificing substrate quality.",
    ],
    highlights: [
      "Lightweight format for freight and handling",
      "Fast, even expansion with correct hydration",
      "Great for trials, retail packs, and tray production",
      "Consistent quality from batch to batch",
    ],
    imageIndex: 1,
  },
  {
    slug: "500kg-bales",
    title: "500kg bales",
    shortDesc:
      "High-volume bales for commercial growers, blending, and bulk repacking—optimized for logistics and throughput.",
    paragraphs: [
      "500kg bales strike a balance between bulk efficiency and manageable handling on the farm or at your processing facility. They suit commercial growers and blenders who repack into grow bags, bulk totes, or custom mixes.",
      "We support customers in Sri Lanka, the United States, and Canada with logistics guidance so bale handling fits your warehouse and loading constraints.",
    ],
    highlights: [
      "Mid-bulk format for blending and repacking",
      "Suited to commercial farms and substrate processors",
      "Efficient for regional distribution",
      "Quality-controlled processing from Sri Lankan coir",
    ],
    imageIndex: 2,
  },
  {
    slug: "1000kg-bales",
    title: "1000kg bales",
    shortDesc:
      "Maximum bulk format for large-scale operations, container loads, and industrial users who need tonnage efficiency.",
    paragraphs: [
      "When throughput and tonnage matter most, 1000kg bales maximize payload per move and reduce handling steps for industrial-scale users. This format is aimed at high-volume importers, blend plants, and operations feeding continuous production lines.",
      "Discuss loading plans, moisture targets, and documentation with our team—we’ll align specifications with your facility and regulatory needs.",
    ],
    highlights: [
      "Maximum bulk efficiency for high-volume buyers",
      "Ideal for containerized import and industrial blending",
      "Supports large-scale greenhouse and farm supply chains",
      "Dedicated support for specs and logistics",
    ],
    imageIndex: 3,
  },
  {
    slug: "25kg-bales",
    title: "25kg bales",
    shortDesc:
      "Mid-weight bales that balance portability with volume—ideal for distributors, farms, and regional supply chains.",
    paragraphs: [
      "25kg bales offer a middle ground: more volume than small retail units, but easier to move than full bulk bales. They work well for distributors, regional resellers, and farms that want manageable lift weights without frequent small-pack handling.",
      "Pair them with your own repacking or direct application workflows—our team can recommend handling practices to preserve fiber structure and moisture consistency.",
    ],
    highlights: [
      "Easier handling than large bulk bales",
      "Good fit for distributors and regional supply",
      "Balances portability with meaningful volume",
      "Reliable cocopeat quality from Sri Lanka",
    ],
    imageIndex: 4,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS.map((p) => p.slug);
}

export function getProductImage(product: Product) {
  return {
    src: getProductImageSrc(product.imageIndex),
    alt: getProductImageAlt(product.imageIndex),
  };
}
