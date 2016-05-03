const commonConfig = require('./webpack-common.config.js')
const webpack = require('webpack')

module.exports = Object.assign({}, commonConfig, {
  devtool:'source-map',
  module: {
    loaders: commonConfig.module.loaders.concat([
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }
    ])
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ].concat(commonConfig.plugins)
})
