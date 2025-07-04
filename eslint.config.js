import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    ignores: ['dist/**', '.parcel-cache/**', 'node_modules/**'],
  },
  {
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2022,
        React: 'readonly',
        ReactDOM: 'readonly',
        process: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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

      // General code quality
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
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