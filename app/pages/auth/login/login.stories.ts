import type { Meta, StoryObj } from '@storybook/vue3';

import Login from './login.vue';

const meta = {
  title: 'Pages/Auth/Login',
  component: Login,
  tags: ['autodocs'],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
