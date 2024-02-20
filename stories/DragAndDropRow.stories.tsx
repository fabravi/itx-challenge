import type { Meta, StoryObj } from "@storybook/react";

import { DragAndDropRow } from "../ui/";

const meta = {
  title: "Row",
  component: DragAndDropRow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DragAndDropRow>;

export default meta;
type Story = StoryObj<typeof DragAndDropRow>;

const templates = [
  {
    id: "1",
    name: "Template Left",
    align: "LEFT",
  },
  {
    id: "2",
    name: "Template Center",
    align: "CENTER",
  },
  {
    id: "3",
    name: "Template Right",
    align: "RIGHT",
  },
];

const products = [
  {
    id: "329699637",
    name: "JEANS STRAIGHT BOLSILLOS",
    price: "49,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/8062/445/703/2/w/282/8062445703_15_1_1.jpg?ts=1707478754777",
  },
  {
    id: "327872883",
    name: "JEANS REGULAR FIT",
    price: "39,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/2553/421/811/2/w/282/2553421811_15_1_1.jpg?ts=1707478754844",
  },
  {
    id: "330375837",
    name: "JEANS STRAIGHT BOLSILLOS",
    price: "49,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/8062/445/679/2/w/282/8062445679_15_1_1.jpg?ts=1707478754775",
  },
];

export const Default: Story = {
  render: (args) => (
    <DragAndDropRow
      products={products}
      templates={templates}
      dragHandleProps={{}}
    />
  ),
};
