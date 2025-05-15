import About from "@/components/About/About";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Birra Group General Trading P.L.C, a leading Ethiopian company specializing in coffee export, industrial imports, and real estate development. Trusted since 2010.",
  keywords: [
    "About Birra Group",
    "Birra Coffee General Trading P.L.C",
    "Ethiopian coffee company",
    "coffee exporters Ethiopia",
    "real estate Ethiopia",
    "Birra Group history",
    "quality coffee supplier",
    "sustainable coffee export",
    "Steel and metal products",
  ],
  openGraph: {
    title: "About Us",
    description:
      "Discover the story of Birra Coffee General Trading P.L.C, its commitment to quality coffee export, sustainability, and diversified industrial and real estate ventures.",
    url: "https://birragroup.com/about",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group About Page Image",
      },
    ],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Birra Coffee General Trading P.L.C is a leader in coffee export, industrial solutions, and real estate in Ethiopia. Learn more about our history and values.",
    images: [
      "https://birragroup.com/opengraph-image.png", // Same as OG image
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function page() {
  return (
    <div className="container mx-auto py-12">
      <StoreProvider>
        <About />
      </StoreProvider>
    </div>
  );
}
