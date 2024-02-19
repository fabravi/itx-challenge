"use client";
import { IProduct, ITemplate } from "@/types";
import styles from "./draganddroprow.module.scss";
import { DragHandle, Dropdown, Product } from "..";

type DragAndDropRowProps = {
  products: IProduct[];
  templates?: ITemplate[];
};

export const DragAndDropRow = ({
  products,
  templates,
}: DragAndDropRowProps) => {
  return (
    <div className={styles.row}>
      <div className={styles["row-header"]}>
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
        {products.map(({ id, name, image, price }, i) => (
          <Product key={id} name={name} image={image} price={price} />
        ))}
      </div>
    </div>
  );
};
