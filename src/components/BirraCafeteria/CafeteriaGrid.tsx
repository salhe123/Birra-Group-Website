import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const cafeteriaImages = [
  { src: "/cafeteria1.jpg", alt: "Cafeteria interior" },
  { src: "/cafeteria2.jpg", alt: "Coffee brewing" },
  { src: "/cafeteria3.jpg", alt: "Pastry display" },
  { src: "/cafeteria4.jpg", alt: "Outdoor seating" },
  { src: "/cafeteria5.jpg", alt: "Barista at work" },
  { src: "/cafeteria6.jpg", alt: "Latte art" },
];

export function CafeteriaGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cafeteriaImages.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
