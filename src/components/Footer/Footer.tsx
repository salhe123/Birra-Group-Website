"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-b from-[#2c2620] to-[#3a2f27] text-white pt-16 pb-10 mt-24 border-t border-amber-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4 col-span-2">
            <div className="flex items-center space-x-3">
              <div className="transform hover:scale-110 hover:rotate-3 transition-transform duration-300">
                <Image
                  src="/birra-group.png"
                  alt="Birra Coffee Logo"
                  width={45}
                  height={45}
                  className="rounded-full shadow-md"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold tracking-wide text-amber-200 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400">
                Birra Coffee Co.
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Handcrafting coffee with heart in Addis Ababa since 2023. Come for the beans, stay for the warmth.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-amber-300 text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              {["services", "products", "gallery"].map((item) => (
                <li
                  key={item}
                  className="transform hover:translate-x-1 transition-transform duration-200"
                >
                  <Link
                    href={`/${item}`}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-amber-300 text-lg font-semibold mb-4">Contact</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="transform hover:translate-x-1 transition-transform duration-200">
                Addis Ababa, Bole
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-200">
                <a
                  href="mailto:birracoffee@gmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  birracoffee@gmail.com
                </a>
              </li>
              <li className="transform hover:translate-x-1 transition-transform duration-200">
                <a
                  href="tel:+25194567890"
                  className="hover:text-amber-400 transition-colors"
                >
                  (+251) 9456-7890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social & Divider */}
        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-amber-900/30 pt-8"
        >
          <div className="flex justify-center gap-6 mb-6">
            {[
              { name: "Facebook", src: "/facebook.png" },
              { name: "Twitter", src: "/twitter.png" },
              { name: "Instagram", src: "/instagram.png" },
              { name: "WhatsApp", src: "/whatsapp.png" },
            ].map((icon) => (
              <Button
                key={icon.name}
                variant="ghost"
                size="icon"
                aria-label={icon.name}
                className="bg-[#332417] hover:bg-[#442e1e] text-white transition-all duration-300 rounded-full p-2 shadow-lg hover:shadow-amber-500/20 transform hover:scale-110 hover:rotate-6"
              >
                <Image src={icon.src} alt={icon.name} width={22} height={22} />
              </Button>
            ))}
          </div>
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-2 text-sm text-gray-500"
          >
            <span>☕</span>
            <span className="italic">Brewed with passion in Ethiopia</span>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-6 text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Birra Coffee Co. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}