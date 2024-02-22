import { IProduct, ITemplate } from "@/types";

export const getEditorData = async () => {
  const productsPromise = fetch("http://localhost:3100/api/products", {
    next: { revalidate: 60 },
  });
  const templatesPromise = fetch("http://localhost:3100/api/templates", {
    next: { revalidate: 60 },
  });
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
