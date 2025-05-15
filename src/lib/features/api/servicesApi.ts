import { GetServiceResponse, GetServicesResponse } from "@/types/service.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getServices: builder.query<GetServicesResponse, void>({
      query: () => "/service",
    }),
    getService: builder.query<GetServiceResponse, string>({
      query: (id) => `/service/${id}`,
    }),
  }),
});

export const { useGetServicesQuery, useGetServiceQuery } = servicesApi;
