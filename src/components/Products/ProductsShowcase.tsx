"use client";
import { useGetProductsQuery } from "@/lib/features/api/productsApi";
import React from "react";
import Product from "./Product";
import Link from "next/link";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function ProductsShowcase() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h2 className="text-3xl dark:text-white font-extrabold my-8 text-text-muted mb-8 text-center ">
        Our Products
      </h2>
      <h2 className="my-10 dark:text-white text-sm text-text-accent font-medium text-center text-balance max-w-xl mx-auto">
        Birra Coffee Export, based in Ethiopia, specializes in exporting
        high-quality Ethiopian coffee beans, pulses, and oilseeds sourced from
        diverse regions across the country.
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 sm:px-14 gap-5 mx-auto md:max-w-7xl">
        {data?.products.slice(0, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link href="/products">
          <button className="bg-[#442817] dark:bg-white dark:text-text-muted font-bold text-white px-8 py-3 rounded hover:bg-[#5d371f] transition-colors">
            More Products
          </button>
        </Link>
      </div>
    </div>
  );
}
