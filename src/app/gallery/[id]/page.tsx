import StoreProvider from "@/app/StoreProvider";
import Gallery from "@/components/Gallery/Gallery";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;

  const response = await fetch(
    `https://backend.birragroup.com/api/category/${id}`
  );
  if (!response.ok) {
    console.error("Failed to fetch category data");
    return {
      title: "Category Not Found",
      description: "Sorry, the category you are looking for does not exist.",
    };
  }

  const { category } = await response.json();

  return {
    title: `${category.name} - Coffee Categories | Birra Group`,
    description: category.description,
    keywords: [
      category.name,
      "coffee categories",
      "Ethiopian coffee",
      "premium coffee beans",
      category.name,
      category.type,
    ],
    openGraph: {
      title: `${category.name} - Coffee Categories | Birra Group`,
      description: category.description,
      url: `https://birragroup.com/gallery/${category.id}`,
      siteName: "Birra Group",
      images: [
        {
          url: "https://birragroup.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} - Coffee Categories | Birra Group`,
      description: category.description,
      images: [category.imageUrl],
    },
    alternates: {
      canonical: `https://birragroup.com/gallery/${category.id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <StoreProvider>
        <Gallery id={id} />
      </StoreProvider>
    </div>
  );
}
