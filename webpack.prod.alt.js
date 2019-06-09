const merge = require("webpack-merge");
const common = require("./webpack.common");
const prod = require("./webpack.prod");
const Dotenv = require("dotenv-webpack");
var webpack = require("webpack");

// smartStrategy is needed so we can replace certain webpack item. In this case: optimization.
// optimization in webpack.common.js will be replaced with optimization in this webpack.prod.alt.js.
module.exports = merge.smartStrategy({
  optimization: "replace"
})(common, prod, {
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
