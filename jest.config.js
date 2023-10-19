/*
 * @Author: tanka
 * @Date: 2023-10-19 16:27:20
 * @LastEditors: tanka
 * @LastEditTime: 2023-10-19 16:32:30
 * @FilePath: /common/jest.config.js
 * @Description: jest
 */
module.exports = {
  preset: 'ts-jest',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  // 指定需要进行单元测试的文件匹配规则
  testMatch: ['<rootDir>/src/*.test.ts', '<rootDir>/src/*.test.js'],
  // 测试启动文件
  // setupFiles: ['<rootDir>/test/config/config.js'],
  // 单元测试文件检测后缀名
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // 需要忽略的文件匹配规则
  testPathIgnorePatterns: ['src/node_modules/'],
  collectCoverage: false,
  //设置阈值
  coverageThreshold: {
    global: {
      statements: 60,
      functions: 50,
      branches: 40,
    },
  },
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['cobertura', 'html', 'lcov'],
  //层次显示测试套件中每个测试的结果。
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
