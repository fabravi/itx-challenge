import { renderHook, act } from "@testing-library/react";
import { useDragAndDrop } from "./useDragAndDrop";

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

test("grid created properly", () => {
  const { result } = renderHook(() => useDragAndDrop(products));

  expect(result.current.grid).toEqual({
    "row-0": {
      id: "row-0",
      items: ["329699637", "327872883", "330375837"],
      template: {
        id: "1",
        name: "Template Left",
        align: "LEFT",
      },
    },
    "row-1": {
      id: "row-1",
      items: ["333090047"],
      template: {
        id: "1",
        name: "Template Left",
        align: "LEFT",
      },
    },
  });
});

test("drop row", () => {
  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() =>
    result.current.onDragEnd({
      type: "row",
      draggableId: "row-1",
      source: { index: 1, droppableId: "row" },
      destination: { index: 0, droppableId: "row" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );

  rerender();

  expect(result.current.rowOrder).toEqual(["row-1", "row-0", "placeholder"]);
});

test("drop product on same row", () => {
  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "327872883",
      source: { index: 1, droppableId: "row-0" },
      destination: { index: 2, droppableId: "row-0" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );

  rerender();

  expect(result.current.grid?.["row-0"].items).toEqual([
    "329699637",
    "330375837",
    "327872883",
  ]);
});

test("drop product on different row", () => {
  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "330375837",
      source: { index: 2, droppableId: "row-0" },
      destination: { index: 1, droppableId: "row-1" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );

  rerender();

  expect(result.current.grid?.["row-0"].items).toEqual([
    "329699637",
    "327872883",
  ]);

  expect(result.current.grid?.["row-1"].items).toEqual([
    "333090047",
    "330375837",
  ]);
});

test("drop product on placeholder row", () => {
  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "330375837",
      source: { index: 2, droppableId: "row-0" },
      destination: { index: 0, droppableId: "placeholder" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );

  rerender();

  expect(result.current.rowOrder).toEqual([
    "row-0",
    "row-1",
    "row-2",
    "placeholder",
  ]);

  expect(result.current.grid?.["row-0"].items).toEqual([
    "329699637",
    "327872883",
  ]);
  expect(result.current.grid?.["row-2"].items).toEqual(["330375837"]);
});

test("delete row if left empty", () => {
  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "329699637",
      source: { index: 0, droppableId: "row-0" },
      destination: { index: 0, droppableId: "placeholder" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );
  rerender();

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "327872883",
      source: { index: 0, droppableId: "row-0" },
      destination: { index: 0, droppableId: "row-2" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );
  rerender();

  act(() =>
    result.current.onDragEnd({
      type: "product",
      draggableId: "330375837",
      source: { index: 0, droppableId: "row-0" },
      destination: { index: 0, droppableId: "row-2" },
      reason: "DROP",
      mode: "FLUID",
      combine: null,
    })
  );
  rerender();

  expect(result.current.rowOrder).toEqual(["row-1", "row-2", "placeholder"]);
});

test("set template", () => {
  const template = {
    id: "2",
    name: "Template Center",
    align: "CENTER",
  };

  const { result, rerender } = renderHook(() => useDragAndDrop(products));

  act(() => result.current.setTemplate("row-0", template));

  rerender();

  expect(result.current.grid?.["row-0"].template).toEqual(template);
});
