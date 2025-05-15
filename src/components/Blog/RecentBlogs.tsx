"use client";
import { useGetBlogPostsQuery } from "@/lib/features/api/blogsApi";
import React from "react";
import Loader from "../Loader/Loader";
import Error from "../Error";
import Link from "next/link";

export default function RecentBlogs() {
  const { data, isLoading, isError } = useGetBlogPostsQuery();

  if (isLoading) return <Loader />;
  if (isError) return <></>;

  return (
    <div className="pt-24 max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Recent Blogs
      </h2>
      <ul className="space-y-4">
        {data?.blogs.slice(0, 5).map((blog) => (
          <li key={blog.id} className="border-b pb-4">
            <Link
              href={`/blogs/${blog.id}`}
              className="text-base font-medium text-gray-900 hover:text-blue-600 transition duration-300 ease-in-out hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
