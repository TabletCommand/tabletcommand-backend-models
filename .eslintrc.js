module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  plugins: [
    "@typescript-eslint"
  ],
  env: {
    "node": true,
    "mocha": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./src/tsconfig.json"
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-unused-vars": [1],
    "@typescript-eslint/require-await": 0,
    "no-unused-vars": [1],
    "space-before-function-paren": [0],
    quotes: [2, "double"],
    semi: [2, "always"]
  }
};
