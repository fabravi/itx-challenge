"use client";
import { IProduct } from "@/types";
import { DragAndDropRow } from "./DragAndDropRow";
import styles from "./draganddropgrid.module.scss";

type DragAndDropGridProps = {
  products: IProduct[];
};

export const DragAndDropGrid = ({ products }: DragAndDropGridProps) => {
  return (
    <div className={styles.container}>
      <DragAndDropRow products={[...products].splice(0, 3)} />
      <DragAndDropRow products={[...products].splice(3, 3)} />
      <DragAndDropRow products={[...products].splice(6, 3)} />
    </div>
  );
};
