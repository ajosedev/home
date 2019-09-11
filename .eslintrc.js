module.exports = {
  extends: 'airbnb',
  rules: {
    'import/no-extraneous-dependencies': [
      'error', {
        'devDependencies': true,
      },
    ],
    'react/jsx-one-expression-per-line': 0,
  },
};
