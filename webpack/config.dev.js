const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();
const rootDir = process.cwd();
const srcDir = path.resolve(rootDir, 'src');
const { GIPHY_API_KEY } = dotenv.parsed;

const devConfig = {
  cache: true,
  target: ['web', 'es5'],
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve(rootDir, 'public'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            resourceQuery: /react/, // *.svg?react
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  titleProp: true,
                  svgo: true,
                },
              },
            ],
          },
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 40 * 1024, // 40kb
              },
            },
          },
        ],
        include: srcDir,
      },
      {
        test: /\.(jpe?g|png|gif|webp|bmp)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
        include: srcDir,
      },
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules|public/,
        use: 'babel-loader',
        include: srcDir,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      GIPHY_API_KEY: JSON.stringify(GIPHY_API_KEY),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, './public/index.html'),
      base: '/',
      title: 'GIFT',
    }),
  ],
  resolve: {
    symlinks: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
};

module.exports = devConfig;
