"use client";
import { useState } from "react";
import { Button } from "..";
import styles from "./toolbox.module.scss";

export const Toolbox = () => {
  const [zoomedOut, setZoomedOut] = useState(false);

  const zoomOut = () => {
    document.body.classList.add("zoom_50");
    setZoomedOut(true);
  };
  const zoomIn = () => {
    document.body.classList.remove("zoom_50");
    setZoomedOut(false);
  };

  return (
    <div className={styles.toolbox}>
      <div className={styles.controls}>
        <Button label="Zoom Out" onClick={zoomOut} disabled={zoomedOut} />
        <Button label="Zoom In" onClick={zoomIn} disabled={!zoomedOut} />
      </div>
    </div>
  );
};
