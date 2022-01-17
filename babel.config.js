const { NODE_ENV } = process.env;

module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
        displayName: NODE_ENV !== 'production',
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        // https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs
        corejs: 3,
        proposals: true,
      },
    ],
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
