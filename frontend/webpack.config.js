var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './bootstrap.js',
  output: {
    path: '../',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules|vendor/,
      loader: 'standard'
    }],
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ]
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
        query: {
          limit: 10000
        }
      }
    ]
  },
  postcss: function () {
    return [require('precss')]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/app.html',
      inject: true,
      hash: true
    })
  ]
}
