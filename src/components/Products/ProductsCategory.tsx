"use client";
import { useGetProductsByCategoryQuery } from "@/lib/features/api/productsApi";
import React from "react";
import Product from "./Product";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function ProductsCategory({ id }: { id: number }) {
  const { data, error, isLoading } = useGetProductsByCategoryQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return notFound();
  }

  return (
    <div className="my-14">
      <h1 className="my-10 text-2xl font-bold text-center">Products</h1>
      <div className="justify-center px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto sm:px-10 max-w-[85rem] md:px-20 ">
        {data?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
