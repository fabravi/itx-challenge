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

type DragAndDropGridProps = {
  products: IProduct[];
};

type Grid = {
  [key: string]: {
    id: string;
    template: ITemplate;
    items: {
      [key: string]: IProduct;
    };
  };
};

const ROW_MAX_ITEMS = 3;

export const DragAndDropGrid = ({ products }: DragAndDropGridProps) => {
  resetServerContext();

  const [grid, setGrid] = useState<Grid>();

  useEffect(() => {
    const result = createGrid(products);
    setGrid(result);
  }, products);

  const createGrid = (products: IProduct[]) => {
    const grid = products.reduce((result, product, index) => {
      const newRowIndex = Math.floor(index / ROW_MAX_ITEMS);
      if (!result[newRowIndex]) {
        result[newRowIndex] = {
          id: newRowIndex.toString(),
          items: {},
          template: {
            id: "1",
            name: "Template Left",
            align: "LEFT",
          },
        };
      }

      const nextIndex = Object.keys(result[newRowIndex].items).length;
      result[newRowIndex].items[nextIndex] = product;

      return result;
    }, {} as Grid);

    return grid;
  };

  const onDragEnd = (responder: any) => {
    console.log(responder);
  };

  const onDragStart = (responder: any) => {
    console.log(responder);
  };

  if (!grid) return;

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Droppable droppableId="row" type="row">
        {(dropProvided) => (
          <div
            ref={dropProvided.innerRef}
            className={styles.container}
            {...dropProvided.droppableProps}
          >
            {Object.values(grid).map((row, index) => (
              <Draggable key={row.id} draggableId={row.id} index={index}>
                {(dragProvided) => (
                  <div
                    style={{
                      height: "auto",
                      border: "1px solid black",
                      background: "red",
                      visibility: "visible",
                      opacity: 1,
                    }}
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                  >
                    <DragAndDropRow
                      products={Object.values(row.items)}
                      dragHandleProps={{ ...dragProvided.dragHandleProps }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
