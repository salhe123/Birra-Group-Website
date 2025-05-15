import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar/AppSidebar";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Birra Group - Quality Coffee and Real Estate Solutions",
    template: "%s | Birra Group",
  },
  description:
    "Birra Coffee General Trading P.L.C is a leading Ethiopian company specializing in coffee export, industrial imports, and real estate development. Trusted for quality and sustainability.",
  keywords: [
    // General Blog Keywords
    "Birra Group blogs",
    "Birra Group insights",
    "Birra Group news",
    "Birra Group updates",
    "business blogs Ethiopia",
    "latest business trends Ethiopia",
    "industry insights Ethiopia",

    // Coffee-Related Keywords
    "Ethiopian coffee blogs",
    "Ethiopian coffee insights",
    "coffee export news Ethiopia",
    "premium Ethiopian coffee",
    "coffee industry Ethiopia",
    "Arabica coffee Ethiopia",
    "Ethiopian coffee business trends",
    "Birra Group coffee exports",
    "Ethiopian coffee market updates",
    "coffee supply chain Ethiopia",

    // Real Estate Keywords
    "real estate blogs Ethiopia",
    "real estate trends Addis Ababa",
    "luxury real estate Ethiopia",
    "Birra Group real estate",
    "housing market Ethiopia",
    "commercial real estate Addis Ababa",
    "Ethiopian property market insights",
    "real estate investment Ethiopia",
    "real estate development Ethiopia",

    // Industrial Innovation Keywords
    "industrial innovations Ethiopia",
    "Ethiopian manufacturing trends",
    "industrial growth Ethiopia",
    "Birra Group industrial ventures",
    "Ethiopian industrial economy",
    "trade and industrial blogs Ethiopia",
    "business development Ethiopia",
    "Birra Group manufacturing updates",

    // Audience-Focused Keywords
    "business insights Ethiopia",
    "business opportunities Ethiopia",
    "Birra Group articles",
    "Ethiopian economy updates",
    "business strategies Ethiopia",
    "coffee and real estate blogs",
    "Birra Group stories",
    "news and updates Birra Group",
    "business development blogs Ethiopia",
  ],
  authors: [{ name: "Birra Coffee General Trading P.L.C" }],
  creator: "Birra Coffee General Trading P.L.C",
  publisher: "Birra Coffee General Trading P.L.C",
  openGraph: {
    title: "Birra Group - Quality Coffee and Real Estate Solutions",
    description:
      "Birra Coffee General Trading P.L.C exports top-quality Ethiopian coffee and provides real estate and industrial solutions. Trusted by global partners.",
    url: "https://birragroup.com/",
    siteName: "Birra Group",
    images: [
      {
        url: "https://birragroup.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Birra Group Coffee Export and Real Estate",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birra Group - Quality Coffee and Real Estate Solutions",
    description:
      "Birra Coffee General Trading P.L.C exports top-quality Ethiopian coffee and provides real estate and industrial solutions.",
    images: [
      "https://birragroup.com/opengraph-image.png",
      "https://birra-website-fronted.vercel.app/opengraph-image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col bg-prima bg-gray-100 overflow-x-hidden max-w-screen`}
      >
        <Toaster />
        <SidebarProvider className="flex flex-col" open={false}>
          <div className="sm:hidden">
            <AppSidebar />
          </div>
          <StoreProvider>
            <Navbar />
          </StoreProvider>
          <div className="grow relative">{children}</div>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
