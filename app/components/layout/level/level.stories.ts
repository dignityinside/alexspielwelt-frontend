import type { Meta, StoryObj } from '@storybook/vue3';

import Level from './level.vue';

const meta = {
  title: 'Components/Layout/Level',
  component: Level,
  tags: ['autodocs'],
} satisfies Meta<typeof Level>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        heading: 'Heading 1',
        title: 'Title 1',
      },
      {
        heading: 'Heading 2',
        title: 'Title 2',
      },
      {
        heading: 'Heading 2',
        title: 'Title 2',
      },
    ],
  },
};
