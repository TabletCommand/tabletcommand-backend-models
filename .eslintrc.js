module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  ignorePatterns: [
    ".eslintrc.js",
    "src/**/*.js",
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
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/require-await": 0,
    quotes: [2, "double"],
    semi: [2, "always"],

    // The correct way to use no-unused-vars in a TS project
    "@typescript-eslint/no-unused-vars": [1],
    "no-unused-vars": [0],
  }
};
