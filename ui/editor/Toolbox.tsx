"use client";
import { useEffect, useState } from "react";
import { Button } from "..";
import styles from "./toolbox.module.scss";

export const Toolbox = () => {
  const [zoomedOut, setZoomedOut] = useState(false);

  useEffect(() => {
    zoomedOut
      ? document.body.classList.add("zoom_50")
      : document.body.classList.remove("zoom_50");
  }, [zoomedOut]);

  const zoomOut = () => {
    setZoomedOut(true);
  };
  const zoomIn = () => {
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
