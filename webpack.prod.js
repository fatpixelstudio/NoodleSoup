const path = require('path');
const { merge } = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin(), new CssMinimizerPlugin()]
  },
  plugins: [
	new MiniCssExtractPlugin({
    	filename: '[name].min.css'
	})
  ],
  output: {
    filename: '[name].min.js',
	path: path.resolve(__dirname, 'dist'),
  }
});
