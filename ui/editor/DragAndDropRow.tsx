"use client";
import { IProduct, ITemplate } from "@/types";
import styles from "./draganddroprow.module.scss";
import { DragHandle, Dropdown } from "..";
import { DragAndDropProducts } from "./DragAndDropProducts";

type DragAndDropRowProps = {
  products: IProduct[];
  templates?: ITemplate[];
  dragHandleProps: any;
  rowId: string;
};

export const DragAndDropRow = ({
  products,
  rowId,
  templates,
  dragHandleProps,
}: DragAndDropRowProps) => {
  return (
    <div className={styles.row}>
      <div className={styles["row-header"]} {...dragHandleProps}>
        <DragHandle />
        <div className={styles.controls}>
          Select theme:
          <Dropdown
            value={"Select"}
            items={[{ value: "1", label: "Template here" }]}
          />
        </div>
      </div>
      <div className={styles["row-content"]}>
        <DragAndDropProducts products={products} rowId={rowId} />
      </div>
    </div>
  );
};
