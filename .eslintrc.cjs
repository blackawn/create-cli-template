module.exports = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // prevent errors or unintended behavior.
    'plugin:vue/vue3-strongly-recommended', // considerably improve code readability and/or dev experience.
    'plugin:vue/vue3-recommended', // enforce subjective community defaults to ensure consistency.
    'plugin:@typescript-eslint/recommended',
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

    'vue/multi-word-component-names': 'off',


    //
    // '@typescript-eslint/ban-ts-ignore': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-var-requires': 'off',
    // '@typescript-eslint/no-empty-function': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    // '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/ban-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    //
    // 'vue/custom-event-name-casing': 'off',
    // 'vue/multi-word-component-names': 'off',

    //
    'semi': ['warn', 'always'],
    // 'space-before-function-paren': 'off',
    'quotes': ['warn', 'single'],
    // 'comma-dangle': ['error', 'never'],
    // 'indent': ['error', 2, { SwitchCase: 1 }],
    // 'no-console': 'warn',
    // 'no-var': 'warn',
    // 'arrow-parens': ['error', 'always'],
    // 'arrow-spacing': 'error',
    // 'array-bracket-spacing': ['error', 'never'],
    // 'brace-style': 'error',
    // 'camelcase': 'warn',
    // 'computed-property-spacing': ['error', 'never'],
    // 'curly': ['error', 'multi-line'],
    // 'eol-last': ['error', 'always'],
    // 'eqeqeq': ['error', 'smart'],
    // 'max-statements': ['warn', 15],
    // 'new-cap': ['warn', { 'capIsNew': false }],
    // 'no-extend-native': 'error',
    // 'no-mixed-spaces-and-tabs': 'error',
    // 'no-trailing-spaces': 'error',
    // 'no-unused-vars': 'warn',
    // 'no-use-before-define': ['error', 'nofunc'],
    // 'object-curly-spacing': ['error', 'always'],
    // 'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // 'space-unary-ops': 'error',
    // 'no-multi-spaces': 'error',
    // 'comma-spacing': ['error', { 'before': false, 'after': true }]
  }
};
