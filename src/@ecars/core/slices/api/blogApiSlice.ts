import {apiSlice} from '@ecars/core/slices/api/apiSlice';
import type {
  GetBlogArticleRequest,
  GetBlogArticleResponse,
  GetBlogArticlesRequest,
  GetBlogArticlesResponse,
} from '@ecars/core/api/blog-query';
import {getBlogArticleByIdQuery, getBlogArticlesQuery} from '@ecars/core/api/blog-query';

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogArticles: builder.query<GetBlogArticlesResponse, GetBlogArticlesRequest>({
      query: getBlogArticlesQuery,
    }),
    getBlogArticleById: builder.query<GetBlogArticleResponse, GetBlogArticleRequest>({
      query: getBlogArticleByIdQuery,
    }),
  }),
});

export const {useGetBlogArticlesQuery, useGetBlogArticleByIdQuery} = blogApiSlice;
