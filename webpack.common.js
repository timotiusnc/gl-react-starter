const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  // If unspecified, when building, it will throw error "Module not found"
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
}
