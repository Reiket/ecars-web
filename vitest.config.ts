import path from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    globals: true,
    setupFiles: './vitest.setup.ts',
    reporters: ['default', ['junit', {outputFile: 'test-results/junit.xml'}]],
    server: {
      deps: {
        inline: true
      }
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@ecars': path.resolve(__dirname, 'src/@ecars'),
    },
  },

});
