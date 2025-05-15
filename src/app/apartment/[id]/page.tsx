import StoreProvider from "@/app/StoreProvider";
import ApartmentDetail from "@/components/Apartments/ApartmentDetail";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = (await params).id;

  const response = await fetch(
    `https://backend.birragroup.com/api/apartment/${id}`
  );
  const apartment = await response.json();

  return {
    title: `${apartment.title} - Birra Group`,
    description: `Discover ${apartment.title} at Birra Group, located in ${apartment.location}. ${apartment.description}`,
    keywords: [
      apartment.title,
      "luxury apartment",
      "real estate Addis Ababa",
      "apartments for sale",
      "Birra Group real estate",
      apartment.location,
    ],
    openGraph: {
      title: `${apartment.title} - Birra Group`,
      description: apartment.description,
      url: `https://birragroup.com/apartment/${id}`,
      images: [
        {
          url:
            apartment.imageUrl || "https://birragroup.com/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: apartment.title,
        },
      ],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${apartment.title} - Birra Group`,
      description: apartment.description,
      images: [apartment.imageUrl],
    },
    alternates: {
      canonical: `https://birragroup.com/apartment/${id}`,
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
        <ApartmentDetail id={id} />
      </StoreProvider>
    </div>
  );
}
