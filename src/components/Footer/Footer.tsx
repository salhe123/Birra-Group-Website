import Link from "next/link";
import { Button } from "../ui/button";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircleMore,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Coffee Co.</h3>
            <p className="text-sm">
              Delivering the finest coffee experience since 2023.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/products">Products</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Addis Abeba, Bole</p>
            <p className="text-sm">Email: birracoffee@gmail.com</p>
            <p className="text-sm">Phone: (+251) 9456-7890</p>
          </div>
        </div>
        <div className="gap-2 flex flex-wrap max-w-3xl justify-evenly text-black my-5 mx-auto">
          <Button variant="outline" size="icon" aria-label="Facebook">
            <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
          </Button>
          <Button variant="outline" size="icon" aria-label="Twitter">
            <Image src="/twitter.png" alt="twitter" width={24} height={24} />
          </Button>
          <Button variant="outline" size="icon" aria-label="Instagram">
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Button>
          <Button variant="outline" size="icon" aria-label="WhatsApp">
            <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} />
          </Button>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Birra Coffee Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
