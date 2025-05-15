"use client";
import { useGetBlogPostsQuery } from "@/lib/features/api/blogsApi";
import Blog from "./Blog";
import Loader from "../Loader/Loader";
import Link from "next/link";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function Blogs({
  index,
  title,
}: {
  index?: number;
  title: string;
}) {
  const { data, isLoading, isError } = useGetBlogPostsQuery();
  const blogPosts = data?.blogs;

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-[85rem] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        <div className="relative">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {blogPosts?.slice(0, index || blogPosts.length).map((post) => (
              <Blog key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="my-5 flex justify-center">
          {index === 3 && (
            <Link href="/blogs">
              <button className="bg-[#442817] text-white px-8 py-3 rounded hover:bg-[#5d371f] transition-colors">
                More Blogs
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
