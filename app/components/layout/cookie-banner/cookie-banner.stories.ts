import type { Meta, StoryObj } from '@storybook/vue3';

import CookieBanner from './cookie-banner.vue';

const meta = {
  title: 'Components/Layout/CookieBanner',
  component: CookieBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
