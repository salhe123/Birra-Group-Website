import { GetGalleryResponse } from "@/types/gallery.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const galleryApi = createApi({
  reducerPath: "galleryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getCategoryGallery: builder.query<GetGalleryResponse, number>({
      query: (id) => `/gallery/category/${id}`,
    }),
  }),
});

export const { useGetCategoryGalleryQuery } = galleryApi;
