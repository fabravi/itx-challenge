import styles from "./product.module.scss";
import Image from "next/image";

type ProductProps = {
  name: string;
  price: string;
  image: string;
  fade?: boolean;
};

export const Product = ({ name, price, image, fade }: ProductProps) => {
  return (
    <div className={`${styles.product} ${fade ? styles.fade : ""}`}>
      <div className={styles["img-container"]}>
        <Image src={image} alt={name} fill={true} />
      </div>
      <div className={styles.detail}>
        <h3>{name}</h3>
        <div>{price}</div>
      </div>
    </div>
  );
};
