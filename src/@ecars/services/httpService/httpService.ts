import axios, {AxiosHeaders, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {getJwt, writeJwt} from '../jwtService/jwtService';
import {REQUEST_HEADER_AUTH_TOKEN_FIELD} from '@ecars/services/httpService/constants';

export const httpService: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

httpService.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const authToken: string | null = getJwt();
    if (authToken) {
      if (!config.headers) {
        config.headers = new AxiosHeaders();
      }
      config.headers.set(REQUEST_HEADER_AUTH_TOKEN_FIELD, authToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpService.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const newToken = response.headers['REQUEST_HEADER_AUTH_TOKEN_FIELD'];
    if (newToken) {
      writeJwt(newToken);
    }
    return response;
  },
  (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
      console.log('An unexpected error occurred.');
    }
    return Promise.reject(error);
  },
);
