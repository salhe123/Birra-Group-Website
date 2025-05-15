import React from "react";
import StoreProvider from "../StoreProvider";
import Products from "@/components/Products/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Coffee Products - Birra Group",
  description:
    "Explore Birra Group's premium coffee products including freshly roasted beans, ground coffee, and coffee accessories. Taste the best of Ethiopian coffee.",
  keywords: [
    "coffee products",
    "premium coffee beans",
    "Ethiopian coffee",
    "freshly roasted coffee",
    "coffee accessories",
    "Birra Group coffee",
    "coffee for sale",
    "Ethiopian coffee export",
    "Arabica coffee Ethiopia",
    "ground coffee Ethiopia",
  ],
  openGraph: {
    title: "Premium Coffee Products - Birra Group",
    description:
      "Discover premium coffee products by Birra Group, including roasted beans, ground coffee, and coffee accessories from the best Ethiopian coffee regions.",
    url: "https://birragroup.com/products",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Premium Coffee Products by Birra Group",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Coffee Products - Birra Group",
    description:
      "Browse Birra Group's selection of premium coffee products including freshly roasted beans and coffee accessories. Taste the best of Ethiopian coffee.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <div>
      <StoreProvider>
        <Products />
      </StoreProvider>
    </div>
  );
}
