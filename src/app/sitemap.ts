import { Apartment } from "@/types/apartment.type";
import { BlogPost } from "@/types/blogs.type";
import { Products } from "@/types/product.type";
import { Service } from "@/types/service.type";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetching products
  const productResponse = await fetch(
    "https://backend.birragroup.com/api/product"
  );
  if (!productResponse.ok) {
    console.error("Failed to fetch products");
    return []; // Return empty array if there's an error fetching products
  }
  const { products } = await productResponse.json();

  const productUrls = products.map((product: Products) => ({
    url: `https://birragroup.com/products/${product.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
  }));

  // Fetching blogs
  const blogResponse = await fetch("https://backend.birragroup.com/api/blogs");
  if (!blogResponse.ok) {
    console.error("Failed to fetch blogs");
    return []; // Return empty array if there's an error fetching blogs
  }
  const { blogs } = await blogResponse.json();

  const blogUrls = blogs.map((blog: BlogPost) => ({
    url: `https://birragroup.com/blogs/${blog.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
  }));

  // Fetching apartments
  const apartmentResponse = await fetch(
    "https://backend.birragroup.com/api/apartment"
  );
  if (!apartmentResponse.ok) {
    console.error("Failed to fetch apartments");
    return []; // Return empty array if there's an error fetching apartments
  }
  const apartments = await apartmentResponse.json();

  const apartmentUrls = apartments.map((apartment: Apartment) => ({
    url: `https://birragroup.com/apartment/${apartment.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
  }));

  const servicesResponse = await fetch(
    "https://backend.birragroup.com/api/service"
  );
  if (!servicesResponse.ok) {
    console.log("Failed to fetch services");
    return [];
  }

  const { services } = await servicesResponse.json();

  const serviceUrls = services.map((service: Service) => ({
    url: `https://birragroup.com/services/${service.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
  }));

  return [
    {
      url: "https://birragroup.com", // Homepage URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/services", // Services page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/products", // Products page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/contact-us", // Contact Us page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/apartment", // Apartment page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/gallery", // Gallery page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/coffee", // Coffee page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/factories", // Factories page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/birra-cafeteria",
      lastModified: new Date().toDateString(),
    },
    {
      url: "https://birragroup.com/blogs", // Blogs page URL
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://birragroup.com/about", // About Us page URL
      lastModified: new Date().toISOString(),
    },
    ...productUrls, // Product URLs
    ...blogUrls, // Blog URLs
    ...apartmentUrls, // Apartment URLs
    ...serviceUrls, // Service URLs
  ];
}
