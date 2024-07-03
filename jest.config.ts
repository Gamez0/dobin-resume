module.exports = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text-summary"],
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/test.ts", "**/?(*.)+(spec|test).ts"],
};
