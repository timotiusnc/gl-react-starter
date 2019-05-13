const merge = require('webpack-merge');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
var webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',

  // A source map is added as a DataUrl (base64) to the original code
  // Line numbers are correctly mapped since it gets mapped to the original code.
  // It yields the best quality SourceMaps for development.
  // See https://webpack.js.org/configuration/devtool/#development
  // When there's error, it will produce error, for example
  //  "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (index.tsx?edc7:8)"
  devtool: 'eval-source-map',

  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: './dist'
  },

  plugins: [
    new Dotenv({
      path: './.env',
      safe: true,
      systemvars: true
    }),

    // See webpack.prod.js to see why we need this
    new webpack.DefinePlugin({
      'APP_VERSION': JSON.stringify('dev')
    })
  ]
})
