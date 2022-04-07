const { resolve } = require('path')
const root = resolve(__dirname, '..', '..')
const rootConfig = require(`${root}/jest.config.js`)

module.exports = {
  ...rootConfig,
  ...{
    rootDir: root,
    displayName: 'unit-tests',
    testMatch: ['<rootDir>/test/unit/**/*.test.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/src/domain/usecases/**/*.ts',
      '<rootDir>/src/application/controller/**/*Schema.ts',
      '!<rootDir>/src/application/controllers/**/*Controller.ts'
    ]
  }
}
