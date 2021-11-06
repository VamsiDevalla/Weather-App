export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['./**/*.tests.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: 'reports',
};
