module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  //devtool: 'source-map',
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx']
  }
};
