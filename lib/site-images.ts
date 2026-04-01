/** Local photos in /public/images — filenames with spaces are URL-encoded for the browser. */
const enc = (filename: string) => `/images/${encodeURIComponent(filename)}`;

/** Full-width hero background (greenhouse / commercial cultivation). */
export const HERO_BACKGROUND = enc("image (1) (1).jpg");

/** About section supporting image. */
export const ABOUT_IMAGE = enc("image (2) (1).jpg");

const PRODUCT_FILES = [
  "image (1) (1).jpg",
  "image (2) (1).jpg",
  "image (3) (1).jpg",
  "image (4) (1).jpg",
  "image (1) (1).jpg",
] as const;

const PRODUCT_ALTS: readonly string[] = [
  "Cocopeat grow bags in a commercial greenhouse",
  "Seedlings thriving in premium growing media",
  "Cocopeat substrate with watering can",
  "Young plant and tools on cocopeat",
  "Cocopeat cultivation and horticulture",
];

export function getProductImageSrc(index: number): string {
  return enc(PRODUCT_FILES[index] ?? PRODUCT_FILES[0]);
}

export function getProductImageAlt(index: number): string {
  return PRODUCT_ALTS[index] ?? PRODUCT_ALTS[0];
}
