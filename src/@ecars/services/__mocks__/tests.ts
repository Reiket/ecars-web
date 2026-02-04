import type {FormEvent} from 'react';
import {vi} from 'vitest';

export const mockMutationFunction = vi.fn();
export const mockNavigate = vi.fn();
export const mockHandleSubmit = vi.fn();
export const mockSearchParamsGet = vi.fn();
export const mockFormEvent = {
  preventDefault: vi.fn(),
} as unknown as FormEvent<HTMLFormElement>;

export const mockErrorMessage = 'Error';
export const mockApiError = new Error(mockErrorMessage);
export const VALID_CODE = 'valid-reset-code';
  export const defaultMutationState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    isUninitialized: true,
    data: undefined,
    error: undefined,
    reset: vi.fn(),
    refetch: vi.fn(),
  };
