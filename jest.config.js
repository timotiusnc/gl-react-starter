/*
 * jest.config.js
 * For configuring jest test command.
 * Complete documentation on https://jestjs.io/docs/en/configuration.
 *
 * To detect test files, jest will read from "testRegex" config option.
 * By default, "testRegex" value is "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$".
 * It looks for .js, .jsx, .ts and .tsx files inside of __tests__ folders, as well as any files with a suffix of .test or .spec.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: May 23rd 2019
 * -----
 * Last Modified: June 7th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

module.exports = {
  // Which files will be used to calculate code coverage
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],

  // ts-jest will need its own special tsconfig file so it won't result in error
  // See tsconfig.test.json for more details
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json"
    }
  },

  // As we're using TypeScript, we need to transform it first using ts-jest.
  // Kind of like webpack loader.
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },

  // Custom module resolution. Must be in sync with tsconfig.json -> paths
  moduleNameMapper: {
    "@common/(.*)": "<rootDir>/src/common/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1"
  }
};
