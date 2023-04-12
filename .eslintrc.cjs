module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: "detect"
    }
  },
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

    //
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-newline': ['warn', { 'multiline': 'consistent', 'singleline': 'consistent' }],
    'react/jsx-first-prop-new-line': ['warn', 'always'],
    'react/jsx-max-props-per-line': ['warn', { 'maximum': 1 }],
    'react/jsx-props-no-multi-spaces': ['warn'],
    'react/jsx-sort-props': 'warn',
    'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
    'react/jsx-indent': ['warn', 2, { 'checkAttributes': true, 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-one-expression-per-line': ['warn', {'allow': 'literal'} ],
    'react/jsx-wrap-multilines': ['warn',
      {
        'assignment': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'declaration': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line',
        'return': 'parens-new-line'
      }
    ],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',

    //
    'tailwindcss/no-custom-classname': 'off'
  }
};