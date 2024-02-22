"use client";
import { IProduct } from "@/types";
import { Heading, ProductSelection } from "@/ui";

const getProducts = async () => {
  const res = await fetch("http://localhost:3100/api/products");
  const data = await res.json();

  return data;
};

const Products = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <>
      <Heading
        title="Pick your items"
        paragraph="Start composing a new products layout by selecting a set of products to
        start from."
      />
      <ProductSelection products={products} />
    </>
  );
};

export default Products;
