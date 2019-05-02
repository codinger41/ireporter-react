/* eslint-disable: no-undef */
module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,mjs}',
    'src/reducers/**/*.{js,jsx,mjs}',
    'src/actions/**/*.{js,jsx,mjs}',
    '!src/index.js',
    '!src/routes.js'
  ],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|otf|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\', './__tests__/helpers/*'],
  testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/node_modules/src/index.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  verbose: false,
};
