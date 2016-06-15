const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './modules/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename:'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', 'jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  watch: true,
  colors: true,
  progress: true
};
