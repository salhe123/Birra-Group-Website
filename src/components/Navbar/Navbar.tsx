"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, Home, Coffee, Building, Image, Book, Info, Factory, Phone, ShoppingBag, Utensils } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import React, { useState } from "react";
import { useGetCategoryQuery } from "@/lib/features/api/categoryApi";

export const NavbarLinks = [
  { title: "Home", link: "/", dropDown: false, icon: <Home className="w-4 h-4 mr-1" /> },
  { title: "Service", link: "/services", dropDown: false, icon: <ShoppingBag className="w-4 h-4 mr-1" /> },
  { title: "Products", link: "/products", dropDown: false, icon: <ShoppingBag className="w-4 h-4 mr-1" /> },
  { title: "Coffee", link: "#coffee", dropDown: true, icon: <Coffee className="w-4 h-4 mr-1" /> },
  { title: "Cafeteria", link: "/birra-cafeteria", dropDown: false, icon: <Utensils className="w-4 h-4 mr-1" /> },
  { title: "Apartment", link: "/apartment", dropDown: false, icon: <Building className="w-4 h-4 mr-1" /> },
  { title: "Gallery", link: "/gallery", dropDown: false, icon: <Image className="w-4 h-4 mr-1" /> },
  { title: "Blog", link: "/blogs", dropDown: false, icon: <Book className="w-4 h-4 mr-1" /> },
  { title: "About Us", link: "/about", dropDown: false, icon: <Info className="w-4 h-4 mr-1" /> },
  { title: "Factories", link: "/factories", dropDown: false, icon: <Factory className="w-4 h-4 mr-1" /> },
  { title: "Contact Us", link: "/contact-us", dropDown: false, icon: <Phone className="w-4 h-4 mr-1" /> },
];

export default function Navbar() {
  const { data } = useGetCategoryQuery();
  const categories = data?.categories;
  const [open, setOpen] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(-1);
  const [selectedLink, setSelectedLink] = useState("/");

  const toggleDropDown = (index) => {
    setActiveDropDown((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setOpen(false);
  };

  return (
    <nav className="bg-bg-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-extrabold text-text-neutral tracking-tight">
                Birra Group
              </Link>
            </div>
            <div className="hidden sm:ml-6 lg:flex sm:space-x-2">
              {NavbarLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link.dropDown ? (
                    <div className="relative inline-flex items-center">
                      <HoverCard openDelay={100} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center text-xs font-medium text-gray-200 hover:bg-bg-secondary hover:text-white rounded-md px-2 py-1 transition-all duration-300"
                            onClick={() => handleLinkClick(link.link)}
                          >
                            {link.icon}
                            {link.title}
                            <ChevronDown className="ml-1 w-3 h-3" />
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-48 bg-bg-secondary border-gray-700 rounded-lg shadow-xl p-2">
                          {categories?.map((category) => (
                            <Link
                              key={category.id}
                              href={`/products/category/${category.id}`}
                              className="flex items-center px-3 py-2 text-xs text-gray-200 hover:bg-gray-700 hover:text-white rounded-md transition-all duration-300"
                              onClick={() => handleLinkClick(`/products/category/${category.id}`)}
                            >
                              <Coffee className="w-4 h-4 mr-1" />
                              {category.name}
                            </Link>
                          ))}
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  ) : (
                    <Link
                      href={link.link}
                      className="relative flex items-center px-2 py-1 text-xs font-medium text-gray-200 hover:bg-bg-secondary hover:text-white rounded-md transition-all duration-300 group"
                      onClick={() => handleLinkClick(link.link)}
                    >
                      {link.icon}
                      {link.title}
                      {selectedLink === link.link && (
                        <>
                          <span className="absolute top-[-2px] left-0 w-full h-[2px] bg-white"></span>
                          <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white"></span>
                        </>
                      )}
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Menu className="cursor-pointer h-6 w-6 text-text-neutral" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-bg-primary text-text-neutral">
                <SheetHeader>
                  <SheetTitle className="text-lg font-bold text-text-neutral">
                    Birra Group
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {NavbarLinks.map((link, index) => (
                    <React.Fragment key={index}>
                      {link.dropDown ? (
                        <div className="space-y-2">
                          <div
                            className="font-semibold text-text-neutral cursor-pointer flex items-center justify-between w-full"
                            onClick={() => toggleDropDown(index)}
                          >
                            <div className="flex items-center">
                              {link.icon}
                              {link.title}
                            </div>
                            {activeDropDown === index ? <ChevronUp /> : <ChevronDown />}
                          </div>
                          {activeDropDown === index && (
                            <div className="pl-6 space-y-2 divide-y divide-gray-700">
                              {categories?.map((category) => (
                                <Link
                                  key={category.id}
                                  href={`/products/category/${category.id}`}
                                  onClick={() => handleLinkClick(`/products/category/${category.id}`)}
                                  className="block text-xs text-gray-200 hover:text-white pt-2"
                                >
                                  <div className="flex items-center">
                                    <Coffee className="w-4 h-4 mr-1" />
                                    {category.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.link}
                          onClick={() => handleLinkClick(link.link)}
                          className="block text-xs text-gray-200 hover:text-white py-2"
                        >
                          <div className="flex items-center">
                            {link.icon}
                            {link.title}
                          </div>
                          {selectedLink === link.link && (
                            <div className="mt-1 h-[2px] bg-white w-full"></div>
                          )}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}