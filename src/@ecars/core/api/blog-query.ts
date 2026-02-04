import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';
import type {BlogArticle} from '@ecars/core/types/types';

export interface GetBlogArticlesRequest {
  pageSize?: number;
  sort?: string;
  populate?: string;
}

export interface GetBlogArticlesResponse {
  data: BlogArticle[];
}

export const getBlogArticlesQuery = (params?: GetBlogArticlesRequest): FetchArgs => {
  const queryParams: Record<string, string | number> = {};

  if (params?.pageSize) {
    queryParams['pagination[pageSize]'] = params.pageSize;
  }
  return {
    url: API_ENDPOINTS.BLOG,
    method: 'GET',
    params: queryParams,
  };
};
