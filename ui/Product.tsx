import styles from "./product.module.scss";
import Image from "next/image";

type ProductProps = {
  name: string;
  price: string;
  image: string;
  fade?: boolean;
  hoverActive?: boolean;
  [x: string]: any;
};

export const Product = ({
  name,
  price,
  image,
  fade,
  hoverActive,
  ...rest
}: ProductProps) => {
  return (
    <div className={`${styles.product} ${fade ? styles.fade : ""}`} {...rest}>
      <div className={styles.img_container}>
        <Image src={image} alt={name} fill={true} />
      </div>
      <div
        className={`${styles.detail} ${hoverActive ? styles.detail_hover : ""}`}
      >
        <h3>{name}</h3>
        <div>{price}</div>
      </div>
    </div>
  );
};
