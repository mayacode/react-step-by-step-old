const path = require('path');

module.exports = {
  mode: 'development',
  devtool: '#inline-source-map',
  entry: [ 'babel-polyfill', './app/index.js' ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    compress: true
  }
};
