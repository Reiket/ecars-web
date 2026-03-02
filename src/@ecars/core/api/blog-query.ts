import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';
import type {BlogArticleType} from '@ecars/core/types/types';
import {STRAPI_PARAMS} from '@ecars/constants/strapi-params';

export interface GetBlogArticlesRequest {
  page?: number;
  pageSize?: number;
  sort?: string;
  populate?: string;
  image?: string;
  fields?: string[];
  limit?: number;
  filters?: Record<string, unknown>;
  recommendedStatus?: boolean;
}

export interface GetBlogArticleResponse {
  data: BlogArticleType;
}

export interface GetBlogArticleRequest {
  id: string;
  populate?: string;
}

export interface GetBlogArticlesResponse {
  data: BlogArticleType[];
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
      [STRAPI_PARAMS.RECOMMENDED_STATUS]: {
        $eq: params?.recommendedStatus,
      },
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

export const getBlogArticleByIdQuery = (params: GetBlogArticleRequest): FetchArgs => {
  const queryParams = {
    [STRAPI_PARAMS.POPULATE]: params.populate,
  };

  return {
    url: `${API_ENDPOINTS.BLOG}/${params.id}`,
    method: 'GET',
    params: queryParams,
  };
};
