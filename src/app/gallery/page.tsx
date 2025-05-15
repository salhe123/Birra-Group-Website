import Categories from "@/components/Category/Categories";
import React from "react";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Categories Gallery - Explore Birra Group's Coffee Offerings",
  description:
    "Explore Birra Group's coffee categories, including premium Ethiopian coffee varieties like Sidamo, Harrar, and Limu. View the finest coffee beans available for export.",
  keywords: [
    "coffee categories Ethiopia",
    "premium coffee beans",
    "Ethiopian coffee varieties",
    "Sidamo coffee",
    "Harrar coffee",
    "Limu coffee",
    "coffee gallery Birra Group",
    "coffee export Ethiopia",
    "Birra Group coffee",
  ],
  openGraph: {
    title: "Coffee Categories Gallery - Explore Birra Group's Coffee Offerings",
    description:
      "Discover the best of Ethiopian coffee with Birra Group's Coffee Categories Gallery. Explore coffee varieties such as Sidamo, Harrar, and Limu, available for export.",
    url: "https://birragroup.com/gallery",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group Coffee Categories Gallery",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Categories Gallery - Explore Birra Group's Coffee Offerings",
    description:
      "View Birra Group's Coffee Categories Gallery, featuring Ethiopian coffee varieties like Sidamo, Harrar, and Limu. Explore premium coffee beans available for export.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/gallery",
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
        <Categories />
      </StoreProvider>
    </div>
  );
}
