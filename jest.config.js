module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // src 폴더가 프로젝트 루트에 위치한다고 가정
  },
};
