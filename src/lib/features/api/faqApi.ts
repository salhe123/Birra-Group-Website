import { GetFAQResponse } from "@/types/faq.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getFaq: builder.query<GetFAQResponse, void>({
      query: () => `/faq`,
    }),
  }),
});

export const { useGetFaqQuery } = faqApi;
