import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "../ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { ChevronDown } from "lucide-react";

export const NavbarLinks = [
  { title: "Home", link: "/", dropDown: false },
  { title: "Service", link: "/services", dropDown: false },
  { title: "Products", link: "/products", dropDown: false },
  { title: "Coffee", link: "#coffee", dropDown: true },
  { title: "Cafeteria", link: "/birra-cafeteria", dropDown: false },
  { title: "Apartment", link: "/apartment", dropDown: false },
  { title: "Gallery", link: "/gallery", dropDown: false },
  { title: "Blog", link: "/blogs", dropDown: false },
  { title: "About Us", link: "/about", dropDown: false },
  { title: "Factories", link: "/factories", dropDown: false },
  { title: "Contact Us", link: "/contact-us", dropDown: false },
];

export default function AppSidebar() {
  return (
    <Sidebar className="sm:hidden">
      <SidebarHeader className="bg-gray-200 border-b-2 border-gray-300">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Birra Coffee
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-gray-200 py-4">
        {NavbarLinks.map((link, index) => (
          <SidebarGroup key={index} className="border-b border-gray-300 py-2">
            {link.dropDown ? (
              <div className="relative w-full">
                <HoverCard openDelay={50} closeDelay={50}>
                  <HoverCardTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full flex justify-between items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                    >
                      {link.title} <ChevronDown />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-full">
                    <div className="flex flex-col space-y-2">
                      <Link
                        href="/#jimma-coffee"
                        className="relative inline-flex items-center px-2 py-1 text-sm font-medium text-gray-600 transition-all duration-150 hover:text-gray-900"
                      >
                        Jimma Coffee
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-400 transition-all duration-150 hover:w-full"></span>
                      </Link>
                      <Link
                        href="/#hara-coffee"
                        className="relative inline-flex items-center px-2 py-1 text-sm font-medium text-gray-600 transition-all duration-150 hover:text-gray-900"
                      >
                        Hara Coffee
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gray-400 transition-all duration-150 hover:w-full"></span>
                      </Link>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            ) : (
              <Link
                href={link.link}
                className="block px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-150 hover:text-gray-900"
              >
                {link.title}
              </Link>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="bg-gray-200 p-4 text-center text-sm">
        © 2024 Birra Coffee
      </SidebarFooter>
    </Sidebar>
  );
}
