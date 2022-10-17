/* eslint-disable */
export default {
  displayName: 'realtime-markdown',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/realtime-markdown',
  // setupFiles: ['./src/__mocks__/dom.ts'],
  testEnvironment: 'jsdom',
};
