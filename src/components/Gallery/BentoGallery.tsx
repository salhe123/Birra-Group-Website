"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Gallery } from "@/types/gallery.type";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function BentoGallery({ images }: { images: Gallery[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image: Gallery, index) => (
          <div key={image.id} className={`relative overflow-hidden rounded-lg`}>
            <Image
              src={`https://backend.birragroup.com${image.imageUrl}`}
              alt={image.title}
              width={500}
              height={500}
              className="object-cover w-full h-full cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() =>
                setSelectedImage({ src: image.imageUrl, alt: image.title })
              }
            />
            <div
              className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"
              onClick={() =>
                setSelectedImage({ src: image.imageUrl, alt: image.title })
              }
            >
              <span className="text-white text-2xl font-semibold capitalize p-2">
                {image.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[90vw] aspect-video max-h-[90vh] p-0">
          {selectedImage && (
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src={`https://backend.birragroup.com${selectedImage.src}`}
                alt={selectedImage.alt}
                height={500}
                width={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-semibold capitalize p-2">
                  {selectedImage.alt}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
