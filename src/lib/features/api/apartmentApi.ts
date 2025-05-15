import { Apartment } from "@/types/apartment.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apartmentApi = createApi({
  reducerPath: "apartmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getApartments: builder.query<Apartment[], void>({
      query: () => "/apartment",
    }),
    getApartment: builder.query<Apartment, string>({
      query: (id) => `/apartment/${id}`,
    }),
  }),
});

export const { useGetApartmentsQuery, useGetApartmentQuery } = apartmentApi;
