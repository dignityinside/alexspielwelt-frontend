import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../app/components/**/*.stories.@(ts)', '../app/pages/**/*.stories.@(ts)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
};
export default config;
