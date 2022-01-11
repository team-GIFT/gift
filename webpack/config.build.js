const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const buildConfig = merge(devConfig, {
  mode: 'production',
  devtool: false,
});

module.exports = buildConfig;
