export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: string;
}

export interface ITemplate {
  id: string;
  name: string;
  align: string;
}

export type Grid = {
  [key: string]: {
    id: string;
    template: ITemplate;
    items: string[];
  };
};

export type ProductsMap = {
  [key: string]: IProduct;
};
