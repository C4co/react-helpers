module.exports = {
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "./src/helpers/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
