import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blogs.type";
import { formatCustomDate } from "@/lib/utilsFunctions";
import { Button } from "../ui/button";

export default function Blog({ post }: { post: BlogPost }) {
  const date = formatCustomDate(post.date);
  return (
    <div
      key={post.id}
      className="bg-white rounded-lg shadow-lg group overflow-hidden"
    >
      <Link href={`/blogs/${post.id}`}>
        <div className="relative h-64 md:h-48 overflow-hidden rounded-t-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">{date}</p>
            {/* <Link href={`/blogs/${post.id}`}>
            <Button variant="outline" className="font-semibold">
              Detail
            </Button>
          </Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
