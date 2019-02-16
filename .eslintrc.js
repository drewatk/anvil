module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect" // React version. "detect" automatically picks the version you have installed.
    },
    linkComponents: [{ name: "Link", linkAttribute: "to" }]
  },
  plugins: ["react", "jsx-a11y"],
  rules: { "react/prop-types": "off" }
};
