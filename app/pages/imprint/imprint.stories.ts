import type { Meta, StoryObj } from '@storybook/vue3';

import Imprint from './imprint.vue';

const meta = {
  title: 'Pages/Imprint',
  component: Imprint,
  tags: ['autodocs'],
} satisfies Meta<typeof Imprint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
