import type { Meta, StoryObj } from '@storybook/vue3';

import Navigation from './navigation.vue';

const meta = {
  title: 'Components/Layout/Navigation',
  component: Navigation,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
