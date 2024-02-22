"use client";
import { IProduct } from "@/types";
import { Heading, ProductSelection } from "@/ui";
import { getProducts } from "../lib/get-products";

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
