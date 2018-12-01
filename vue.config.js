const webpack = require('webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = {
  baseUrl: './',
  configureWebpack: {
    plugins: [
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 100 // Minimum number of characters
      })
    ]
  }
}