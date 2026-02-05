import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';
import type {BlogArticle} from '@ecars/core/types/types';
import {STRAPI_PARAMS} from '@ecars/constants/strapi-params';

export interface GetBlogArticlesRequest {
  pageSize?: number;
  sort?: string;
  populate?: string;
}

export interface GetBlogArticlesResponse {
  data: BlogArticle[];
}

export const getBlogArticlesQuery = (params?: GetBlogArticlesRequest): FetchArgs => ({
  url: API_ENDPOINTS.BLOG,
  method: 'GET',
  params: {
    [STRAPI_PARAMS.POPULATE]: 'imageUrl',
    ...(params?.pageSize && {[STRAPI_PARAMS.PAGE_SIZE]: params.pageSize}),
  },
});
