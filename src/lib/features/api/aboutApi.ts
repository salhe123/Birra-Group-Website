import { GetAbout } from "@/types/about.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutApi = createApi({
  reducerPath: "aboutApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getAbout: builder.query<GetAbout, void>({
      query: () => "/about",
    }),
  }),
});

export const { useGetAboutQuery } = aboutApi;
