module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: ["@react-native-community", "airbnb-typescript"],
  rules: {
    "@typescript-eslint/quotes": "off",
    "object-curly-newline": "off",
    "react/prop-types": "off",
    "prettier/prettier": 0,
    "max-len": "off",
  },
};
