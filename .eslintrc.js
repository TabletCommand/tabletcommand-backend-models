module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "security",
    "promise"
  ],
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "quotes": [2, "double"],
    "semi": [2, "always"],
    "no-unused-vars": [1],
    "space-before-function-paren": [0]
  }
};
