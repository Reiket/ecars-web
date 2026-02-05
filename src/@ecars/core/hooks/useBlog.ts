import {useGetBlogArticlesQuery} from '@ecars/core/slices/api/blogApiSlice';
import {BLOG_QUERY_PARAMS} from '@ecars/uiKit/Blog/constants';
import type {GetBlogArticlesResponse} from '@ecars/core/api/blog-query';

interface UseBlogResult {
  isLoading: boolean;
  data?: GetBlogArticlesResponse;
}

export const useBlog = (): UseBlogResult => {
  const {data, isLoading} = useGetBlogArticlesQuery(BLOG_QUERY_PARAMS);
  return {data, isLoading};
};
