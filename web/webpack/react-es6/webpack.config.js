const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-2'],
        }
      }
    ],
  },
  output: {
    filename: 'bundle.js',
  },
  entry: ['./src/index.js'],

  watch: true,
  colors: true,
  progress: true,
};
