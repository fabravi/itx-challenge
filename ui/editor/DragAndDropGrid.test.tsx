import { horizontalDrag, verticalDrag } from "react-beautiful-dnd-tester";
import { render } from "@testing-library/react";
import { DragAndDropGrid } from "..";

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
    name: "JEANS STRAIGHT BOLSILLOS 1",
    price: "49,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/8062/445/679/2/w/282/8062445679_15_1_1.jpg?ts=1707478754775",
  },
  {
    id: "333090047",
    name: "JEANS BAGGY FIT",
    price: "29,95 EUR",
    image:
      "https://static.zara.net/photos///2024/V/0/2/p/1538/460/802/2/w/282/1538460802_15_1_1.jpg?ts=1707468667277",
  },
];
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

test("drag product", () => {
  const { getAllByTestId } = render(
    <DragAndDropGrid products={products} templates={templates} />
  );
  let [itemA, itemB, ...items] = getAllByTestId(/product/i);

  horizontalDrag(itemB).inFrontOf(itemA);
  const newFirst = getAllByTestId(/product/i)[0];
  expect(newFirst.textContent).toBe(itemB.textContent);
});

test("drag row", () => {
  const { getAllByTestId } = render(
    <DragAndDropGrid products={products} templates={templates} />
  );

  let [itemA, itemB, ...items] = getAllByTestId(/row/i);

  verticalDrag(itemB).inFrontOf(itemA);

  const newFirst = getAllByTestId(/row/i)[0];
  expect(newFirst.getAttribute("data-rowid")).toBe(
    itemB.getAttribute("data-rowid")
  );
});
