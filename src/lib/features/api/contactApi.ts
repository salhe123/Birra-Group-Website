import { Contact } from "@/types/contact.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    postContact: builder.mutation<void, Contact>({
      query: (body) => ({
        url: "/contact",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostContactMutation } = contactApi;
