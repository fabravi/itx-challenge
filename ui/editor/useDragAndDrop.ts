import { Grid, IProduct, ITemplate, ProductsMap } from "@/types";
import { useEffect, useState } from "react";
import { DragStart, DraggableLocation, DropResult } from "react-beautiful-dnd";

const ROW_MAX_ITEMS = 3;

export const useDragAndDrop = (products: IProduct[]) => {
  const [grid, setGrid] = useState<Grid>();
  const [rowOrder, setRowOrder] = useState<string[]>();
  const [productsMap, setProductsMap] = useState<ProductsMap>();
  const [activeSource, setActiveSource] = useState<DraggableLocation | null>(
    null
  );
  const [lastRowCreated, setLastRowCreated] = useState<string>();

  useEffect(() => {
    const { grid, productsMap } = createGrid(products);
    setGrid(grid);
    setRowOrder(createPlaceholder(grid));
    setProductsMap(productsMap);
    const lastRow = Object.keys(grid).pop();
    setLastRowCreated(lastRow!);
  }, products);

  const createPlaceholder = (grid: Grid) => {
    const rowIds = Object.keys(grid);
    rowIds.push("placeholder");
    return rowIds;
  };

  const createGrid = (products: IProduct[]) => {
    const productsMap: ProductsMap = {};
    const grid = products.reduce((result, product, index) => {
      productsMap[product.id] = product;

      const newRowIndex = `row-${Math.floor(index / ROW_MAX_ITEMS)}`;
      if (!result[newRowIndex]) {
        result[newRowIndex] = {
          id: newRowIndex.toString(),
          items: [],
          template: {
            id: "1",
            name: "Template Left",
            align: "LEFT",
          },
        };
      }

      result[newRowIndex].items.push(product.id);

      return result;
    }, {} as Grid);

    return { grid, productsMap };
  };

  const setTemplate = (rowId: string, template: ITemplate) => {
    setGrid((state) => {
      return {
        ...state,
        [rowId]: {
          ...state![rowId],
          template: template,
        },
      };
    });
  };

  const dropItemToPlaceholder = (
    start: Grid[keyof Grid],
    sourceIndex: number,
    draggableId: string
  ) => {
    const items = Array.from(start.items);
    items.splice(sourceIndex, 1);

    const newRowIndex = `row-${Number(lastRowCreated?.split("-")[1]) + 1}`;
    setLastRowCreated(newRowIndex);

    const emptyRowId = !items.length && start.id;

    setRowOrder((state) => {
      const rowsLeft = state?.filter((rowId) => emptyRowId !== rowId);
      rowsLeft?.splice(-1);
      return [...rowsLeft!, newRowIndex, "placeholder"];
    });
    setGrid((state) => {
      const newGrid = {
        ...state,
        [start.id]: { ...start, items },
        [newRowIndex]: {
          id: newRowIndex.toString(),
          items: [draggableId],
          template: {
            id: "1",
            name: "Template Left",
            align: "LEFT",
          },
        },
      };
      if (emptyRowId) {
        delete newGrid[start.id];
      }
      return newGrid;
    });
  };

  const dropItemToSameRow = (
    start: Grid[keyof Grid],
    sourceIndex: number,
    destinationIndex: number,
    draggableId: string
  ) => {
    const items = Array.from(start.items);
    items.splice(sourceIndex, 1);
    items.splice(destinationIndex, 0, draggableId);

    setGrid((state) => ({
      ...state,
      [start.id]: { ...start, items },
    }));
  };

  const dropItemToDifferentRow = (
    start: Grid[keyof Grid],
    finish: Grid[keyof Grid],
    sourceIndex: number,
    destinationIndex: number,
    draggableId: string
  ) => {
    const startItems = Array.from(start.items);
    const finishItems = Array.from(finish.items);
    startItems.splice(sourceIndex, 1);
    finishItems.splice(destinationIndex, 0, draggableId);

    const emptyRow = !startItems.length;

    setGrid((state) => {
      const newGrid = {
        ...state,
        [start.id]: { ...start, items: startItems },
        [finish.id]: { ...finish, items: finishItems },
      };
      if (emptyRow) {
        delete newGrid[start.id];
      }
      return newGrid;
    });

    if (emptyRow) {
      setRowOrder((state) => state?.filter((rowId) => start.id !== rowId));
    }
  };

  const onDragEnd = (responder: DropResult) => {
    const { type, draggableId, source, destination } = responder;

    if (!grid || !productsMap || !rowOrder || !source || !destination) return;

    if (type === "row") {
      return setRowOrder((state) => {
        if (!state) return state;
        const newState = [...state];
        newState.splice(source.index, 1);
        newState.splice(destination.index, 0, draggableId);

        return newState;
      });
    }

    if (type === "product") {
      const start = grid?.[source?.droppableId];
      const finish = grid?.[destination?.droppableId];

      if (destination?.droppableId === "placeholder") {
        dropItemToPlaceholder(start, source.index, draggableId);
      } else if (start === finish) {
        dropItemToSameRow(start, source.index, destination.index, draggableId);
      } else if (start !== finish) {
        dropItemToDifferentRow(
          start,
          finish,
          source.index,
          destination.index,
          draggableId
        );
      }
    }

    setActiveSource(null);
  };

  const onDragStart = (responder: DragStart) => {
    const { type, source } = responder;
    if (type === "product") {
      setActiveSource(source);
    }
  };

  return {
    onDragEnd,
    onDragStart,
    setTemplate,
    activeSource,
    rowOrder,
    productsMap,
    grid,
  };
};
