import {renderHook} from '@testing-library/react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSuccessRestPassword} from '@ecars/core/hooks/useSuccessRestPassword';
import {mockNavigate} from '@ecars/services/__mocks__/tests';

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

describe('useSuccessRestPassword hook', () => {
  const mockRedirectUrl = '/login';

  interface TestState {
    isValid: boolean;
  }
  const validationFn = (state: TestState | null) => !!state?.isValid;
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
  });

  test('should return state and NOT redirect if validation passes', () => {
    const validState: TestState = {isValid: true};

    vi.mocked(useLocation).mockReturnValue({
      state: validState,
      key: 'test-key',
      pathname: '/success',
      search: '',
      hash: '',
    });

    const {result} = renderHook(() => useSuccessRestPassword<TestState>(validationFn, mockRedirectUrl));
    expect(result.current).toEqual(validState);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('should redirect to specified URL if validation fails (invalid state)', () => {
    const invalidState: TestState = {isValid: false};

    vi.mocked(useLocation).mockReturnValue({
      state: invalidState,
      key: 'test-key',
      pathname: '/success',
      search: '',
      hash: '',
    });

    renderHook(() => useSuccessRestPassword<TestState>(validationFn, mockRedirectUrl));

    expect(mockNavigate).toHaveBeenCalledWith(mockRedirectUrl, {replace: true});
  });

  test('should redirect if state is null (direct access)', () => {
    vi.mocked(useLocation).mockReturnValue({
      state: null,
      key: 'test-key',
      pathname: '/success',
      search: '',
      hash: '',
    });

    renderHook(() => useSuccessRestPassword<TestState>(validationFn, mockRedirectUrl));

    expect(mockNavigate).toHaveBeenCalledWith(mockRedirectUrl, {replace: true});
  });

  test('should redirect if state is undefined', () => {
    vi.mocked(useLocation).mockReturnValue({
      state: undefined,
      key: 'test-key',
      pathname: '/success',
      search: '',
      hash: '',
    });

    renderHook(() => useSuccessRestPassword<TestState>(validationFn, mockRedirectUrl));

    expect(mockNavigate).toHaveBeenCalledWith(mockRedirectUrl, {replace: true});
  });
});
