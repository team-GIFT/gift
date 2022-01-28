const { merge } = require('webpack-merge');
const devConfig = require('./config.dev');

const serverConfig = merge(devConfig, {
  devServer: {
    port: 3000,
    static: ['public', 'src'],
    historyApiFallback: true,
  },
});

module.exports = serverConfig;
