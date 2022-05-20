module.exports = {
  "env": {
    "es2021": true,
    "node": true,
    "browser": true
  },
  "extends": ["eslint:recommended"],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: "latest"
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always']
  }
};
