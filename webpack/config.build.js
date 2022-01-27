const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');
const rootDir = process.cwd();

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    ...devConfig.plugins,
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['public'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, './src/index.html'),
      base: '/',
      title: 'GIFT',
    }),
  ],
});

module.exports = buildConfig;
