import { Products } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Product({ product }: { product: Products }) {
  return (
    <Link href={`/products/${product.id}`} className="h-full">
      <Card className="w-full max-w-sm overflow-hidden bg-[#442817] h-full">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full bg-gray-200 flex items-center justify-center">
            <span className="absolute text-gray-700 font-semibold z-10">
              No Image
            </span>
            <Image
              src={product.image}
              // src={"/placeholder.png"}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="z-20"
            />
            {product.isFeatured && (
              <Badge className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 z-30">
                Featured
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-4 bg-bg-primary">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold line-clamp-2 text-white">
              {product.title}
            </h3>
            {/* <span className="text-lg font-bold text-white/70">
              ${product.price}
            </span> */}
          </div>
          <p className="text-sm text-gray-300 mb-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-1 mb-2">
            {["Roast: Medium", "Flavor: Chocolate", "Aroma: Fruity"].map(
              (feature, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-gray-700"
                >
                  {feature}
                </Badge>
              )
            )}
          </div>
          <div className="flex text-gray-100 justify-between items-center text-sm">
            <span className="font-semibold">{product.origin}</span>
            <span>{product.processingMethod}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center bg-bg-primary text-gray-50">
          <span className="text-sm">
            Stock:{" "}
            {product.stockQuantity > 0
              ? `${product.stockQuantity} left`
              : "Out of stock"}
          </span>
          <Badge className="capitalize bg-green-600">{product.status}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
