import { Partner } from "@/types/partner.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const partnerApi = createApi({
  reducerPath: "partnerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getPartners: builder.query<Partner[], void>({
      query: () => "/partner",
    }),
  }),
});

export const { useGetPartnersQuery } = partnerApi;
