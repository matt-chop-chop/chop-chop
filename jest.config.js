module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/Components/*/*.tsx",
    "src/Components/*.tsx",
    "src/pages/*.tsx",
    "src/pages/*/*.tsx",
    "src/hooks/*.tsx",
    "src/hooks/*/*.tsx",
    "src/utils.tsx",
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  moduleNameMapper: {
    "@/constants": "<rootDir>/src/constants.ts",
    "@/utils": "<rootDir>/src/utils.tsx",
    "@/Components": "<rootDir>/src/Components",
    "@/hooks": "<rootDir>/src/hooks",
    "@/data": "<rootDir>/src/data",
  },
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "jest-environment-jsdom",
};
