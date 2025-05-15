"use client";
import React from "react";
import { useGetAboutQuery } from "@/lib/features/api/aboutApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import Loader from "../Loader/Loader";
import Error from "../Error";
import { notFound } from "next/navigation";

export default function About() {
  const { data, isLoading, isError } = useGetAboutQuery();
  const companies = data?.data;

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      {companies?.slice(0, 1).map((company) => (
        <Card key={company.id} className="my-8 max-w-7xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              {company.companyName}
            </CardTitle>
            <CardDescription className="text-lg italic">
              {company.visionMotto}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className=" overflow-hidden w-full max-w-full p-4">
                <h3 className="text-2xl font-semibold mb-2">About Us</h3>
                <p className="text-gray-600 mb-4">
                  {company.companyDescription}
                </p>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">{company.visionStatement}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Building2 className="mr-2 h-5 w-5 text-gray-500" />
                    <span>{company.companyName}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-gray-500" />
                    <span>{company.phoneNumber}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-gray-500" />
                    <span>{company.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                    <span>{company.address}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {Object.entries(JSON.parse(company.socialMediaLinks)).map(
                    ([platform, url]) => (
                      <a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {platform === "facebook" && (
                          <Facebook className="h-6 w-6" />
                        )}
                        {platform === "twitter" && (
                          <Twitter className="h-6 w-6" />
                        )}
                        {platform === "linkedin" && (
                          <Linkedin className="h-6 w-6" />
                        )}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
