import type { Meta, StoryObj } from '@storybook/vue3';

import Footer from './footer.vue';

const meta = {
  title: 'Components/Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
