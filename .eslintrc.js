module.exports = {
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react"],
  env: {
    browser: true,
  },
  parser: "babel-eslint",
  plugins: ["prettier", "react"],
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js"] }],
    "react/no-array-index-key": "off",
    "react/no-unused-state": "off",
    "react/destructuring-assignment": "off",
    "react/prop-types": [0],
    strict: 0,
    "no-useless-escape": 0,
    "react/no-unescaped-entities": "off",
  },
};
