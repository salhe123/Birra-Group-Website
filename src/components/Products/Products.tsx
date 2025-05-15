"use client";
import { useGetProductsQuery } from "@/lib/features/api/productsApi";
import React from "react";
import Product from "./Product";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function Products() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return notFound();
  }

  return (
    <div className="my-14">
      <h1 className="my-10 text-2xl font-bold text-center">Products</h1>
      <div className="justify-center px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:px-10 md:px-14 max-w-[85rem] mx-auto">
        {data?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
