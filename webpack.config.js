const path = require('path');
const config = {
  entry: path.resolve(__dirname, 'src/') + '/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',

        query: {
          presets: ['react', 'env']
        }
      },

      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
    ]
  },

  //mode: 'development'
  mode: 'production'
};

module.exports = config;
