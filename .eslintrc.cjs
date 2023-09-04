module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:tailwindcss/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    //
    'quotes': ['warn', 'single'],
    'dot-notation': 'warn',
    'semi': ['warn', 'never'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'no-multiple-empty-lines': ['warn', { 'max': 1, 'maxEOF': 0 }],
    'no-empty-function': 'off',

    //
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',

    //
    'vue/custom-event-name-casing': 'off',
    'vue/multi-word-component-names': 'off'
  }
};
