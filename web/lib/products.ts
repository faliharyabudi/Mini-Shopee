export type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
};

export const products: Product[] = [
  {id: 1,
      name: "Dior",
      price: "Rp 499.000",
      stock: 20,
      image: "/products/images/productCart1.jpeg"
    },
    {
      id: 2,
      name: "Reebok",
      price: "Rp 699.000",
      stock: 50,
      image: "/products/images/productCart2.jpeg"
    },
    {
      id: 3,
      name: "Supreme",
      price: "Rp 620.000",
      stock: 15,
      image: "/products/images/productCart3.jpeg"
    },
  ];