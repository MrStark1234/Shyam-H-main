// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    module: true,
    require: true,
    process: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-unknown-property": 0,
  },
};
