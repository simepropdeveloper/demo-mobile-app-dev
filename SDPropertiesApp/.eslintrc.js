module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  rules: {
    'arrow-body-style': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'class-methods-use-this': 'off',
    'react/state-in-constructor': 'off',
    'no-underscore-dangle': 'off'
  },
  globals: {
    fetch: false
  }
};
