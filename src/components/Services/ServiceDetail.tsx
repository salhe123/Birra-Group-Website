"use client";
import { useGetServiceQuery } from "@/lib/features/api/servicesApi";
import React from "react";
import Loader from "../Loader/Loader";
import Error from "../Error";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ServiceDetail({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetServiceQuery(id);
  const service = data?.service;
  if (isLoading) return <Loader />;
  if (isError) return notFound();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 capitalize">{service?.title}</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {service?.image && (
          <div className="relative h-64 w-full">
            <Image
              src={service?.image}
              alt={service?.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">{service?.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {/* <h2 className="text-lg font-semibold mb-2">Details</h2> */}
              {/* <p>
                <span className="font-semibold">Category:</span>{" "}
                {service?.category}
              </p> */}
              {/* <p>
                <span className="font-semibold">Duration:</span> {service?.time}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
