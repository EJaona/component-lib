module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    '@storybook/addon-links', 
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options:{
        postcssLoaderOptions: {
          implementation:require('postcss')
        }
      }
    }
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },

  docs: {
    autodocs: true
  }
};
