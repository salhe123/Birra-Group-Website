"use client";
import { useGetApartmentsQuery } from "@/lib/features/api/apartmentApi";
import React from "react";
import Loader from "../Loader/Loader";
import Error from "../Error";
import Apartment from "./Apartment";
import { useGetRateQuery } from "@/lib/features/api/rateApi";
import { notFound } from "next/navigation";

export default function Apartments() {
  const { data, isLoading, isError } = useGetApartmentsQuery();
  const { data: data2 } = useGetRateQuery();
  const rate = data2?.conversion_rate ?? 1;

  if (isLoading) return <Loader />;
  if (isError) return notFound();

  return (
    <div className="max-w-[85rem] mx-auto">
      <h2 className="text-3xl font-extrabold my-8 text-text-muted mb-8 text-center ">
        Available Apartments
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto px-2 sm:px-10 md:px-16 gap-5">
        {data?.map((apartment) => (
          <Apartment key={apartment.id} apartment={apartment} rate={rate} />
        ))}
      </div>
    </div>
  );
}
