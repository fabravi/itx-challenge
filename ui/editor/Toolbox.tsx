"use client";
import { Button } from "..";
import styles from "./toolbox.module.scss";

export const Toolbox = () => {
  const zoomOut = () => {};
  const zoomIn = () => {};

  return (
    <div className={styles.toolbox}>
      <div className={styles.controls}>
        <Button label="Zoom Out" onClick={zoomOut} />
        <Button label="Zoom In" onClick={zoomIn} />
      </div>
    </div>
  );
};
