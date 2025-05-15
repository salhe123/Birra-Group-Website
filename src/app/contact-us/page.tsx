import Contact from "@/components/Contact/Contact";
import React from "react";
import StoreProvider from "../StoreProvider";
import { Metadata } from "next";
import Blogs from "@/components/Blog/Blogs";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with",
  description:
    "Reach out to Birra Group for inquiries about Ethiopian coffee exports, real estate, and industrial solutions. We are here to answer your questions and collaborate.",
  keywords: [
    "Contact Birra Group",
    "Birra Group contact information",
    "Ethiopian coffee supplier contact",
    "real estate inquiries Ethiopia",
    "industrial solutions Ethiopia",
    "coffee export contact Ethiopia",
    "Birra Group phone number",
    "contact Ethiopian coffee exporters",
  ],
  openGraph: {
    title: "Contact Us - Get in Touch with Birra Group",
    description:
      "Have questions about our Ethiopian coffee, real estate projects, or industrial solutions? Contact Birra Group today. We're here to help.",
    url: "https://birragroup.com/contact-us",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Birra Group",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get in Touch with Birra Group",
    description:
      "Reach out to Birra Group for all inquiries regarding Ethiopian coffee exports, real estate, and industrial services. We're ready to connect with you.",
    images: ["https://birragroup.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://birragroup.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <div>
      <StoreProvider>
        <Contact />
        <Blogs index={3} title="Explore Our Recent Blog Articles" />
      </StoreProvider>
    </div>
  );
}
