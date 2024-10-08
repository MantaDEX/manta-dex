// @ts-check
/** @type {import('eslint').ESLint.ConfigData} */
const eslintConfig = {
  root: true,
  extends: ['@antfu/eslint-config-react'],
  plugins: ['testing-library', 'simple-import-sort', 'unused-imports'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'react/display-name': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'no-unused-vars': 'warn',
    'no-template-curly-in-string': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'no-mixed-operators': 'off',
    'max-statements-per-line': ['error', { max: 2 }],
    'antfu/top-level-function': 'off',
    'no-restricted-globals': 'off',
  },
}

module.exports = eslintConfig
