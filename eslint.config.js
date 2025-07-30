// eslint.config.js
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const path = require('path');

module.exports = defineConfig([
  // Mobile (React Native via Expo)
  {
    files: ['apps/mobile/**/*.{js,ts,tsx}'],
    ...expoConfig,
    ignores: ['apps/mobile/dist/*'],
  },

  // Backend (Node + TypeScript)
  {
    files: ['apps/backend/**/*.{ts,js}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: path.resolve(__dirname, 'apps/backend/tsconfig.json'),
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: require('eslint-plugin-import'),
    },
    rules: {
      'import/no-unresolved': 'off', // optional: disable to avoid errors if tsconfig handles it
      '@typescript-eslint/no-unused-vars': ['error'],
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: path.resolve(__dirname, 'apps/backend/tsconfig.json'),
        },
      },
    },
  },
]);
