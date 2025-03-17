import type { Meta, StoryObj } from '@storybook/vue3';

import Profile from './profile.vue';

const meta = {
  title: 'Pages/Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
