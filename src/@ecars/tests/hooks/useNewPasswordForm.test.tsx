import {renderHook, act} from '@testing-library/react';
import type {NewPasswordForm} from '@ecars/core/hooks/useNewPasswordForm';
import {useNewPasswordForm} from '@ecars/core/hooks/useNewPasswordForm';
import {
  defaultMutationState,
  mockApiError,
  mockErrorMessage,
  mockFormEvent,
  mockHandleSubmit,
  mockMutationFunction,
  mockNavigate,
  mockSearchParamsGet,
  VALID_CODE,
} from '@ecars/services/__mocks__/tests';
import type {SubmitHandler} from 'react-hook-form';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {useResetPasswordMutation} from '@ecars/core/slices/api/authApiSlice';
import {PageUrls} from '@ecars/constants/page-urls';
import {toast} from 'react-toastify';
import {TOAST_MESSAGES} from '@ecars/constants/toast-messages';

vi.mock('@ecars/services/helpers/errors', () => ({
  getErrorMessage: vi.fn(),
}));

vi.mock('@ecars/core/slices/api/authApiSlice', () => ({
  useResetPasswordMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
}));

describe('useNewPasswordForm hook', () => {
  const mockFormData: NewPasswordForm = {
    password: 'newPassword123',
    confirmedPassword: 'newPassword123',
  };

  beforeEach(() => {
    vi.clearAllMocks();

    mockHandleSubmit.mockImplementation((onSubmit: SubmitHandler<NewPasswordForm>) => (e: Event) => {
      e.preventDefault();
      return onSubmit(mockFormData);
    });

    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.resolve(),
    });

    mockSearchParamsGet.mockReturnValue(VALID_CODE);

    vi.mocked(getErrorMessage).mockReturnValue(mockErrorMessage);
  });

  test('should return isLoading: true when mutation is loading', () => {
    const loadingState = {
      ...defaultMutationState,
      isLoading: true,
      isUninitialized: false,
    };

    vi.mocked(useResetPasswordMutation).mockReturnValue([mockMutationFunction, loadingState]);

    const {result} = renderHook(() => useNewPasswordForm());

    expect(result.current.isLoading).toBe(true);
  });

  test('should redirect to LOGIN page if code param is missing', () => {
    mockSearchParamsGet.mockReturnValue(null);

    renderHook(() => useNewPasswordForm());

    expect(toast.error).toHaveBeenCalledWith(TOAST_MESSAGES.MISSING_CODE);
    expect(mockNavigate).toHaveBeenCalledWith(PageUrls.LOGIN);
  });

  test('should call resetPassword mutation with correct data on submit', async () => {
    const {result} = renderHook(() => useNewPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalledWith({
      code: VALID_CODE,
      password: mockFormData.password,
      passwordConfirmation: mockFormData.confirmedPassword,
    });
  });

  test('should not call mutation if code is missing during submit', async () => {
    mockSearchParamsGet.mockReturnValue(null);
    const {result} = renderHook(() => useNewPasswordForm());
    vi.clearAllMocks();
    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).not.toHaveBeenCalled();
  });

  test('should navigate to SUCCESS_REST_PASS page on successful password reset', async () => {
    const {result} = renderHook(() => useNewPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(toast.success).toHaveBeenCalledWith(TOAST_MESSAGES.SUCCESS_REST_PASS);
    expect(mockNavigate).toHaveBeenCalledWith(PageUrls.SUCCESS_REST_PASS);
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('should call getErrorMessage and toast.error on failed password reset', async () => {
    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.reject(mockApiError),
    });

    const {result} = renderHook(() => useNewPasswordForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalledWith(PageUrls.SUCCESS_REST_PASS);

    expect(getErrorMessage).toHaveBeenCalledWith(mockApiError);
    expect(toast.error).toHaveBeenCalledWith(mockErrorMessage);
  });
});
