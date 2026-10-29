module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/tests/**/*.test.ts',
    '**/tests/**/*.spec.ts',
    '**/apps/*/test/**/*.spec.ts'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'json', 'html'],
  moduleNameMapper: {
    '^@pairup/contracts(.*)$': '<rootDir>/packages/contracts/src$1',
    '^@pairup/domain-types(.*)$': '<rootDir>/packages/domain-types/src$1',
    '^@pairup/design-tokens(.*)$': '<rootDir>/packages/design-tokens/src$1',
    '^@pairup/validation(.*)$': '<rootDir>/packages/validation/src$1',
    '^@pairup/api-client(.*)$': '<rootDir>/packages/api-client/src$1',
    '^@pairup/config(.*)$': '<rootDir>/packages/config/src$1',
    '^@pairup/test-utils(.*)$': '<rootDir>/packages/test-utils/src$1'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.base.json' }]
  }
};
