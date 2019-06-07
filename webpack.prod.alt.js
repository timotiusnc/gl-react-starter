const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");
var webpack = require("webpack");

// smartStrategy is needed so we can replace certain webpack item. In this case: optimization.
// optimization in webpack.common.js will be replaced with optimization in this webpack.prod.alt.js.
module.exports = merge.smartStrategy({
  optimization: "replace"
})(common, {
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
  ],

  optimization: {
    // Without `runtimeChunk`, the hash value(s) will be different even though there's no update.
    // This is because webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk.
    // With this, we centralize the runtime and manifest into one file so the content will stay the same if there's no update, hence same hash.
    // https://webpack.js.org/guides/caching/
    runtimeChunk: "single",

    splitChunks: {
      // Indicates which chunks will be selected for optimization. Unless we have exception, we should provide `all`
      // because it means that chunks can be shared even between async and non-async chunks.
      // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
      chunks: "all",

      // Max number of parallel requests at an entry point. This will merge M vendors into maximum N vendor files (if M > N).
      maxInitialRequests: Infinity,

      // Minimum size, in bytes, for a chunk to be generated. If a vendor file is N KB and minSize is M (M < N), it will get merged with others.
      // maxInitialRequests Infinity and minSize 0: together will make all our vendor files outputted as is.
      minSize: 0
    }
  }
});