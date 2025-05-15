export interface Features {
  pool: boolean;
  gym: boolean;
}

export interface Apartment {
  id: number;
  title: string;
  description: string | null;
  location: string;
  noRoom: string;
  features: Features;
  price: number;
  availableFrom: string;
  availableTo: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}
