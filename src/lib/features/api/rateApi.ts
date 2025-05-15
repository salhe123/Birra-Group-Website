import { RateApi } from "@/types/rate.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rateApi = createApi({
  reducerPath: "rateApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://v6.exchangerate-api.com/v6/cc9bcd0b8eefb949f9f91b94/pair/USD/ETB",
  }),
  endpoints: (builder) => ({
    getRate: builder.query<RateApi, void>({
      query: () => "",
    }),
  }),
});

export const { useGetRateQuery } = rateApi;
