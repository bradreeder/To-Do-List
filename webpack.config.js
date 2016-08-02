module.exports = {
  entry: './src/index.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map'
}
