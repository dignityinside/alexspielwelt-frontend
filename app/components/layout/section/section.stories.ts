import type { Meta, StoryObj } from '@storybook/vue3';

import Section from './section.vue';

const meta = {
  title: 'Components/Layout/Section',
  component: Section,
  tags: ['autodocs'],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => ({
    components: { Section },
    setup() {
      return { args };
    },
    template: `
      <section v-bind="args">
        Content
      </section>
    `,
  }),
  args: {},
};
