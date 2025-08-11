import path from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    reporters: ['default', ['junit', {outputFile: 'test-results/junit.xml'}]],
    setupFiles: ['./src/setupTests.ts'],
    pool: 'vmThreads',
  },

  resolve: {
    alias: {
      '@ecars': path.resolve(__dirname, 'src/@ecars'),
    },
  },
});
