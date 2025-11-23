import {describe, expect, test, vi} from 'vitest';
import type {LoginForm} from '@ecars/core/hooks/useLoginForm';
import {useLoginForm} from '@ecars/core/hooks/useLoginForm';
import {
  defaultMutationState,
  mockApiError,
  mockErrorMessage,
  mockFormEvent,
  mockHandleSubmit,
  mockMutationFunction,
  mockNavigate,
} from '@ecars/services/__mocks__/tests';
import type {SubmitHandler} from 'react-hook-form';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {useLoginMutation} from '@ecars/core/slices/api/authApiSlice';
import {act, renderHook} from '@testing-library/react';
import {PageUrls} from '@ecars/constants/page-urls';
import {toast} from 'react-toastify';

vi.mock('@ecars/services/helpers/errors', () => ({
  getErrorMessage: vi.fn(),
}));

vi.mock('@ecars/core/slices/api/authApiSlice', () => ({
  useLoginMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
}));

describe('useLoginForm hook', () => {
  const mockFormData: LoginForm = {
    email: 'test@example.com',
    password: 'password123',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockHandleSubmit.mockImplementation((onSubmit: SubmitHandler<LoginForm>) => (e: Event) => {
      e.preventDefault();
      return onSubmit(mockFormData);
    });

    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.resolve(),
    });

    vi.mocked(getErrorMessage).mockReturnValue(mockErrorMessage);
  });

  test('should return isLoading: true when mutation is loading', () => {
    const loadingState = {
      ...defaultMutationState,
      isLoading: true,
      isUninitialized: false,
    };

    vi.mocked(useLoginMutation).mockReturnValue([mockMutationFunction, loadingState]);

    const {result} = renderHook(() => useLoginForm());

    expect(result.current.isLoading).toBe(true);
  });

  test('should call login mutation with correct data on submit', async () => {
    const {result} = renderHook(() => useLoginForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalledWith(mockFormData);
  });

  test('should navigate to ACCOUNT page on successful login', async () => {
    const {result} = renderHook(() => useLoginForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(PageUrls.ACCOUNT);
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('should call getErrorMessage and toast.error on failed login', async () => {
    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.reject(mockApiError),
    });

    const {result} = renderHook(() => useLoginForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();

    expect(getErrorMessage).toHaveBeenCalledWith(mockApiError);
    expect(toast.error).toHaveBeenCalledWith(mockErrorMessage);
  });
});
