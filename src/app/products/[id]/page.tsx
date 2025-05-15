import StoreProvider from "@/app/StoreProvider";
import ProductDetail from "@/components/Products/ProductDetail";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;

  const response = await fetch(
    `https://backend.birragroup.com/api/product/${id}`
  );
  if (!response.ok) {
    console.error("Failed to fetch product data");
    return {
      title: "product Not Found",
      description: "Sorry, the product you are looking for does not exist.",
    };
  }

  const { product } = await response.json();

  return {
    title: `${product.title} - Premium Coffee`,
    description: product.description,
    keywords: [
      product.title,
      product.subCategory,
      "premium coffee",
      "Ethiopian coffee",
      product.origin,
      product.features,
      product.category ? product.category.name : "coffee",
    ],
    openGraph: {
      title: `${product.title} - Premium Coffee`,
      description: product.description,
      url: `https://birragroup.com/products/${product.id}`,
      siteName: "Birra Group",
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: `${product.title} - Coffee Product`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} - Premium Coffee | Birra Group`,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: `https://birragroup.com/products/${product.id}`,
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
        <ProductDetail productId={id} />
      </StoreProvider>
    </div>
  );
}
