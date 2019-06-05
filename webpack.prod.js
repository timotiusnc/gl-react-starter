const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");
var webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",

  // "A separate source map is generated and no link from bundled code to
  // Line numbers are correctly mapped since it gets mapped to the original code.
  // It yields the best quality SourceMaps for development."
  // Source: https://webpack.js.org/configuration/devtool/#development
  // --
  // Differences between 'hidden-source-map' and 'source-map':
  // 'hidden-source-map': "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (main.js:1)"
  //  secure, if we want to know the source down to line number, we must trace it using the map file (usually upload it to error reporting service)
  // 'source-map': "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (index.tsx:8)"
  //  not secure, user can see it (if it's uploaded)
  devtool: "hidden-source-map",

  plugins: [
    new Dotenv({
      path: "./.env",
      safe: true,
      systemvars: true
    }),

    // So we will be able to type VERSION on dev console to get app version.
    // Why not merge it with dotenv-webpack? dotenv is for "external" constants, VERSION is "internal" constants.
    // In the future, this might need upgrade if we want to include commit hash in this VERSION string.
    // Will need to work with infra team on how to approach it.
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify("0.0.1")
    })
  ]
});
