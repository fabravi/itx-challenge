import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../ui";

const meta = {
  title: "Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    paragraph: { control: "text" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Pick your items",
    paragraph:
      "Start composing a new products layout by selecting a set of products to start from.",
  },
};
