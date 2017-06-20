const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './bootstrap.js',
  output: {
    path: path.resolve(__dirname, '..'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules|vendor/,
        loader: 'standard-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('precss')
              ]
            }
          }
        }]
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery',
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      hash: true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}
