import {useGetBlogArticlesQuery} from '@ecars/core/slices/api/blogApiSlice';
import type {GetBlogArticlesResponse} from '@ecars/core/api/blog-query';

interface UseBlogResult {
  isLoading: boolean;
  data?: GetBlogArticlesResponse;
}

interface BlogParams {
  pageSize?: number;
  sort?: string;
  populate?: string;
  image?: string;
  fields?: string[];
  limit?: number;
  page?: number;
  filters?: Record<string, unknown>;
}

export const useBlog = (params: BlogParams, options?: {skip: boolean}): UseBlogResult => {
  const {data, isLoading} = useGetBlogArticlesQuery(params, options);
  return {data, isLoading};
};
