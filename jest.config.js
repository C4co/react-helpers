module.exports = {
  setupFiles: ["./jest.setup.js"],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/helpers/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
}
