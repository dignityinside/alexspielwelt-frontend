import type { Meta, StoryObj } from '@storybook/vue3';

import Box from './box.vue';

const meta = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Box },
    setup() {
      return { args };
    },
    template: `
      <box v-bind="args">
        <template #title>Title</template>
        Content
      </box>
    `,
  }),
  args: {},
};
