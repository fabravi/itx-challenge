"use client";
import { IProduct, ITemplate } from "@/types";
import styles from "./draganddroprow.module.scss";
import { DragHandle, Dropdown, Product } from "..";

type DragAndDropRowProps = {
  products: IProduct[];
  templates?: ITemplate[];
  dragHandleProps: any;
};

export const DragAndDropRow = ({
  products,
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
        {products.map(({ id, name, image, price }) => (
          <Product key={id} name={name} image={image} price={price} />
        ))}
      </div>
    </div>
  );
};
