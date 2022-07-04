const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
var webpack = require('webpack');

module.exports = {
  // stats : {
  //   children : true
  // },
  entry: {
    main: './src/javascript/main.scripts.js',
	head: './src/javascript/head.scripts.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(woff(2)?|ttf|eot)$/,
      type: 'asset/resource',
      generator: {
        filename: './fonts/[name][ext]',
      }
    }, {
      test: /\.(png|jpg|jpeg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      }
    }]
  },
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      emoji: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  }
};
