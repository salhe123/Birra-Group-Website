"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Coffee, Leaf, Droplet } from "lucide-react";
import { useGetProductByIdQuery } from "@/lib/features/api/productsApi";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function ProductDetail({ productId }: { productId: string }) {
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const product = data?.product;
  if (isLoading) return <Loader />;
  if (error) return notFound();

  return (
    <Card className="w-full max-w-7xl mx-auto my-14 text-black bg-gray-100">
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product?.image || "https://coffee.alexflipnote.dev/random"}
              alt={product?.title || "Product Image"}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <CardTitle className="text-3xl mb-2">{product?.title}</CardTitle>
              {/* <p className="text-2xl font-bold text-primary mb-4">
                ${product?.price}
              </p> */}
              <Badge variant="outline" className="mb-4 text-black">
                {product?.status}
              </Badge>
              <p className="text-muted-foreground mb-4">
                {product?.description}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Origin:</span> {product?.origin}
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Processing:</span>{" "}
                {product?.processingMethod}
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Tasting Notes:</span>{" "}
                {product?.tastingNotes}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Product Details</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Category: {product?.category?.name || "N/A"}</li>
              <li>Sub-category: {product?.subCategory}</li>
              <li>Stock: {product?.stockQuantity} units</li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-lg font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {["feature 1", "feature 2"].map(
                (feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                )
              )}
            </ul>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center"></CardFooter>
    </Card>
  );
}
