/** @type {import('eslint').Linter.Config} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [".eslintrc.js", "next.config.js", ".next", "pm2.config.js"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-undef": ["error", {}],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": ["error", { namedComponents: ["arrow-function", "function-declaration"] }],
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn", // or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "react/button-has-type": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "react/jsx-no-useless-fragment": "off",
    "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["draft"] }],
    "react/jsx-curly-brace-presence": "off",
  },
  globals: {
    React: false,
    JSX: false,
    Chart: false,
  },
}
