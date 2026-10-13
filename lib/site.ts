/** Social profile URLs are omitted until live profiles are confirmed. */
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
  company: string;
  location: string;
  websiteLabel: string;
  email: string;
  regions: readonly ["Canada", "USA"];
  /** Regional offices with verified phone numbers already published on the site */
  offices: OfficeContact[];
};

export const site: SiteConfig = {
  name: "DashAgri",
  company: "Dash Trading Inc.",
  location: "Simi Valley, California, USA",
  websiteLabel: "www.dashagri.com",
  email: "Dashtrading.chaminda@gmail.com",
  regions: ["Canada", "USA"],
  offices: [
    {
      country: "USA",
      contactName: "Dash Trading Inc",
      mobile: "+1 805-791-0522",
      mobileTel: "+18057910522",
      addressLines: ["Simi Valley, California", "USA"],
    },
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
