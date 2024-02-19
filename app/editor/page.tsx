import Image from "next/image";
import styles from "./editor.module.scss";
import Link from "next/link";

const getProducts = async () => {
  const res = await fetch("http://localhost:3100/api/products");
  const data = await res.json();

  return data;
};

const Editor = async () => {
  const products = await getProducts();

  return (
    <>
      <div className={styles.toolbox}>
        <div className={styles.controls}>
          Zoom
          <div className={styles.button}>Zoom Out</div>
          <div className={styles.button}>Zoom In</div>
        </div>
      </div>
      <h2 className={styles.title}>Drag & Drop Editor</h2>
      <p className={styles.paragraph}>
        Move your items from row to row, change your items positions and reorder
        the rows at your please.
      </p>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["row-header"]}>
            <span className="material-symbols-outlined">drag_handle</span>
            <div className={styles.controls}>
              Select theme:
              <div className={styles.button}>
                Align right
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
          <div className={styles["row-content"]}>
            {products.splice(0, 3).map((product: any, i) => (
              <div
                key={product.id}
                className={`${styles.product} ${
                  [1, 3, 7, 9, 11, 22].indexOf(i) >= 0 ? styles.selected : ""
                }`}
              >
                <div className={styles["img-container"]}>
                  <Image src={product.image} alt={product.name} fill={true} />
                </div>
                <div className={styles.detail}>
                  <h3>{product.name}</h3>
                  <div>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["row-header"]}>
            <span className="material-symbols-outlined">drag_handle</span>
            <div className={styles.controls}>
              Select theme:
              <div className={styles.button}>
                Align right
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
          <div className={styles["row-content"]}>
            {products.splice(0, 3).map((product: any, i) => (
              <div
                key={product.id}
                className={`${styles.product} ${
                  [1, 3, 7, 9, 11, 22].indexOf(i) >= 0 ? styles.selected : ""
                }`}
              >
                <div className={styles["img-container"]}>
                  <Image src={product.image} alt={product.name} fill={true} />
                </div>
                <div className={styles.detail}>
                  <h3>{product.name}</h3>
                  <div>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles["row-header"]}>
            <span className="material-symbols-outlined">drag_handle</span>
            <div className={styles.controls}>
              Select theme:
              <div className={styles.button}>
                Align right
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
          <div className={styles["row-content"]}>
            {products.splice(0, 3).map((product: any, i) => (
              <div
                key={product.id}
                className={`${styles.product} ${
                  [1, 3, 7, 9, 11, 22].indexOf(i) >= 0 ? styles.selected : ""
                }`}
              >
                <div className={styles["img-container"]}>
                  <Image src={product.image} alt={product.name} fill={true} />
                </div>
                <div className={styles.detail}>
                  <h3>{product.name}</h3>
                  <div>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["bottom-panel"]}>
        <Link className={styles.continue} href={`/editor`}>
          Save grid
        </Link>
      </div>
    </>
  );
};

export default Editor;
