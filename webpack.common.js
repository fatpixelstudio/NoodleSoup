const path = require('path');
const __rootDir = __dirname;
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
var webpack = require('webpack');

module.exports = {
  // stats : {
  //   children : true
  // },
  entry: {
    main: './src/scripts/main.scripts.js',
	head: './src/scripts/head.scripts.js',
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ]
    }, {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        {
          loader: 'sass-loader',
          options: {
            api: 'modern',
            sassOptions: {
              quietDeps: true,
              loadPaths: [path.resolve(__rootDir)],
              silenceDeprecations: ['import'],
            },
          },
        }
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
