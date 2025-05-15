"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useGetSliderQuery } from "@/lib/features/api/slideApi";
import { notFound } from "next/navigation";
import Error from "../Error";

export default function HeroImage() {
  const { data, isLoading, isError } = useGetSliderQuery();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slides = data?.sliders || [];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  if (isError) {
    return <Error />;
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[35vh] sm:h-[60vh] md:h-[80vh] w-full overflow-hidden  p-10 px-20 py-10">
      <div className="absolute inset-0 flex items-center justify-center px-16">
        {slides.map((slide, index) => {
          let offset = index - currentSlide;
          if (offset < -2) offset += slides.length;
          if (offset > 2) offset -= slides.length;

          return (
            <div
              key={index}
              className={cn(
                "absolute w-full transition-all duration-700",
                "rounded-2xl overflow-hidden shadow-2xl",
                "transform-gpu",
                offset === 0 && "z-20",
                offset === -1 &&
                  "-translate-x-[65%] -rotate-[5deg] scale-75 opacity-60 z-10 blur-md",
                offset === 1 &&
                  "translate-x-[65%] rotate-[5deg] scale-75 opacity-60 z-10 blur-md",
                offset === -2 &&
                  "-translate-x-[105%] -rotate-[5deg] scale-50 opacity-30 blur-md",
                offset === 2 &&
                  "translate-x-[105%] rotate-[5deg] scale-50 opacity-30 blur-sm",
                Math.abs(offset) > 2 && "opacity-0"
              )}
            >
              <div className="relative w-full h-full">
                <Image
                  // fill
                  src={slide.image}
                  alt={slide.title}
                  height={500}
                  width={800}
                  className="h-full w-full object-cover brightness-80"
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center">
                  <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-white">
                    {slide.title}
                  </h1>
                  <h2 className="max-w-3xl text-center text-xl md:text-2xl text-balance font-semibold text-white/90 line-clamp-2 md:line-clamp-3">
                    {slide.description}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
