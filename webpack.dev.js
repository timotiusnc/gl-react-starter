const merge = require("webpack-merge");
const common = require("./webpack.common");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This config is used for development. It will watch for changes using webpack-dev-server
// The scrip "buildDev" is for PoC purpose only. There should be no real use-case in which we need the output
// outside webpack-dev-server.
module.exports = merge(common, {
  mode: "development",

  // A source map is added as a DataUrl (base64) to the original code
  // Line numbers are correctly mapped since it gets mapped to the original code.
  // It yields the best quality SourceMaps for development.
  // See https://webpack.js.org/configuration/devtool/#development
  // --
  // When there's error, it will produce error, for example:
  // "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (index.tsx?edc7:8)"
  devtool: "eval-source-map",

  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: "./dist"
  },

  plugins: [
    new Dotenv({
      path: "./.env",
      safe: true,
      systemvars: true,
      defaults: true
    }),

    new MiniCssExtractPlugin({
      // Still unknown: it's extracting all CSS into single files (except for CSS in dynamically imported module).
      // Fortunately, that should be good for performance.
      // From the docs,  extracting all CSS into single file requires another config:
      // https://github.com/webpack-contrib/mini-css-extract-plugin#extracting-all-css-in-a-single-file
      filename: "[name].css"
    }),

    // See webpack.prod.js to see why we need this
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify("dev")
    })
  ],

  // Source: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
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
      minSize: 0,

      // We need this for the vendor chunk naming so it will have nice names instead of numbers.
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  }
});
