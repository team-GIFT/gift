const webpackConfig = require('../webpack/config.dev.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async storyConfig => {
    const filteredStoryRules = storyConfig.module.rules.filter(
      ({ test }) => !test.test('.svg')
    );

    const filteredWebpackRules = webpackConfig.module.rules.filter(
      ({ test }) => {
        return test.test('.svg') || test.test('.png');
      }
    );

    storyConfig.module.rules = [...filteredStoryRules, ...filteredWebpackRules];
    storyConfig.resolve.alias = webpackConfig.resolve.alias;

    return storyConfig;
  },
};
