import {API_ENDPOINTS} from '@ecars/constants/api-urls';
import type {User} from '@ecars/core/types/types';
import type {FetchArgs} from '@reduxjs/toolkit/query/react';

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export type GetUserResponse = User;

export interface AuthResponse {
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  code: string;
  password: string;
  passwordConfirmation: string;
}

export const registerQuery = (credentials: RegisterRequest): FetchArgs => ({
  url: API_ENDPOINTS.REGISTER,
  method: 'POST',
  body: credentials,
});

export const loginQuery = (credentials: LoginRequest): FetchArgs => ({
  url: API_ENDPOINTS.LOGIN,
  method: 'POST',
  body: {
    identifier: credentials.email,
    password: credentials.password,
  },
});

export const getCurrentUserQuery = (): FetchArgs => ({
  url: API_ENDPOINTS.AUTH_USER,
  method: 'GET',
});

export const forgotPasswordQuery = (data: ForgotPasswordRequest): FetchArgs => ({
  url: API_ENDPOINTS.FORGOT_PASSWORD,
  method: 'POST',
  body: {
    email: data.email,
  },
});

export const resetPasswordQuery = (data: ResetPasswordRequest): FetchArgs => ({
  url: API_ENDPOINTS.RESET_PASSWORD,
  method: 'POST',
  body: {
    code: data.code,
    password: data.password,
    passwordConfirmation: data.passwordConfirmation,
  },
});
