import { GetBlogPostResponse, GetBlogPostsResponse } from "@/types/blogs.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://backend.birragroup.com/api" }),
  endpoints: (builder) => ({
    getBlogPosts: builder.query<GetBlogPostsResponse, void>({
      query: () => "/blogs",
    }),
    getBlogPost: builder.query<GetBlogPostResponse, number>({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogPostsQuery, useGetBlogPostQuery } = blogsApi;
