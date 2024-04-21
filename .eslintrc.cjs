/** @type {import("eslint").Linter.Config} */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "plugin:tailwindcss/recommended",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@rocketseat/eslint-config/react',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    settings: {
      tailwindcss: {
        callees: ["twMerge", "createTheme"],
        classRegex: "^(class(Name)|theme)?$",
      },
    },
  },
}
