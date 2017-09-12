const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: 'dist/css/styles.css',
  disable: process.env.NODE_ENV === 'development'
})

const config = {
  entry: [ './src/sass/styles.scss', './src/html/index.html','./jsx/app.jsx'],
  output: {
    filename: 'dist/js/bundle.js'
  },
  devtool: '#sourcemap',
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer],
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }, {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel-loader']
      }
    ]
  },

  plugins: [
    extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin()
  )
}

module.exports = config
