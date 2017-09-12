const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './jsx/server.jsx',
  output: {
    path: __dirname + '/',
    filename: 'server.js'
  },
  target: 'node',
  module: {
    loaders: [
       {
         test: /\.jsx?$/,
         exclude: /(node_modules)/,
         loaders: ['babel-loader']
       }
    ]
  },
  externals: nodeExternals()
}
