export const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3100/api/products");
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(`Couldn't fetch products`);
  }
};
