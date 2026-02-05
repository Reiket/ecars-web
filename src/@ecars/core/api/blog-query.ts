import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';
import type {BlogArticle} from '@ecars/core/types/types';
import {STRAPI_PARAMS} from '@ecars/constants/strapi-params';

export interface GetBlogArticlesRequest {
  pageSize?: number;
  sort?: string;
  populate?: string;
  image?: string;
}

export interface GetBlogArticlesResponse {
  data: BlogArticle[];
}

export const getBlogArticlesQuery = (params?: GetBlogArticlesRequest): FetchArgs => {
  const queryParams = {
    [STRAPI_PARAMS.POPULATE]: params?.image,
    [STRAPI_PARAMS.PAGE_SIZE]: params?.pageSize,
  };

  const cleanParams = Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v != null));

  return {
    url: API_ENDPOINTS.BLOG,
    method: 'GET',
    params: cleanParams,
  };
};
