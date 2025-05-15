import Blogs from "@/components/Blog/Blogs";
import React from "react";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Stay Updated with Birra Group Insights",
  description:
    "Read the latest blogs from Birra Group covering topics like Ethiopian coffee exports, real estate insights, and industrial innovations. Stay informed and inspired.",
  keywords: [
    "Birra Group blogs",
    "Ethiopian coffee insights",
    "real estate blogs Ethiopia",
    "industrial innovations",
    "coffee export news",
    "Birra Group updates",
    "business trends Ethiopia",
  ],
  openGraph: {
    title: "Blogs - Stay Updated with Birra Group Insights",
    description:
      "Explore blogs from Birra Group on Ethiopian coffee, real estate, and industrial developments. Stay updated with the latest news and insights.",
    url: "https://birragroup.com/blogs",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group Blog Page",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Stay Updated with Birra Group Insights",
    description:
      "Read the latest blogs from Birra Group on Ethiopian coffee exports, real estate trends, and industrial innovations.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/blogs",
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
        <Blogs title="Blogs" />
      </StoreProvider>
    </div>
  );
}
