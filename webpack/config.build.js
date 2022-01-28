const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const devConfig = require('./config.dev');
const rootDir = process.cwd();
const buildDir = path.resolve(rootDir, 'build');
const publicDir = path.resolve(rootDir, 'public');
const srcDir = path.resolve(rootDir, 'src');

const buildConfig = merge(devConfig, {
  cache: false,
  mode: 'production',
  devtool: false,
  entry: {
    main: {
      import: path.resolve(srcDir, 'index.tsx'),
      dependOn: 'vendor',
    },
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom'],
  },
  output: {
    ...devConfig.output,
    path: buildDir,
    pathinfo: false,
    clean: true,
  },
  plugins: [
    ...devConfig.plugins,
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(publicDir, 'assets'),
          to: path.resolve(buildDir, 'assets'),
        },
        { from: path.resolve(publicDir, 'robots.txt'), to: buildDir },
        { from: path.resolve(publicDir, 'sitemap.xml'), to: buildDir },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    runtimeChunk: true,

    splitChunks: {
      cacheGroups: {
        vendor: {
          enforce: true,
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,

          // vender.js 파일 하나를 생성할 때
          // name: 'vender',

          // 종속성 패키지 마다 파일을 생성할 때
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },

          priority: -10,
          reuseExistingChunk: true,
          minSize: { javascript: 20000, 'css/mini-extra': 10000 },
        },
      },
    },

    minimizer: [
      new TerserPlugin({
        exclude: /\/node_modules/,
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
            ],
          },
        },
      }),
      new CompressionPlugin(),
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new BundleAnalyzerPlugin(),
    ],
  },
});

module.exports = buildConfig;
