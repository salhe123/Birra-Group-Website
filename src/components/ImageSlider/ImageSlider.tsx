"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselProps {
  slides: {
    image: string;
    title: string;
  }[];
}

export default function ImageSlider({ slides }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[350px] sm:h-[600px] w-full overflow-hidden bg-black/90 p-10 px-20 py-10">
      <div className="absolute inset-0 flex items-center justify-center px-16">
        {slides.map((slide, index) => {
          let offset = index - currentSlide;
          if (offset < -2) offset += slides.length;
          if (offset > 2) offset -= slides.length;

          return (
            <div
              key={index}
              className={cn(
                "absolute w-[70%] max-w-[700px] transition-all duration-500 ease-in-out",
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
              <div className="relative aspect-[16/11] sm:aspect-[16/9]">
                <Image
                  fill
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {slide.title}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

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
