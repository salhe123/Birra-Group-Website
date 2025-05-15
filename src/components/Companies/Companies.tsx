"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGetPartnersQuery } from "@/lib/features/api/partnerApi";
import ShowCompanies from "./ShowCompanies";
import Error from "../Error";
import Loader from "../Loader/Loader";
import { notFound } from "next/navigation";

export default function Companies() {
  const { data, isLoading, isError } = useGetPartnersQuery();
  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return <ShowCompanies logos={data || []} />;
}
