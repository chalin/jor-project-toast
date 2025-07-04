import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', '.parcel-cache/**', 'node_modules/**'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      '@typescript-eslint': tseslint,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
        React: 'readonly',
        ReactDOM: 'readonly',
        process: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React-specific rules
      ...react.configs.recommended.rules,
      'react/prop-types': 'off', // Disable prop-types for modern React
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+

      // TypeScript-specific rules
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

      // General code quality
      'no-unused-vars': 'off', // Turn off base rule as it conflicts with TypeScript
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',

      // Modern JavaScript
      'arrow-spacing': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
];

// cSpell:ignore tsparser