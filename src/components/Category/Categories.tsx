"use client";
import { useGetCategoryQuery } from "@/lib/features/api/categoryApi";
import React from "react";
import Loader from "../Loader/Loader";
import Error from "../Error";
import Category from "./Category";
import { notFound } from "next/navigation";

export default function Categories() {
  const { data, isLoading, isError } = useGetCategoryQuery();
  if (isLoading) return <Loader />;
  if (isError) return notFound();
  return (
    <div className="flex flex-col items-center my-14 px-3">
      <h1 className="text-text-mute text-3xl font-semibold text-balance">
        {" "}
        Choose Your Category to See{" "}
      </h1>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-3">
        {data?.categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
