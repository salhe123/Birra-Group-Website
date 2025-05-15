import Services from "@/components/Services/Services";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Ethiopian Coffee Export and Roasted Coffee",
  description:
    "Discover Birra Group's services including the export of high-quality Highland Arabica coffee and roasted coffee beans to destinations worldwide, including the Middle East, Europe, Japan, and the USA.",
  keywords: [
    "Ethiopian coffee export",
    "Arabica coffee export",
    "roasted coffee export",
    "coffee export destinations",
    "Birra Group services",
    "Ethiopian coffee beans",
    "roasted coffee Ethiopia",
    "coffee exports Middle East",
    "coffee exports Europe",
    "coffee exports Japan",
    "coffee exports USA",
    "grounded coffee export",
  ],
  openGraph: {
    title: "Our Services - Ethiopian Coffee Export and Roasted Coffee",
    description:
      "Learn about Birra Group's premium coffee export services including unwashed and washed Arabica coffee, as well as roasted coffee beans available for local and international markets.",
    url: "https://birragroup.com/services",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group Coffee Export Services",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Services - Ethiopian Coffee Export and Roasted Coffee | Birra Group",
    description:
      "Birra Group offers premium Ethiopian coffee exports and roasted coffee beans to global markets, including the Middle East, Europe, Japan, and the USA.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <div className="my-1">
      <StoreProvider>
        <Services />
      </StoreProvider>
    </div>
  );
}
