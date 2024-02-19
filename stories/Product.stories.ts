import type { Meta, StoryObj } from "@storybook/react";

import { Product } from "../ui/Product";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Product",
  component: Product,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    name: { control: "text" },
    price: { control: "text" },
    image: { control: "text" },
    fade: { control: "boolean" },
  },
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    name: "JEANS STRAIGHT BOLSILLOS",
    price: "49,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/8062/445/703/2/w/282/8062445703_15_1_1.jpg?ts=1707478754777",
  },
};
