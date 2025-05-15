"use client";
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
import { Service as ServiceType } from "@/types/service.type";
import Link from "next/link";

export default function Service({ service }: { service: ServiceType }) {
  return (
    <Card className="flex flex-col max-w-sm">
      <Link href={`/services/${service.id}`}>
        <CardHeader>
          <div className="aspect-video relative mb-4 overflow-hidden rounded-t-lg">
            <Image
              src={service.image || "https://coffee.alexflipnote.dev/random"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
            {/* <Badge variant="secondary">{service.category}</Badge> */}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 text-sm">{service.description}</p>
          {/* <div className="flex items-center mt-4 text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{service.time}</span>
          </div> */}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex flex-col font-bold text-lg"></div>
          {/* <Button variant="outline">
            <Link href={`/services/${service.id}`} className="w-full h-full">
              Details
            </Link>
          </Button> */}
        </CardFooter>
      </Link>
    </Card>
  );
}
