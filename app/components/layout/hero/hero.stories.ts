import type { Meta, StoryObj } from '@storybook/vue3';

import Hero from './hero.vue';

const meta = {
  title: 'Components/Layout/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Hero },
    setup() {
      return { args };
    },
    template: `
      <hero v-bind="args">
        <template #title>Title</template>
        <template #subtitle>Sub Title</template>
        Content
      </hero>
    `,
  }),
  args: {},
};
