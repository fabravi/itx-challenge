"use client";
import { IProduct, ITemplate } from "@/types";
import { DragAndDropRow } from "./DragAndDropRow";
import styles from "./draganddropgrid.module.scss";
import { useEffect, useState } from "react";

type DragAndDropGridProps = {
  products: IProduct[];
};

type Grid = {
  [key: string]: {
    id: number;
    template: ITemplate;
    items: {
      [key: string]: IProduct;
    };
  };
};

const ROW_MAX_ITEMS = 3;

export const DragAndDropGrid = ({ products }: DragAndDropGridProps) => {
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
          id: newRowIndex,
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

  return (
    <div className={styles.container}>
      {grid &&
        Object.values(grid).map((row) => (
          <DragAndDropRow products={Object.values(row.items)} />
        ))}
    </div>
  );
};
