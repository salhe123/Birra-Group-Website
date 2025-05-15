export interface Category {
  id: number;
  name: string;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCategoriesResponse {
  categories: Category[];
}
