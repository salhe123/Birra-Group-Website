import { CafeteriaGrid } from "@/components/BirraCafeteria/CafeteriaGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Birra Cafeteria - A Unique Coffee Experience",
  description:
    "Welcome to Birra Cafeteria, where you can enjoy premium Ethiopian coffee and a warm, relaxing atmosphere. Discover our unique birra-inspired space and delicious flavors.",
  keywords: [
    "Birra Cafeteria",
    "Ethiopian coffee",
    "best coffee Addis Ababa",
    "cafeteria Addis Ababa",
    "coffee experience Ethiopia",
    "Birra Group coffee shop",
    "unique coffee space Ethiopia",
    "Ethiopian coffee flavors",
  ],
  openGraph: {
    title: "Birra Cafeteria - A Unique Coffee Experience",
    description:
      "Experience the warmth and flavor of Birra Cafeteria. Enjoy premium Ethiopian coffee in our relaxing, birra-inspired space.",
    url: "https://birragroup.com/birra-cafeteria",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Cafeteria Coffee Experience",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birra Cafeteria - A Unique Coffee Experience",
    description:
      "Discover the unique flavors of Birra Cafeteria. Premium Ethiopian coffee served in a warm, welcoming space.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/birra-cafeteria",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#8B4513] mt-16">
          Welcome to Birra Cafeteria
        </h1>
        <p className="text-center text-lg text-[#5D3A1A] mb-14">
          Experience the warmth and flavor of our unique birra-inspired space.
        </p>
        <CafeteriaGrid />
      </main>
    </div>
  );
}
