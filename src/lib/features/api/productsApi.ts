import { GetProductById, GetProducts } from "@/types/product.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "preductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query<GetProducts, void>({
      query: () => "/product",
    }),
    getProductById: builder.query<GetProductById, string>({
      query: (id) => `/product/${id}`,
    }),
    getProductsByCategory: builder.query<GetProducts, number>({
      query: (id) => `/product/by-category/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
