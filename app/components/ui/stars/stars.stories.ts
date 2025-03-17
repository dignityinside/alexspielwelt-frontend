import type { Meta, StoryObj } from '@storybook/vue3';

import Stars from './stars.vue';

const meta = {
  title: 'Components/UI/Stars',
  component: Stars,
  tags: ['autodocs'],
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    stars: 5,
  },
};
