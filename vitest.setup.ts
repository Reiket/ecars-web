/// <reference types="vitest" />

import {vi} from 'vitest';
import {TextEncoder} from 'util';
import '@testing-library/jest-dom/vitest';

global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

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
