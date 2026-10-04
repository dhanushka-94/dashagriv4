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
  regions: readonly ["Sri Lanka", "Canada", "USA"];
  /** Regional offices */
  offices: OfficeContact[];
};

export const site: SiteConfig = {
  name: "DashAgri Coco",
  social: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
  regions: ["Sri Lanka", "Canada", "USA"],
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
    {
      country: "USA",
      contactName: "Dash Trading Inc",
      mobile: "+1 805-791-0522",
      mobileTel: "+18057910522",
      addressLines: [],
    },
  ],
};
