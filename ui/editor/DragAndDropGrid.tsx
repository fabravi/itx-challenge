"use client";
import { IProduct, ITemplate } from "@/types";
import { DragAndDropRow } from "./DragAndDropRow";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { Toolbox } from "..";
import { useDragAndDrop } from "./useDragAndDrop";
import styles from "./draganddropgrid.module.scss";

type DragAndDropGridProps = {
  products: IProduct[];
  templates: ITemplate[];
};

export const DragAndDropGrid = ({
  products,
  templates,
}: DragAndDropGridProps) => {
  resetServerContext();

  const {
    onDragEnd,
    onDragStart,
    setTemplate,
    activeSource,
    rowOrder,
    productsMap,
    grid,
  } = useDragAndDrop(products);

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
              {rowOrder?.map((rowId, index) => {
                return (
                  <Draggable key={rowId} draggableId={rowId} index={index}>
                    {(dragProvided) => (
                      <div
                        className={styles.draggable_container}
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                      >
                        <DragAndDropRow
                          products={
                            grid![rowId]?.items.map((id) => productsMap![id]) ||
                            []
                          }
                          source={activeSource}
                          templates={templates}
                          setTemplate={setTemplate}
                          dragHandleProps={{ ...dragProvided.dragHandleProps }}
                          rowId={rowId}
                          hidden={
                            rowId.includes("placeholder") && !activeSource
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
        {/* <pre>{JSON.stringify(grid, null, 2)}</pre>
        <pre>{JSON.stringify(rowOrder, null, 2)}</pre> */}
      </DragDropContext>
    </>
  );
};
