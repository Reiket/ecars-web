import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import {codecovVitePlugin} from '@codecov/vite-plugin';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: 'dist',
      uploadToken: process.env.CODECOV_TOKEN ?? '',
    }),
  ],
  resolve: {
    alias: {
      '@ecars': path.resolve(__dirname, './src/@ecars'),
      '@ecars/*': path.resolve(__dirname, './src/@ecars/*'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
