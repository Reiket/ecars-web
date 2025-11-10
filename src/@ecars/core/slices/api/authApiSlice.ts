import {apiSlice} from './apiSlice';
import {setCredentials} from '@ecars/core/slices/store/auth/authSlice';
import type {AuthResponse, GetUserResponse, LoginRequest, RegisterRequest} from '@ecars/core/api/auth-query';
import {getCurrentUserQuery, loginQuery, registerQuery} from '@ecars/core/api/auth-query';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: registerQuery,
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setCredentials(data.user));
      },
    }),
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: loginQuery,
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setCredentials(data.user));
      },
    }),
    getCurrentUser: builder.query<GetUserResponse, undefined>({
      query: getCurrentUserQuery,
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setCredentials(data));
      },
    }),
  }),
});
export const {useRegisterMutation, useLoginMutation, useGetCurrentUserQuery} = authApiSlice;
