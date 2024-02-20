"use client";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Product } from "..";
import { IProduct } from "@/types";
import styles from "./draganddropproducts.module.scss";

type DragAndDropItemProps = {
  products: IProduct[];
  rowId: string;
  align: string;
};

export const DragAndDropProducts = ({
  products,
  rowId,
  align,
}: DragAndDropItemProps) => {
  return (
    <Droppable
      droppableId={rowId}
      direction="horizontal"
      type="product"
      isDropDisabled={products.length === 3}
    >
      {(provided) => {
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
