module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'coverage'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname,
    "ecmaFeatures": { "jsx": true }
  },
  plugins: [
    'react-compiler',
    'react',
    'prettier'
  ],
  rules: {
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true },],
    '@typescript-eslint/no-explicit-any': 'error',
    'react-compiler/react-compiler': 'error',
  },
}
