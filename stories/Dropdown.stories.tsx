import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../ui";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <Dropdown
      value="Select"
      key="value"
      label="label"
      items={[
        { value: 1, label: "Item 1" },
        { value: 2, label: "Item 2" },
      ]}
      onSelect={() => {}}
    />
  ),
};

export const Ellipsis: Story = {
  render: (args) => (
    <Dropdown
      value="Select"
      key="value"
      label="label"
      items={[
        { value: 1, label: "Lorem ipsum dolor sit amet neque porro" },
        {
          value: 2,
          label:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        },
      ]}
      onSelect={() => {}}
    />
  ),
};
