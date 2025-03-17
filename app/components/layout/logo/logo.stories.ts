import type { Meta, StoryObj } from '@storybook/vue3';

import Logo from './logo.vue';

const meta = {
  title: 'Components/Layout/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
