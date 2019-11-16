module.exports = {
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "./src/components/**/*.item.js",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
