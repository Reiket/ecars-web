import {apiSlice} from '@ecars/core/slices/api/apiSlice';
import type {GetBlogArticlesRequest, GetBlogArticlesResponse} from '@ecars/core/api/blog-query';
import {getBlogArticlesQuery} from '@ecars/core/api/blog-query';

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogArticles: builder.query<GetBlogArticlesResponse, GetBlogArticlesRequest>({
      query: getBlogArticlesQuery,
    }),
  }),
});

export const {useGetBlogArticlesQuery} = blogApiSlice;
