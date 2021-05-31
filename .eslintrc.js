const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'testing-library', 'jest-dom'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'testing-library/await-async-query': RULES.ERROR,
    'testing-library/no-await-sync-query': RULES.ERROR,
    'testing-library/no-debug': RULES.WARN,
    'jest-dom/prefer-checked': RULES.ERROR,
    'jest-dom/prefer-enabled-disabled': RULES.ERROR,
    'jest-dom/prefer-required': RULES.ERROR,
    'jest-dom/prefer-to-have-attribute': RULES.ERROR,
    'react/display-name': RULES.OFF
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
