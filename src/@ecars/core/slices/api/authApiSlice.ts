import {apiSlice} from './apiSlice';
import {setCredentials} from '@ecars/core/slices/store/auth/authSlice';
import type {
  AuthResponse,
  ForgotPasswordRequest,
  GetUserResponse,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '@ecars/core/api/auth-query';
import {
  resetPasswordQuery,
  forgotPasswordQuery,
  getCurrentUserQuery,
  loginQuery,
  registerQuery,
} from '@ecars/core/api/auth-query';

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
    forgotPassword: builder.mutation<undefined, ForgotPasswordRequest>({
      query: forgotPasswordQuery,
    }),
    resetPassword: builder.mutation<AuthResponse, ResetPasswordRequest>({
      query: resetPasswordQuery,
      async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setCredentials(data.user));
      },
    }),
  }),
});
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
