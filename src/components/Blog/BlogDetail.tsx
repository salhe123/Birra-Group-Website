"use client";
import { useGetBlogPostQuery } from "@/lib/features/api/blogsApi";
import React from "react";
import Loader from "../Loader/Loader";
import { formatCustomDate } from "@/lib/utilsFunctions";
import Image from "next/image";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function BlogDetail({ id }: { id: number }) {
  const { data, isLoading, isError } = useGetBlogPostQuery(id);
  const blog = data?.blog;
  const date = formatCustomDate(blog?.date || "");

  if (isLoading) return <Loader />;
  if (isError) return notFound();

  return (
    <div className="max-w-7xl md:min-w-4xl">
      <div className="w-full px-10 my-14 flex flex-col">
        <h1
          style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "20px" }}
        >
          {blog?.title}
        </h1>

        <div className="relative w-full h-44 my-2">
          <Image
            src={blog?.image || "/placeholder.jpg"}
            alt={blog?.title || ""}
            fill
            className="object-cover w-full rounded-t-xl hover:scale-105 transaction-all duration-300"
          />
        </div>

        <p style={{ color: "#888", fontSize: "14px", marginBottom: "20px" }}>
          <strong>Date:</strong> {date}
          <strong>Category:</strong> {blog?.category}
        </p>

        <p className="my-10">{blog?.description}</p>
      </div>
    </div>
  );
}
