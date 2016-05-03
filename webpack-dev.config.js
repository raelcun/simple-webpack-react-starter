var commonConfig = require('./webpack-common.config.js');
var autoprefixer = require('autoprefixer')

module.exports = Object.assign({}, commonConfig, {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ].concat(commonConfig.entry),
  devtool: 'eval',
  module: {
    loaders: commonConfig.module.loaders.concat([
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      }
    ])
  }
})
