/** Local photos in /public/images — filenames with spaces are URL-encoded for the browser. */
const enc = (filename: string) => `/images/${encodeURIComponent(filename)}`;

/** Full-width hero background (greenhouse / commercial cultivation). */
export const HERO_BACKGROUND = enc("image (1) (1).jpg");

/** About section supporting image. */
export const ABOUT_IMAGE = enc("image (2) (1).jpg");

/** Coco peat grow bag — product shot (white poly, Dash Agri Coco branding). */
export const PRODUCT_IMAGE = enc("product image.png");

/** Product brochure / detail graphic. */
export const BROCHURE_IMAGE = enc("detaild image.png");

export const PRODUCT_IMAGE_ALT =
  "Dash Agri Coco peat grow bag — plain white poly, elongated format with herbs and vegetables growing from the substrate";

export const BROCHURE_IMAGE_ALT =
  "Dash Agri Coco peat grow bag brochure — dimensions, 70% washed coco chips and 30% low EC coco pith, growing guide highlights";
