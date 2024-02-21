"use client";
import {
  Draggable,
  DraggableLocation,
  Droppable,
  resetServerContext,
} from "react-beautiful-dnd";
import { Product } from "..";
import { IProduct } from "@/types";
import styles from "./draganddropproducts.module.scss";

type DragAndDropItemProps = {
  products: IProduct[];
  rowId: string;
  align: string;
  source: DraggableLocation | null;
};

export const DragAndDropProducts = ({
  products,
  rowId,
  align,
  source,
}: DragAndDropItemProps) => {
  resetServerContext();
  const rowFullAndNotSelf =
    products.length === 3 && !!source && rowId !== source?.droppableId;

  return (
    <Droppable
      droppableId={rowId}
      direction="horizontal"
      type="product"
      isDropDisabled={rowFullAndNotSelf}
    >
      {(provided, snapshot) => {
        return (
          <div
            className={`${styles.container} ${styles[align]}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {products.map((product, index) => (
              <Draggable
                key={product.id}
                draggableId={product.id}
                index={index}
              >
                {(provided) => {
                  return (
                    <div
                      className={styles.item}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Product {...product} />
                    </div>
                  );
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
