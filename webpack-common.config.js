var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: ['./app/main.js'],
  output: {
    path: './build',
    filename: 'bundle.[hash].js'
  },
  devServer: {
    proxy: {
      '/api/*': 'http://localhost:5000/'
    }
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.[s]?css$/,
        loader: "style!css!postcss?browsers=last 2 version!sass"
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff2" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream" }
    ]
  },
  postcss: () => [autoprefixer],
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    filename: 'index.html',
    template: './app/index_template.html'
  })]
}
