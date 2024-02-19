import styles from "./editor.module.scss";
import Link from "next/link";
import { Heading, DragAndDropGrid, Toolbox } from "@/ui";

const getProducts = async () => {
  const res = await fetch("http://localhost:3100/api/products");
  const data = await res.json();

  return data;
};

const Editor = async () => {
  const products = await getProducts();

  return (
    <>
      <Toolbox />
      <Heading
        title="Drag & Drop Editor"
        paragraph="Move your items from row to row, change your items positions and reorder
        the rows at your please."
      />
      <DragAndDropGrid products={products} />
      <div className={styles["bottom-panel"]}>
        <Link className={styles.continue} href={`/editor`}>
          Save grid
        </Link>
      </div>
    </>
  );
};

export default Editor;
