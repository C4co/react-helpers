const path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    library: "cn-react-helpers",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this' // server side render
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
}
