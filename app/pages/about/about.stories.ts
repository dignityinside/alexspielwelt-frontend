import type { Meta, StoryObj } from '@storybook/vue3';

import About from './about.vue';

const meta = {
  title: 'Pages/About',
  component: About,
  tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
