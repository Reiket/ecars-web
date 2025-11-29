import type {SubmitHandler} from 'react-hook-form';
import {getErrorMessage} from '@ecars/services/helpers/errors';
import {useRegisterMutation} from '@ecars/core/slices/api/authApiSlice';
import {act, renderHook} from '@testing-library/react';
import type {RegistrationForm} from '@ecars/core/hooks/useRegisterForm';
import {useRegistrationForm} from '@ecars/core/hooks/useRegisterForm';
import {toast} from 'react-toastify';
import {
  defaultMutationState,
  mockApiError,
  mockErrorMessage,
  mockFormEvent,
  mockHandleSubmit,
  mockMutationFunction,
  mockNavigate,
} from '@ecars/services/__mocks__/tests';
import {PageUrls} from '@ecars/constants/page-urls';
import {TOAST_MESSAGES} from '@ecars/constants/toast-messages';

vi.mock('@ecars/services/helpers/errors', () => ({
  getErrorMessage: vi.fn(),
}));

vi.mock('@ecars/core/slices/api/authApiSlice', () => ({
  useRegisterMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
}));

describe('useRegistrationForm hook', () => {
  const mockFormData: RegistrationForm = {
    name: 'Test User',
    email: 'test@example.com',
    password: 'password123',
    confirmedPassword: 'password123',
    isAgree: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockHandleSubmit.mockImplementation((onSubmit: SubmitHandler<RegistrationForm>) => (e: Event) => {
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
    vi.mocked(useRegisterMutation).mockReturnValue([mockMutationFunction, loadingState]);
    const {result} = renderHook(() => useRegistrationForm());
    expect(result.current.isLoading).toBe(true);
  });

  test('should call registerMutation with correctly mapped data on submit', async () => {
    const {result} = renderHook(() => useRegistrationForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    const expectedCredentials = {
      username: mockFormData.name,
      email: mockFormData.email,
      password: mockFormData.password,
    };

    expect(mockMutationFunction).toHaveBeenCalledWith(expectedCredentials);
  });

  test('should call registerMutation, show success toast and navigate to ACCOUNT page on submit', async () => {
    const {result} = renderHook(() => useRegistrationForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    const expectedCredentials = {
      username: mockFormData.name,
      email: mockFormData.email,
      password: mockFormData.password,
    };

    expect(mockMutationFunction).toHaveBeenCalledWith(expectedCredentials);
    expect(mockNavigate).toHaveBeenCalledWith(PageUrls.ACCOUNT);
    expect(toast.success).toHaveBeenCalledWith(TOAST_MESSAGES.SUCCESS_SIGN_UP);
    expect(toast.error).not.toHaveBeenCalled();
  });

  test('should call getErrorMessage and toast.error on failed registration', async () => {
    mockMutationFunction.mockReturnValue({
      unwrap: () => Promise.reject(mockApiError),
    });

    const {result} = renderHook(() => useRegistrationForm());

    await act(async () => {
      await result.current.handleFormSubmit(mockFormEvent);
    });

    expect(mockMutationFunction).toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();

    expect(getErrorMessage).toHaveBeenCalledWith(mockApiError);
    expect(toast.error).toHaveBeenCalledWith(mockErrorMessage);
  });
});
