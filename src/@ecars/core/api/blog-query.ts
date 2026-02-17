import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';
import type {BlogArticle} from '@ecars/core/types/types';
import {STRAPI_PARAMS} from '@ecars/constants/strapi-params';

export interface GetBlogArticlesRequest {
  page?: number;
  pageSize?: number;
  sort?: string;
  populate?: string;
  image?: string;
  fields?: string[];
  limit?: number;
  filters?: Record<string, string>;
  recommendedStatus?: boolean;
}

export interface GetBlogArticlesResponse {
  data: BlogArticle[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type ArticlesDataType = GetBlogArticlesResponse;

export const getBlogArticlesQuery = (params?: GetBlogArticlesRequest): FetchArgs => {
  console.log(params?.recommendedStatus);
  const queryParams = {
    [STRAPI_PARAMS.POPULATE]: params?.image,
    [STRAPI_PARAMS.FIELDS]: params?.fields,
    pagination: {
      page: params?.page,
      pageSize: params?.pageSize,
      limit: params?.limit,
    },
    filters: {
      ...params?.filters,
      ...(params?.recommendedStatus !== undefined && {
        [STRAPI_PARAMS.RECOMMENDED_STATUS]: {
          $eq: params.recommendedStatus,
        },
      }),
    },
    sort: params?.sort,
  };
  const cleanParams = Object.fromEntries(Object.entries(queryParams).filter(([_, v]) => v != null));

  return {
    url: API_ENDPOINTS.BLOG,
    method: 'GET',
    params: cleanParams,
  };
};
