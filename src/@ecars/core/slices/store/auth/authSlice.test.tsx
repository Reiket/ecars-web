import {beforeEach, describe, expect, test} from 'vitest';
import type {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '@ecars/core/api/auth-query';
import {selectCurrentUser} from '@ecars/core/slices/store/auth/authSlice';
import type {IntegrationTestStore} from '@ecars/services/__mocks__/store';
import {setupIntegrationTestStore} from '@ecars/services/__mocks__/store';
import {mockFetchSuccess, setupFetchMocks} from '@ecars/services/__mocks__/fetch';
import {mockAuthResponse, mockGetUserResponse, mockUser} from '@ecars/core/slices/store/auth/mocks';
import {authApiSlice} from '@ecars/core/slices/api/authApiSlice';

setupFetchMocks();

describe('Auth slice', () => {
  let store: IntegrationTestStore;

  beforeEach(() => {
    store = setupIntegrationTestStore();
  });

  test('login mutation (onQueryStarted) should dispatch setCredentials on success', async () => {
    mockFetchSuccess(mockAuthResponse);
    const mockLoginRequest: LoginRequest = {
      email: 'test@mail.com',
      password: 'password',
    };

    expect(selectCurrentUser(store.getState())).toBeNull();
    await store.dispatch(authApiSlice.endpoints.login.initiate(mockLoginRequest));
    expect(selectCurrentUser(store.getState())).toEqual(mockUser);
  });

  test('register mutation (onQueryStarted) should dispatch setCredentials on success', async () => {
    mockFetchSuccess(mockAuthResponse);
    const mockRegisterRequest: RegisterRequest = {
      email: 'test@mail.com',
      password: 'password',
      username: 'test',
    };

    expect(selectCurrentUser(store.getState())).toBeNull();
    await store.dispatch(authApiSlice.endpoints.register.initiate(mockRegisterRequest));
    expect(selectCurrentUser(store.getState())).toEqual(mockUser);
  });

  test('getCurrentUser query (onQueryStarted) should dispatch setCredentials on success', async () => {
    mockFetchSuccess(mockGetUserResponse);
    expect(selectCurrentUser(store.getState())).toBeNull();
    await store.dispatch(authApiSlice.endpoints.getCurrentUser.initiate(undefined));
    expect(selectCurrentUser(store.getState())).toEqual(mockUser);
  });
  test('forgotPassword mutation should execute successfully but NOT update credentials', async () => {
    mockFetchSuccess({});
    const mockForgotRequest: ForgotPasswordRequest = {
      email: 'test@mail.com',
    };

    expect(selectCurrentUser(store.getState())).toBeNull();
    const result = await store.dispatch(authApiSlice.endpoints.forgotPassword.initiate(mockForgotRequest));
    expect(result).toMatchObject({});
    expect(selectCurrentUser(store.getState())).toBeNull();
  });
  test('resetPassword mutation (onQueryStarted) should dispatch setCredentials on success', async () => {
    mockFetchSuccess(mockAuthResponse);

    const mockResetRequest: ResetPasswordRequest = {
      code: 'some-reset-code',
      password: 'newPassword123',
      passwordConfirmation: 'newPassword123',
    };

    expect(selectCurrentUser(store.getState())).toBeNull();
    await store.dispatch(authApiSlice.endpoints.resetPassword.initiate(mockResetRequest));
    expect(selectCurrentUser(store.getState())).toEqual(mockUser);
  });
});
