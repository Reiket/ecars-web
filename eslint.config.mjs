import eslint from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import url from 'node:url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


const vitestFiles = [
  'packages/eslint-plugin-internal/tests/**/*.test.{ts,tsx,cts,mts}',
  'packages/typescript-eslint/tests/**/*.test.{ts,tsx,cts,mts}',
];

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'eslint-plugin': eslintPluginPlugin,
      'import': importPlugin,
      'jest': jestPlugin,
      'jsdoc': jsdocPlugin,
      'vitest': vitestPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      perfectionist: {
        order: 'asc',
        partitionByComment: true,
        type: 'natural',
      },
    },
  },
  {
    ignores: [
      '.nx/', '.yarn/', '**/node_modules/**', '**/dist/**', '**/coverage/**',
      '**/__snapshots__/**', '**/build/**', 'packages/*/generated',
      'packages/website/src/vendor/',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  jsdocPlugin.configs['flat/recommended-typescript-error'],
  {
    languageOptions: {
      globals: {
        ...globals.es2020,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    linterOptions: { reportUnusedDisableDirectives: 'error' },
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error', {
          minimumDescriptionLength: 5,
          'ts-check': false,
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error', {
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: true, prefer: 'type-imports' }],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'no-constant-condition': 'off',
      'curly': ['error', 'all'],
      'eqeqeq': ['error', 'always', { null: 'never' }],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
      'no-var': 'error',
      'prefer-template': 'error',
      'import/consistent-type-specifier-style': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true,
        peerDependencies: true,
      }],
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ['**/*.js'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  {
    files: ['packages/*/tests/**/*.{ts,tsx,cts,mts}'],
    ignores: vitestFiles,
    languageOptions: {
      globals: { ...jestPlugin.environments.globals.globals },
    },
  },
  {
    files: vitestFiles,
    languageOptions: {
      globals: { ...vitestPlugin.environments.env.globals },
    },
  },
  {
    files: [
      'packages/*/tests/**/*.test.{ts,tsx,cts,mts}',
      'packages/parser/tests/**/*.{ts,tsx,cts,mts}',
    ],
    ignores: vitestFiles,
    rules: {
      '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
);
