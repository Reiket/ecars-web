/// <reference types="vitest" />

import {vi} from 'vitest';
import {TextEncoder} from 'util';
import '@testing-library/jest-dom/vitest';

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