import { GetSlider } from "@/types/slide.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderApi = createApi({
  reducerPath: "sliderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getSlider: builder.query<GetSlider, void>({
      query: () => "/slider",
    }),
  }),
});

export const { useGetSliderQuery } = sliderApi;
