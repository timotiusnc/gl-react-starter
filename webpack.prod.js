const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',

  // A source map is added as a DataUrl (base64) to the original code
  // Line numbers are correctly mapped since it gets mapped to the original code.
  // It yields the best quality SourceMaps for development.
  // See https://webpack.js.org/configuration/devtool/#development
  // 'hidden-source-map': "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (main.js:1)"
  //  secure, if we want to know the source down to line number, we must trace it using the map file (usually upload it to error reporting service)
  // 'source-map': "Uncaught TypeError: Cannot read property 'xxx' of undefined at eval (index.tsx:8)"
  //  not secure, user can see it (if it's uploaded)
  devtool: 'hidden-source-map'
})
