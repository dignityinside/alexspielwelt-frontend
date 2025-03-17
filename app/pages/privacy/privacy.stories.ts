import type { Meta, StoryObj } from '@storybook/vue3';

import Privacy from './privacy.vue';

const meta = {
  title: 'Pages/Privacy',
  component: Privacy,
  tags: ['autodocs'],
} satisfies Meta<typeof Privacy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
