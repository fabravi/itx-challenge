import Image from "next/image";
import styles from "./products.module.scss";
import Link from "next/link";

const getProducts = async () => {
  const res = await fetch("http://localhost:3100/api/products");
  const data = await res.json();

  return data;
};

const Products = async () => {
  const products = await getProducts();

  return (
    <>
      <h2 className={styles.title}>Pick your items</h2>
      <p className={styles.paragraph}>
        Start composing a new products layout by selecting a set of products to
        start from.
      </p>
      <div className={styles.container}>
        {products.map((product: any, i) => (
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
      <div className={styles["bottom-panel"]}>
        <div className={styles.count}>
          <strong>7 Items</strong> selected
        </div>
        <Link className={styles.continue} href={`/editor`}>
          Continue to editor
        </Link>
      </div>
    </>
  );
};

export default Products;
