"use client";
import { IProduct, ITemplate } from "@/types";
import styles from "./draganddroprow.module.scss";
import { DragHandle, Dropdown } from "..";
import { DragAndDropProducts } from "./DragAndDropProducts";
import { useState } from "react";

type DragAndDropRowProps = {
  products: IProduct[];
  templates?: ITemplate[];
  dragHandleProps: any;
  rowId: string;
  setTemplate: (rowId: string, template: ITemplate) => void;
};

export const DragAndDropRow = ({
  products,
  rowId,
  templates,
  dragHandleProps,
  setTemplate: setTemplateHandler,
}: DragAndDropRowProps) => {
  const [template, setTemplate] = useState(templates![0]);

  const onSelect = (template: ITemplate) => {
    setTemplate(template);
    setTemplateHandler(rowId, template);
  };

  return (
    <div className={styles.row}>
      <div className={styles["row-header"]} {...dragHandleProps}>
        <DragHandle />
        <div className={styles.controls}>
          Select theme:
          <Dropdown
            value={template}
            items={templates!}
            label="name"
            key="align"
            onSelect={onSelect}
          />
        </div>
      </div>
      <div className={styles["row-content"]}>
        <DragAndDropProducts
          products={products}
          rowId={rowId}
          align={template.align.toLowerCase()}
        />
      </div>
    </div>
  );
};
