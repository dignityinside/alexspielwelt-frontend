import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../app/components/**/*.stories.@(ts)', '../app/pages/**/*.stories.@(ts)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
};
export default config;
