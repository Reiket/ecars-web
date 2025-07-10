import {TextEncoder} from 'util';
global.TextEncoder = TextEncoder;

Object.defineProperty(window.navigator, 'language', {
  value: 'en-US',
  writable: true,
});
