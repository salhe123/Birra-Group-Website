export interface Service {
  id: number;
  title: string;
  description: string;
  category: string;
  time: string;
  pricing: number;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetServicesResponse {
  services: Service[];
}

export interface GetServiceResponse {
  service: Service;
}
