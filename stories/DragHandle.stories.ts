import type { Meta, StoryObj } from "@storybook/react";

import { DragHandle } from "../ui";

const meta = {
  title: "DragHandle",
  component: DragHandle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    paragraph: { control: "text" },
  },
} satisfies Meta<typeof DragHandle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
