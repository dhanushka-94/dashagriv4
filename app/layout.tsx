import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { BackToTop } from "@/components/back-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import {
  defaultDescription,
  organizationJsonLd,
  seoKeywords,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Premium organic cocopeat from Sri Lanka`,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Premium organic cocopeat from Sri Lanka`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Premium organic cocopeat from Sri Lanka`,
    description: defaultDescription,
  },
  category: "business",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdfbf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
