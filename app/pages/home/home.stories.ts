import type { Meta, StoryObj } from '@storybook/vue3';

import Home from './home.vue';

const meta = {
  title: 'Pages/Home',
  component: Home,
  tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
