const merge = require('webpack-merge')
const common = require('./webpack.common')

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
  }
})
