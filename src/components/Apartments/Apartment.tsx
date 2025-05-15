import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Apartment as ApartmentType } from "@/types/apartment.type";
import Link from "next/link";

export default function Apartment({
  apartment,
  rate,
}: {
  apartment: ApartmentType;
  rate: number;
}) {
  console.log(apartment.imageUrl);
  return (
    <Card className="flex flex-col max-w-sm">
      <Link href={`/apartment/${apartment.id}`}>
        <CardHeader>
          <div className="aspect-video flex items-center justify-center bg-gray-300 relative mb-4 overflow-hidden rounded-t-lg">
            <span className="absolute text-gray-700 font-semibold -z-10">
              No Image
            </span>

            <Image
              src={apartment.imageUrl || "/apartmentPlaceholder.avif"}
              alt={apartment.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">
              {apartment.title}
            </CardTitle>

            {/* <Badge variant="secondary">
              {apartment.features.pool ? "Has Pool" : "No Pool"}
            </Badge> */}
          </div>
          <Badge variant="outline" className="w-fit text-black">
            {`Available: ${
              apartment?.availableFrom
                ? new Date(apartment.availableFrom).toLocaleDateString()
                : "N/A"
            }`}
          </Badge>
          {/* </Link> */}
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 text-sm">{apartment.location}</p>
          <div className="flex items-center mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>
              Available from:{" "}
              {new Date(apartment.availableFrom).toLocaleDateString()}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center"></CardFooter>
      </Link>
    </Card>
  );
}
