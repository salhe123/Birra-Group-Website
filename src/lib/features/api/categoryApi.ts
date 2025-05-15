import { GetCategoriesResponse } from "@/types/category.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getCategory: builder.query<GetCategoriesResponse, void>({
      query: () => "/category",
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
