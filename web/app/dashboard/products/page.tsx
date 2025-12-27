"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = { id: number; name: string; price: number };

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/products") 
      .then(res => res.json())
      .then(data => {
        console.log("FETCH PRODUCTS", data); // 
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("ERROR FETCH PRODUCTS", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="font-bold">{product.name}</h2>
          <p>Rp {product.price.toLocaleString("id-ID")}</p>
          <Link href={`/dashboard/products/${product.id}/edit`}>
            <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
