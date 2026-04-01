/** Update social URLs when your profiles are live. */
export type SiteConfig = {
  name: string;
  social: { facebook: string; youtube: string };
  developer: { name: string; website?: string };
  regions: readonly ["Sri Lanka", "United States", "Canada"];
};

export const site: SiteConfig = {
  name: "DashAgri Coco",
  social: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
  developer: {
    name: "Olexto Digital Solutions (Pvt) Ltd",
  },
  regions: ["Sri Lanka", "United States", "Canada"],
};
