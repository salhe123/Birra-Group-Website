import { Category } from "./category.type";

export interface Products {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  subCategory: string;
  origin: string;
  isFeatured: boolean;
  packagingOptions: string;
  processingMethod: string;
  tastingNotes: string;
  stockQuantity: number;
  features: string;
  status: string;
  categoryId: number;
  category?: Category;
  createdAt: string;
  updatedAt: string;
}

export interface GetProducts {
  products: Products[];
}

export interface GetProductById {
  product: Products;
}
