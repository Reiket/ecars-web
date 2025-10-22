import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SLICE_TAGS} from '@ecars/constants/slice-tags';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_URL,
    credentials: 'include',
  }),
  tagTypes: Object.values(SLICE_TAGS),
  endpoints: () => ({}),
});
