module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'react'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    overrides: [
      {
        files: ['*.tsx', '*.ts'],
        rules: {
          'react/react-in-jsx-scope': 'off',
        },
      },
    ],
  };
  