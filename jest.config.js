module.exports = {
  verbose: true,
  modulePathIgnorePatterns: ['./__tests__/e2e/'],
  timers: 'fake',
  // setupFiles: ['./setupTests.js'],
  coverageReporters: ['text-summary', 'html'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
