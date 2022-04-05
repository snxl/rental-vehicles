
const { resolve } = require('path')
const root = resolve(__dirname, '..', '..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'integration-tests',
    setupFilesAfterEnv: ['<rootDir>/test/integration/jest-setup.ts'],
    testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
      '!<rootDir>/src/domain/usecases/**/*.ts',
      '!<rootDir>/src/application/controllers/**/*Schema.ts',
      '<rootDir>/src/application/controllers/**/*Controller.ts'
    ]
  }
}
