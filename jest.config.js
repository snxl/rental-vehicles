const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  rootDir: root,
  displayName: 'all-tests',
  // testMatch: ['<rootDir>/test/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1'
  },
  setupFiles: ['dotenv/config'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/domain/usecases/**/*.ts',
    '<rootDir>/src/application/controllers/**/*Schema.ts',
    '<rootDir>/src/application/controllers/**/*Controller.ts'
  ],
  coverageDirectory: 'coverage',
  reporters: ['default', 'jest-sonar']
  // coverageReporters: [
  //   'text-summary',
  //   'lcov'
  // ]
}
