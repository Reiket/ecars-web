import {renderHook, act} from '@testing-library/react';
import type {ResetPasswordForm} from '@ecars/core/hooks/useResetPasswordForm';
import {useResetPasswordForm} from '@ecars/core/hooks/useResetPasswordForm';
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
import {useForgotPasswordMutation} from '@ecars/core/slices/api/authApiSlice';
import {PageUrls} from '@ecars/constants/page-urls';
import {toast} from 'react-toastify';

vi.mock('@ecars/services/helpers/errors', () => ({
  getErrorMessage: vi.fn(),
}));

vi.mock('@ecars/core/slices/api/authApiSlice', () => ({
  useForgotPasswordMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
}));

describe('useResetPasswordForm hook', () => {
  const mockFormData: ResetPasswordForm = {
    email: 'test@example.com',
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockHandleSubmit.mockImplementation((onSubmit: SubmitHandler<ResetPasswordForm>) => (e: Event) => {
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

    vi.mocked(useForgotPasswordMutation).mockReturnValue([mockMutationFunction, loadingState]);

    const {result} = renderHook(() => useResetPasswordForm());

    expect(result.current.isLoading).toBe(true);
  });

  test('should call forgotPassword mutation with correct data on submit', async () => {
    const {result} = renderHook(() => useResetPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalledWith(mockFormData);
  });

  test('should navigate to CHECK_EMAIL page with email in state on success', async () => {
    const {result} = renderHook(() => useResetPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });
    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(PageUrls.CHECK_EMAIL, {
      state: {email: mockFormData.email},
    });
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('should call getErrorMessage and toast.error on failed request', async () => {
    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.reject(mockApiError),
    });

    const {result} = renderHook(() => useResetPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(getErrorMessage).toHaveBeenCalledWith(mockApiError);
    expect(toast.error).toHaveBeenCalledWith(mockErrorMessage);
  });
});
