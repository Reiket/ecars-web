import type {EnhancedStore} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from '@ecars/core/slices/api/apiSlice';
import authReducer from '@ecars/core/slices/store/auth/authSlice';

export const setupIntegrationTestStore = (): EnhancedStore => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type IntegrationTestStore = ReturnType<typeof setupIntegrationTestStore>;
