const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        include: path.resolve(__dirname, "src")
      }
    ]
  },

  // Options to specify how modules are resolved.
  resolve: {
    alias: {
      // Must be in sync with tsconfig.json -> paths
      "@common": path.resolve(__dirname, "src/common"),
      "@domain": path.resolve(__dirname, "src/domain")
    },
    // If this "extensions" are unspecified, it will throw error "Module not found" on build.
    extensions: [".tsx", ".ts", ".js"]
  },

  plugins: [
    new CleanWebpackPlugin(), // See package.json to know why we need this.
    new HtmlWebpackPlugin({
      // See package.json to know why we need this.
      template: "./public/index.html"
    }),

    // We need `HashedModuleIdsPlugin` so hash in filename will stay the same if the content is the same.
    // This is because webpack use something called `module.id` and incremented based on resolving order by default.
    // So the hash may or may not be different (if will be the same if the order is accidentally the same) but to be safe, we use this.
    // https://webpack.js.org/guides/caching/
    new webpack.HashedModuleIdsPlugin()
  ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/"
  }
};
