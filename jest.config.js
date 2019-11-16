module.exports = {
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["lcov", "text"],
  collectCoverageFrom: [
    "./src/components/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
