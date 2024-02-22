"use client";
import { Grid, IProduct, ITemplate } from "@/types";
import { DragAndDropRow } from "./DragAndDropRow";
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { Button, Toolbox } from "..";
import { useDragAndDrop } from "./useDragAndDrop";
import styles from "./draganddropgrid.module.scss";
import { saveGrid } from "@/app/lib/save-grid";
import { useState } from "react";

type DragAndDropGridProps = {
  products: IProduct[];
  templates: ITemplate[];
};

export const DragAndDropGrid = ({
  products,
  templates,
}: DragAndDropGridProps) => {
  resetServerContext();

  const [loading, setLoading] = useState(false);

  const {
    onDragEnd,
    onDragStart,
    setTemplate,
    activeSource,
    rowOrder,
    productsMap,
    grid,
  } = useDragAndDrop(products);

  const sendGrid = async () => {
    setLoading(true);
    await saveGrid(rowOrder?.slice(0, -1)!, grid!);
    setLoading(false);
  };

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
      </DragDropContext>
      <div className={styles["bottom-panel"]}>
        <Button
          label={loading ? "Saving grid" : "Save grid"}
          onClick={sendGrid}
          disabled={loading}
        />
      </div>
    </>
  );
};
