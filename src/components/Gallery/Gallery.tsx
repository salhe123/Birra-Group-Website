"use client";

import { useGetCategoryGalleryQuery } from "@/lib/features/api/galleryApi";
import BentoGallery from "./BentoGallery";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { Gallery as galleryType } from "@/types/gallery.type";
import { notFound } from "next/navigation";

export default function Gallery({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetCategoryGalleryQuery(parseInt(id));
  if (isLoading) return <Loader />;
  if (isError) return notFound();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">
        {data?.galleries[0].category.name} Gallery
      </h1>
      {data?.galleries && <BentoGallery images={data.galleries} />}
    </div>
  );
}
