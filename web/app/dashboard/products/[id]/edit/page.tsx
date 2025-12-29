"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/api/products/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        return res.json();
      })
      .then((data) => {
        console.log("FETCH PRODUCT DETAIL", data);
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setProduct(null);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <div>Loading...</div>;

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Produk tidak ditemukan</h1>
        <button
          onClick={() => router.push("/dashboard/products")}
          className="mt-4 border px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Detail Produk</h1>

      <div className="border rounded p-4">
        <p><b>Nama:</b> {product.name}</p>
        <p><b>Harga:</b> Rp {product.price.toLocaleString("id-ID")}</p>
      </div>

      <Link
        href="/dashboard/products"
        className="inline-block border px-4 py-2 rounded"
      >
        Kembali
      </Link>
    </div>
  );
}
