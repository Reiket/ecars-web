import {beforeEach, describe, expect, test} from 'vitest';
import type {LoginRequest, RegisterRequest} from '@ecars/core/api/auth-query';
import {selectCurrentUser} from '@ecars/core/slices/store/auth/authSlice';
import type {IntegrationTestStore} from '@ecars/core/test/store';
import {setupIntegrationTestStore} from '@ecars/core/test/store';
import {mockFetchFailure, mockFetchSuccess, setupFetchMocks} from '@ecars/core/test/fetch';
import {mockAuthResponse, mockGetUserResponse, mockUser} from '@ecars/core/slices/store/auth/mocks';
import {authApiSlice} from '@ecars/core/slices/api/authApiSlice';

setupFetchMocks();

describe('Auth Functional', () => {
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

  test('login mutation should not dispatch setCredentials on failure', async () => {
    mockFetchFailure({message: 'Unauthorized'}, 401);
    const mockLoginRequest: LoginRequest = {
      email: 'test@mail.com',
      password: 'password',
    };

    expect(selectCurrentUser(store.getState())).toBeNull();
    const result = await store.dispatch(authApiSlice.endpoints.login.initiate(mockLoginRequest));
    expect(result).toHaveProperty('error');
    expect(selectCurrentUser(store.getState())).toBeNull();
  });
});
