"use client";

import { cn } from "@/lib/utils";
import { Partner } from "@/types/partner.type";
import React, { useEffect, useState, useCallback } from "react";
import { Award } from "./Award";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShowCompanies({ logos }: { logos: Partner[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [logosPerSlide, setLogosPerSlide] = useState(4);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const updateLogosPerSlide = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) {
        setLogosPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setLogosPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setLogosPerSlide(2);
      } else {
        setLogosPerSlide(1);
      }
    }
  }, []);

  useEffect(() => {
    updateLogosPerSlide();
    window.addEventListener("resize", updateLogosPerSlide);
    return () => window.removeEventListener("resize", updateLogosPerSlide);
  }, [updateLogosPerSlide]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, logosPerSlide]);

  const totalSlides = Math.ceil(logos.length / logosPerSlide);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 dark:bg-[#3b2413] ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold my-8 text-black dark:text-white mb-8 text-center">
          Certification And Awards
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="min-w-full flex justify-center items-center gap-4 sm:gap-8 px-4"
              >
                {logos
                  .slice(
                    slideIndex * logosPerSlide,
                    (slideIndex + 1) * logosPerSlide
                  )
                  .map((logo, index) => (
                    <div
                      key={index}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center"
                    >
                      <Award partner={logo} />
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-2 transform -translate-y-1/2 dark:bg-slate-100 bg-white/80 hover:bg-white"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-2 dark:bg-slate-100 transform -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
