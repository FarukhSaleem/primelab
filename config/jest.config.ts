export default {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["../"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  rootDir: "../",

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    //"@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '^.+\\.svg$': "<rootDir>/mocks/index.ts"
  },
  testEnvironment: 'jsdom',
  "setupFiles": ["./config/jest.setup.ts"],
  "globals": {
    "ts-jest": {
      "tsconfig": "./config/tsconfig.test.json"
    }
  },
};