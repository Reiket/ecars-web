import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from '@ecars/core/slices/api/apiSlice';
import authReducer from '@ecars/core/slices/store/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
