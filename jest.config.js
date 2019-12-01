module.exports = {
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "./src/components/**/*.component.js",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
