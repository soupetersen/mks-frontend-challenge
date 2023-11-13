/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Jest.config.js
const customConfig = {
  clearMocks: true,
  coverageDirectory: ".coverage",
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/app/components$1",
    "^@/hooks(.*)$": "<rootDir>/src/app/hooks$1",
		"^@/contexts(.*)$": "<rootDir>/src/app/contexts$1",
    "^@/lib(.*)$": "<rootDir>/src/app/lib$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customConfig);
