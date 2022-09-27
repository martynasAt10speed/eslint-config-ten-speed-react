'use strict';

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'lodash'],

  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'lodash/import-scope': [2, 'method'],
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/display-name': 0,
    'jsx-a11y/no-autofocus': 0,
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: './',
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],

      rules: {
        '@typescript-eslint/ban-ts-comment': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
      },
    },
  ],
};
