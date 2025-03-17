import type { Meta, StoryObj } from '@storybook/vue3';

import Content from './content.vue';

const meta = {
  title: 'Components/Layout/Content',
  component: Content,
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Content },
    setup() {
      return { args };
    },
    template: `
      <content v-bind="args">
        <template #title>Title</template>
        Content
      </content>
    `,
  }),
  args: {},
};
