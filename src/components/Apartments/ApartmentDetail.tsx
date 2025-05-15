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
import { Map, Droplet, Leaf } from "lucide-react";
import { useGetApartmentQuery } from "@/lib/features/api/apartmentApi";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { useGetRateQuery } from "@/lib/features/api/rateApi";
import { notFound } from "next/navigation";

export default function ApartmentDetail({ id }: { id: string }) {
  const { data, isLoading, isError } = useGetApartmentQuery(id);
  const { data: data2 } = useGetRateQuery();
  const rate = data2?.conversion_rate || 0;
  const apartment = data;

  if (isLoading) return <Loader />;
  if (isError) return notFound();

  return (
    <Card className="w-full max-w-7xl mx-auto my-14 text-black bg-gray-100">
      <CardHeader>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2 relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={
                `https://backend.birragroup.com/${apartment?.imageUrl}` ||
                "/apartmentPlaceholder.avif"
              }
              alt={apartment?.title || "Property Image"}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <CardTitle className="text-3xl mb-2">
                {apartment?.title}
              </CardTitle>
              {/* <p className="text-2xl gap-3 font-bold text-primary mb-4">
                <span>${apartment?.price}</span> -
                <span>
                  {rate && (
                    <>
                      {(rate * (apartment?.price || 1)).toLocaleString(
                        "en-us",
                        {
                          style: "currency",
                          currency: "ETB",
                        }
                      )}
                    </>
                  )}
                </span>
              </p> */}
              <Badge variant="outline" className="mb-4 text-black">
                {`Available: ${
                  apartment?.availableFrom
                    ? new Date(apartment.availableFrom).toLocaleDateString()
                    : "N/A"
                }  `}
              </Badge>

              <p className="text-muted-foreground mb-4">
                {apartment?.description || "No description available"}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Location:</span>{" "}
                {apartment?.location}
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Room Number:</span>{" "}
                {apartment?.noRoom}
              </div>
              <div className="flex items-center gap-2">
                <Droplet className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Features:</span>{" "}
                {["Pool: Medium", "Gym: Large"].map((feature, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-gray-700"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Property Details</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {/* <li>Price: ${apartment?.price}</li> */}
              <li>Location: {apartment?.location}</li>
              <li>Room Number: {apartment?.noRoom}</li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center"></CardFooter>
    </Card>
  );
}
