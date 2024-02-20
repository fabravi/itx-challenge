"use client";
import { IProduct, ITemplate } from "@/types";
import { DragAndDropRow } from "./DragAndDropRow";
import styles from "./draganddropgrid.module.scss";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { Toolbox } from "..";

type DragAndDropGridProps = {
  products: IProduct[];
  templates: ITemplate[];
};

type Grid = {
  [key: string]: {
    id: string;
    template: ITemplate;
    items: string[];
  };
};

type ProductsMap = {
  [key: string]: IProduct;
};

const ROW_MAX_ITEMS = 3;

export const DragAndDropGrid = ({
  products,
  templates,
}: DragAndDropGridProps) => {
  resetServerContext();

  const [grid, setGrid] = useState<Grid>();
  const [rowOrder, setRowOrder] = useState<string[]>();
  const [productsMap, setProductsMap] = useState<ProductsMap>();

  useEffect(() => {
    const { grid, productsMap } = createGrid(products);
    setGrid(grid);
    setRowOrder(Object.keys(grid));
    setProductsMap(productsMap);
  }, products);

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

  const onDragEnd = (responder: any) => {
    const { type, draggableId, source, destination } = responder;

    if (!grid || !productsMap || !rowOrder) return;

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
      const start = grid[source.droppableId];
      const finish = grid[destination.droppableId];

      if (start === finish) {
        const items = Array.from(start.items);
        items.splice(source.index, 1);
        items.splice(destination.index, 0, draggableId);

        return setGrid((state) => ({
          ...state,
          [start.id]: { ...start, items },
        }));
      } else {
        const startItems = Array.from(start.items);
        const finishItems = Array.from(finish.items);
        startItems.splice(source.index, 1);
        finishItems.splice(destination.index, 0, draggableId);

        return setGrid((state) => ({
          ...state,
          [start.id]: { ...start, items: startItems },
          [finish.id]: { ...finish, items: finishItems },
        }));
      }
    }
  };

  const onDragStart = (responder: any) => {
    console.log(responder);
  };

  if (!grid || !rowOrder || !productsMap) return;

  return (
    <>
      <Toolbox />
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Droppable droppableId="row" type="row">
          {(dropProvided) => (
            <div
              ref={dropProvided.innerRef}
              className={styles.container}
              {...dropProvided.droppableProps}
            >
              {rowOrder.map((rowId, index) => (
                <Draggable key={rowId} draggableId={rowId} index={index}>
                  {(dragProvided) => (
                    <div
                      className={styles.draggable_container}
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                    >
                      <DragAndDropRow
                        products={grid[rowId].items.map(
                          (id) => productsMap[id]
                        )}
                        templates={templates}
                        setTemplate={setTemplate}
                        dragHandleProps={{ ...dragProvided.dragHandleProps }}
                        rowId={rowId}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
        {/* <pre>{JSON.stringify(grid, null, 2)}</pre> */}
      </DragDropContext>
    </>
  );
};
