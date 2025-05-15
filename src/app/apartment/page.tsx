import React from "react";
import StoreProvider from "../StoreProvider";
import Apartments from "@/components/Apartments/Apartments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Luxury Apartments in Addis Ababa",
    template: "%s | Birra Group",
  },
  description:
    "Explore Birra Group's luxury apartments in Addis Ababa, Ethiopia. Discover modern, spacious homes for sale and rent, designed for comfort and elegance in the heart of the city.",
  keywords: [
    "luxury apartments Addis Ababa",
    "apartments for sale Addis Ababa",
    "apartments for rent Addis Ababa",
    "modern apartments Ethiopia",
    "real estate Addis Ababa",
    "Birra Group real estate",
    "luxury living Ethiopia",
    "Birra Group apartments for rent",
    "affordable apartments Addis Ababa",
  ],
  authors: [{ name: "Birra Coffee General Trading P.L.C" }],
  creator: "Birra Coffee General Trading P.L.C",
  publisher: "Birra Coffee General Trading P.L.C",
  openGraph: {
    title: "Luxury Apartments in Addis Ababa",
    description:
      "Explore Birra Group's modern and luxury apartments in Addis Ababa, Ethiopia. Spacious homes designed for comfort, elegance, and urban living.",
    url: "https://birragroup.com/apartment",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Luxury Apartments by Birra Group in Addis Ababa",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@birragroup",
    title: "Luxury Apartments in Addis Ababa",
    description:
      "Discover luxury apartments in Addis Ababa with Birra Group. Homes designed for comfort, elegance, and urban living. Available for rent and sale.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/apartment",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <div className="w-full">
      <StoreProvider>
        <Apartments />
      </StoreProvider>
    </div>
  );
}
