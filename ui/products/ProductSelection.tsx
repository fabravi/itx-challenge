"use client";
import { IProduct } from "@/types";
import { useState } from "react";
import { Product } from "..";
import styles from "./productselection.module.scss";
import Link from "next/dist/client/link";

export const ProductSelection = ({ products }: { products: IProduct[] }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelected = (id: string) => {
    setSelected((state) => {
      if (state.includes(id)) {
        return state.filter((item) => item !== id);
      } else {
        return [...state, id];
      }
    });
  };

  return (
    <>
      <div className={styles.container}>
        {products.map((product: IProduct, index: any) => (
          <Product
            {...product}
            key={product.id}
            fade={!!selected.length && !selected.includes(product.id)}
            onClick={() => toggleSelected(product.id)}
          ></Product>
        ))}
      </div>
      <div className={styles["bottom-panel"]}>
        <div className={styles.count}>
          <strong>{selected.length} Items</strong> selected
        </div>
        <Link
          className={styles.continue}
          href={`/editor?ids=[${selected.join(",")}]`}
        >
          Continue to editor
        </Link>
      </div>
    </>
  );
};
