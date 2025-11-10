import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {apiSlice} from '@ecars/core/slices/api/apiSlice';
import authReducer from '@ecars/core/slices/store/auth/authSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

export type TestRootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setupIntegrationTestStore = (preloadedState?: TestRootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type IntegrationTestStore = ReturnType<typeof setupIntegrationTestStore>;
export type TestAppDispatch = IntegrationTestStore['dispatch'];
