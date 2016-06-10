module.exports = {
  entry: './public/js/main.js',
  output: {
    path: './public/js',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.jsx', 'js']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader!jsx-loader?harmony',
    }],
  },
};
