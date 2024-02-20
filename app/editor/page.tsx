import styles from "./editor.module.scss";
import Link from "next/link";
import { Heading, DragAndDropGrid, Toolbox } from "@/ui";
import { IProduct, ITemplate } from "@/types";

const getEditorData = async () => {
  const productsPromise = fetch("http://localhost:3100/api/products");
  const templatesPromise = fetch("http://localhost:3100/api/templates");
  const [productsResponse, templatesResponse] = await Promise.all([
    productsPromise,
    templatesPromise,
  ]);
  const [products, templates] = await Promise.all([
    productsResponse.json(),
    templatesResponse.json(),
  ]);

  return { products, templates } as {
    products: IProduct[];
    templates: ITemplate[];
  };
};

const Editor = async () => {
  const { products, templates } = await getEditorData();

  return (
    <>
      <Toolbox />
      <Heading
        title="Drag & Drop Editor"
        paragraph="Move your items from row to row, change your items positions and reorder
        the rows at your please."
      />
      <DragAndDropGrid products={products} templates={templates} />
      <div className={styles["bottom-panel"]}>
        <Link className={styles.continue} href={`/editor`}>
          Save grid
        </Link>
      </div>
    </>
  );
};

export default Editor;
