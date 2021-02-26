const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-performance/register',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: ['node_modules']
      }
    }
  },
}
