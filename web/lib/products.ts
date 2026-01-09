export type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
};

export const products: Product[] = [
  {id: 1,
      name: "Dior",
      price: "Rp 499.000",
      stock: 20,
    },
    {
      id: 2,
      name: "Reebok",
      price: "Rp 699.000",
      stock: 50,
    },
    {
      id: 3,
      name: "Supreme",
      price: "Rp 620.000",
      stock: 15,
    },
  ];