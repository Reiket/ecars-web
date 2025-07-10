module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
      },
    ],
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest/presets/js-with-ts',
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@ecars/(.*)$': '<rootDir>/src/@ecars/$1',
  },
  setupFiles: ['<rootDir>/jest.setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
