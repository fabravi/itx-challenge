"use client";
import { IProduct, ITemplate } from "@/types";
import styles from "./draganddroprow.module.scss";
import { DragHandle, Dropdown } from "..";
import { DragAndDropProducts } from "./DragAndDropProducts";
import { useState } from "react";
import { DraggableLocation } from "react-beautiful-dnd";

type DragAndDropRowProps = {
  products: IProduct[];
  templates?: ITemplate[];
  dragHandleProps: any;
  rowId: string;
  setTemplate: (rowId: string, template: ITemplate) => void;
  hidden?: boolean;
  source: DraggableLocation | null;
};

export const DragAndDropRow = ({
  products,
  rowId,
  templates,
  dragHandleProps,
  setTemplate: setTemplateHandler,
  hidden,
  source,
}: DragAndDropRowProps) => {
  const [template, setTemplate] = useState(templates![0]);

  const onSelect = (template: ITemplate) => {
    setTemplate(template);
    setTemplateHandler(rowId, template);
  };

  return (
    <div className={`${styles.row} ${hidden ? styles.hidden : ""}`}>
      <div
        className={styles["row-header"]}
        {...dragHandleProps}
        data-rowid={rowId}
        data-testid="row"
      >
        <DragHandle />
        <div className={styles.controls}>
          <span>Select theme:</span>
          <Dropdown
            value={template}
            items={templates!}
            label="name"
            valueKey="align"
            onSelect={onSelect}
          />
        </div>
      </div>
      <div className={styles["row-content"]}>
        <DragAndDropProducts
          products={products}
          rowId={rowId}
          align={template.align.toLowerCase()}
          source={source}
        />
      </div>
    </div>
  );
};
