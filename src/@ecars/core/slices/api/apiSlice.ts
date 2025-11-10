import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta} from '@reduxjs/toolkit/query/react';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {SLICE_TAGS} from '@ecars/constants/slice-tags';
import {toast} from 'react-toastify';

const rawBaseQuery = fetchBaseQuery({
  credentials: 'include',
  baseUrl: import.meta.env.VITE_API_BASE_URL,
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const error = result.error;
    if (error.status === 'FETCH_ERROR') {
      toast.error(error.error);
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: Object.values(SLICE_TAGS),
  endpoints: () => ({}),
});
