module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ["next/core-web-vitals", "prettier"],
  plugins: ["react"],
  parserOptions: {
    project: true,
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021
  },
  rules: {
    // react rules
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",

    // import rules
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off",
    "import/extensions": ["error", "never"],

    // other rules
    "arrow-body-style": ["error", "as-needed"],
    "linebreak-style": "off",
    "no-shadow": "off",
    "no-trailing-spaces": "warn",
    "no-unused-vars": "error",
    "object-curly-spacing": ["error", "always"]
  }
};
