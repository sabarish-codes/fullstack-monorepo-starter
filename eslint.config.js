import eslint from '@eslint/js';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.turbo/**',
    ],
  },

  eslint.configs.recommended,
];
