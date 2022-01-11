const path = require('path');
const rootDir = process.cwd();

const devConfig = {
  target: ['web'],
  mode: 'development',
  devtool: 'source-map',
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
      },
      {
        test: /\.(jpe?g|png|gif|webp|bmp)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
      },
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules|public/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
};

module.exports = devConfig;
