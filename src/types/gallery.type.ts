interface GalleryCategory {
  id: number;
  name: string;
}

export interface Gallery {
  id: number;
  title: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  category: GalleryCategory;
}

export interface GetGalleryResponse {
  success: boolean;
  galleries: Gallery[];
}
