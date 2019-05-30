const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        include: path.resolve(__dirname, 'src')
      }
    ]
  },

  // Options to specify how modules are resolved.
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common'),
      '@domain': path.resolve(__dirname, 'src/domain')
    },
    // If this "extensions" are unspecified, it will throw error "Module not found" on build.
    extensions: ['.tsx', '.ts', '.js']
  },

  plugins: [
    new CleanWebpackPlugin(), // See package.json to know why we need this.
    new HtmlWebpackPlugin({   // See package.json to know why we need this.
      template: './public/index.html'
    }),

    // We need `HashedModuleIdsPlugin` so hash in filename will stay the same if the content is the same.
    // This is because webpack use something called `module.id` and incremented based on resolving order by default.
    // So the hash may or may not be different (if will be the same if the order is accidentally the same) but to be safe, we use this.
    // https://webpack.js.org/guides/caching/
    new webpack.HashedModuleIdsPlugin()
  ],

  // Source: https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  optimization: {
    // Without `runtimeChunk`, the hash value(s) will be different even though there's no update.
    // This is because webpack includes certain boilerplate, specifically the runtime and manifest, in the entry chunk.
    // With this, we centralize the runtime and manifest into one file so the content will stay the same if there's no update, hence same hash.
    // https://webpack.js.org/guides/caching/
    runtimeChunk: 'single',

    splitChunks: {
      // Indicates which chunks will be selected for optimization. Unless we have exception, we should provide `all`
      // because it means that chunks can be shared even between async and non-async chunks.
      // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks
      chunks: 'all',

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
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    }
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  }
}
