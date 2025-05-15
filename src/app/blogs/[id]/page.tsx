import StoreProvider from "@/app/StoreProvider";
import BlogDetail from "@/components/Blog/BlogDetail";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).id;
  try {
    const response = await fetch(
      `https://backend.birragroup.com/api/blogs/${id}`
    );

    if (!response.ok) {
      return {};
    }

    const { blog } = await response.json();

    return {
      title: `${blog.title} | Birra Group Blog`,
      description: blog.description,
      keywords: [
        blog.title,
        blog.category,
        "Birra Group blog",
        "Ethiopian business insights",
        "Ethiopian coffee updates",
        "real estate trends Ethiopia",
        blog.date,
      ],
      openGraph: {
        title: blog.title,
        description: blog.description,
        url: `https://birragroup.com/blogs/${blog.id}`,
        siteName: "Birra Group",
        images: [
          {
            url: blog.image,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        type: "article",
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
        locale: "en_US",
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.description,
        images: [blog.image],
      },
      alternates: {
        canonical: `https://birragroup.com/blogs/${blog.id}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="flex justify-center">
      <StoreProvider>
        <BlogDetail id={parseInt(id)} />
      </StoreProvider>
    </div>
  );
}
