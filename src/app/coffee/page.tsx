import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Ethiopian Coffee Varieties - Premium Arabica Coffee ",
  description:
    "Explore the finest Ethiopian coffee varieties offered by Birra Group. Discover premium Arabica coffee beans, roasted to perfection for coffee lovers worldwide.",
  keywords: [
    "Ethiopian coffee",
    "Arabica coffee",
    "premium coffee Ethiopia",
    "Ethiopian coffee varieties",
    "Harar coffee",
    "Limu coffee",
    "Jimmah coffee",
    "Lekempti coffee",
    "Birra Group coffee",
    "coffee exports Ethiopia",
    "roasted coffee Ethiopia",
    "best coffee beans Ethiopia",
  ],
  openGraph: {
    title: "Ethiopian Coffee Varieties - Premium Arabica Coffee",
    description:
      "Explore the finest Ethiopian coffee varieties offered by Birra Group, including premium Arabica beans like Harar, Limu, Jimmah, and Lekempti.",
    url: "https://birragroup.com/coffee",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ethiopian Coffee Varieties by Birra Group",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethiopian Coffee Varieties - Premium Arabica Coffee | Birra Group",
    description:
      "Discover Ethiopian coffee varieties including Harar, Limu, Jimmah, and Lekempti. Enjoy the rich taste of Birra Group's premium Arabica coffee.",
    images: [
      "https://birragroup.com/opengraph-image.png", // Same as Open Graph image
    ],
  },
  alternates: {
    canonical: "https://birragroup.com/coffee",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CoffeePage() {
  const dummyData = [
    {
      id: 1,
      title: "Ethiopian Yirgacheffe Coffee Beans",
      description:
        "Yirgacheffe coffee from Ethiopia is renowned for its bright acidity and floral aroma with hints of citrus and jasmine. It's grown in the high-altitude regions of the Yirgacheffe area, known for producing some of the best Arabica beans in the world.",
      image: null,
      price: "25.00",
      subCategory: "Whole Bean",
      origin: "Ethiopia, Yirgacheffe",
      tastingNotes:
        "Bright acidity, floral, jasmine, citrus, and a clean finish.",
      processingMethod: "Washed",
      packagingOptions: [
        { size: "250g", price: "8.00" },
        { size: "500g", price: "15.00" },
        { size: "1kg", price: "25.00" },
      ],
      stockQuantity: 150,
      features: { organic: true, fairTradeCertified: true },
      isFeatured: true,
      status: "Available",
      category: { id: 1, name: "Ethiopian Coffee" },
    },
    {
      id: 2,
      title: "Kenyan AA Coffee",
      description:
        "Known for its strong, bold flavor and wine-like acidity, Kenyan AA coffee is a favorite among coffee enthusiasts. It is grown at high altitudes, ensuring its rich flavor profile.",
      image: null,
      price: "22.00",
      subCategory: "Ground Coffee",
      origin: "Kenya",
      tastingNotes: "Bold flavor, wine-like acidity, fruity notes.",
      processingMethod: "Wet Processed",
      packagingOptions: [
        { size: "250g", price: "9.00" },
        { size: "500g", price: "17.00" },
        { size: "1kg", price: "22.00" },
      ],
      stockQuantity: 200,
      features: { organic: false, fairTradeCertified: true },
      isFeatured: false,
      status: "Available",
      category: { id: 2, name: "Kenyan Coffee" },
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-14 divide-y-2">
      {dummyData.map((coffee) => (
        <div key={coffee.id} className="pt-3 mt-6 max-w-4xl">
          <h1 className="text-3xl font-bold mb-3">{coffee.title}</h1>

          <p className="text-text-muted/70 mb-2">
            <strong>Sub-Category:</strong> {coffee.subCategory} |{" "}
            <strong>Origin:</strong> {coffee.origin}
          </p>
          <div className="relative aspect-[9/3]">
            <Image
              src={coffee.image || "/placeholder.png"}
              alt={coffee.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <p className="text-gray-800 text-base my-2">{coffee.description}</p>

          <div>
            <h3 className="text-lg font-semibold">Tasting Notes</h3>
            <p className="text-sm text-text-muted/90">{coffee.tastingNotes}</p>
            <h3 className="text-lg font-semibold">Processing Method</h3>
            <p className="text-sm text-text-muted/80">
              {coffee.processingMethod}
            </p>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold">Packaging Options</h3>
            <ul>
              {coffee.packagingOptions.map((option) => (
                <li key={option.size} className="text-sm">
                  {option.size}: ${option.price}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-2">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul>
              <li>
                <strong>Organic:</strong>{" "}
                {coffee.features.organic ? "Yes" : "No"}
              </li>
              <li>
                <strong>Fair Trade Certified:</strong>{" "}
                {coffee.features.fairTradeCertified ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          <p>
            <strong>Status:</strong> {coffee.status} | <strong>Stock:</strong>{" "}
            {coffee.stockQuantity}
          </p>
        </div>
      ))}
    </div>
  );
}
