'use client';

import { Products } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Badge } from "../ui/badge";

export default function Product({ product }: { product: Products }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="h-full transition-transform hover:scale-[1.02]"
    >
      <Card className="w-full max-w-sm  h-full overflow-hidden rounded-2xl shadow-lg dark:bg-[#3b2413] border border-[#573a22] transition-all hover:shadow-amber-900/30">
        {/* Image Section */}
        <CardHeader className="p-0 relative h-52 bg-gray-100">
          <div className="relative w-full h-full overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                No Image Available
              </div>
            )}
            {/* Dim overlay */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            {/* Featured Badge */}
            {product.isFeatured && (
              <Badge className="absolute top-2 right-2 z-20 bg-yellow-400 text-yellow-900 shadow-md">
                ⭐ Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        {/* Content Section */}
        <CardContent className="p-5 space-y-3 bg-[#3b2413] text-white">
          <h3 className="text-xl font-bold line-clamp-2">{product.title}</h3>
          <p className="text-sm text-gray-300 line-clamp-2">{product.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {[
              product.roast && `Roast: ${product.roast}`,
              product.flavor && `Flavor: ${product.flavor}`,
              product.aroma && `Aroma: ${product.aroma}`,
            ]
              .filter(Boolean)
              .map((feature, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-[#e0c3a1] text-[#3b2413] font-medium"
                >
                  {feature}
                </Badge>
              ))}
          </div>

          {/* Meta Info */}
          <div className="flex justify-between items-center text-sm text-gray-200 pt-2 border-t border-white/10">
            <span className="capitalize font-medium">{product.origin}</span>
            <span className="italic">{product.processingMethod}</span>
          </div>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="p-5 pt-3 border-t border-white/10 bg-[#342013] text-sm text-gray-200 flex justify-between items-center">
          <span>
            Stock:{" "}
            {product.stockQuantity > 0 ? (
              <span className="text-green-400 font-semibold">
                {product.stockQuantity} left
              </span>
            ) : (
              <span className="text-red-400 font-semibold">Out of stock</span>
            )}
          </span>
          <Badge
            className={`capitalize ${
              product.status === "available"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {product.status}
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
