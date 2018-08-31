const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    popup: path.resolve(__dirname, 'src/') + '/js/popup.js',
    options: path.resolve(__dirname, 'src/') + '/js/options.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'dist/'
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

  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      cache: true,
      uglifyOptions: {
        toplevel: true,
      }
    })],
    occurrenceOrder: false,
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],

  mode: 'production', // development,
  devtool: false
};

module.exports = config;
