module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'linebreak-style': 0,
    'react/jsx-one-expression-per-line': 0,
  },
};
