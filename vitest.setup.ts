/// <reference types="vitest" />

import {vi} from 'vitest';
import {TextEncoder} from 'util';
import '@testing-library/jest-dom/vitest';
import type * as ReactRouterDom from 'react-router-dom';
import {
  defaultMutationState,
  mockHandleSubmit,
  mockMutationFunction,
  mockNavigate,
} from '@ecars/services/__mocks__/tests';

global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

vi.mock('*.css', () => ({}));

Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  writable: true,
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'scrollTo', {
  value: (_x: number, y: number) => {
    Object.defineProperty(window, 'scrollY', {value: y, writable: true});
  },
  writable: true,
});

Object.defineProperty(window, 'scrollY', {value: 0, writable: true});


vi.mock('@ecars/core/slices/api/authApiSlice', () => ({
  useLoginMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
  useRegisterMutation: vi.fn(() => [mockMutationFunction, defaultMutationState]),
}));

vi.mock('react-hook-form', async (importOriginal) => {
  const originalModule = await importOriginal();

  return {
    originalModule,
    useForm: vi.fn(() => ({
      handleSubmit: mockHandleSubmit,
    })),
    Controller: vi.fn(({render}) => {
      return render({
        field: {
          onChange: vi.fn(),
          onBlur: vi.fn(),
          value: '',
        },
        fieldState: {
          error: undefined,
          isDirty: false,
          isTouched: false,
        },
        formState: {errors: {}},
      });
    }),
  };
});
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal<typeof ReactRouterDom>();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('react-toastify', () => ({
  toast: {
    error: vi.fn(),
  },
}));

vi.mock('@ecars/services/helpers/errors', () => ({
  getErrorMessage: vi.fn(),
}));

