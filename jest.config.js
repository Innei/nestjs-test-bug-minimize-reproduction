module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  rootDir: '.',
  cache: false,
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  roots: ['<rootDir>/apps/'],
  moduleNameMapper: {
    config: '<rootDir>/config.ts',
  },
};
