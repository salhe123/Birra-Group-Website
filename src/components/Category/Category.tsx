import { Category as CategoryType } from "@/types/category.type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Circle, Square, Triangle } from "lucide-react";
import Link from "next/link";

export default function Category({ category }: { category: CategoryType }) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "box":
        return <Box className="h-6 w-6" />;
      case "circle":
        return <Circle className="h-6 w-6" />;
      case "square":
        return <Square className="h-6 w-6" />;
      case "triangle":
        return <Triangle className="h-6 w-6" />;
      default:
        return <Box className="h-6 w-6" />;
    }
  };

  return (
    <Card className="w-full max-w-sm hover:scale-105 bg-bg-primary/85 hover:bg-bg-primary/70 text-white transition-all duration-300">
      <Link href={`/gallery/${category.id}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-semibold">
            {category.name}
          </CardTitle>
          {/* {getIcon(category.type)} */}
        </CardHeader>
        <CardContent>
          {/* <p className="text-xs text-muted-foreground bg-gray-200 rounded-xl w-fit p-1 px-2">
            {category.type}
          </p> */}
          <p className="text-sm mt-2">{category.description}</p>
        </CardContent>
      </Link>
    </Card>
  );
}
