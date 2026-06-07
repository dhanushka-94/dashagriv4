/** Update social URLs when your profiles are live. */
export type OfficeContact = {
  country: string;
  contactName: string;
  mobile: string;
  /** E.164-style href without spaces for tel: links */
  mobileTel: string;
  telephone?: string;
  telephoneTel?: string;
  addressLines: string[];
};

export type SiteConfig = {
  name: string;
  social: { facebook: string; youtube: string };
  developer: { name: string; website?: string };
  regions: readonly ["Sri Lanka", "Canada"];
  /** Regional offices */
  offices: OfficeContact[];
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
  regions: ["Sri Lanka", "Canada"],
  offices: [
    {
      country: "Canada",
      contactName: "Ruwan Jayakody",
      mobile: "+1 647-223-3322",
      mobileTel: "+16472233322",
      telephone: "+1 416-519-9773",
      telephoneTel: "+14165199773",
      addressLines: [
        "3895 McNicoll Ave",
        "Toronto, Ontario, M1X 0C1",
        "Canada",
      ],
    },
  ],
};
