"use client";
import { useGetServicesQuery } from "@/lib/features/api/servicesApi";
import Loader from "../Loader/Loader";
import Service from "./Service";
import Link from "next/link";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function Services({ index }: { index?: number }) {
  const { data, isLoading, isError } = useGetServicesQuery();
  const services = data?.services || [];
  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return (
    <section id="services" className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-text-muted mb-8 text-center ">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto gap-5">
          {services?.slice(0, index || services.length).map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
        {index == 3 && (
          <div className="my-8 w-full flex justify-center">
            <Link href="/services">
              <button className="bg-[#442817] text-white px-8 py-3 rounded hover:bg-[#5d371f] transition-colors">
                More Services
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
