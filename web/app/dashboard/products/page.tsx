"use client";

import { useState } from "react";
import Link from "next/link";

type Product = {
  id: number;
  category: string;
  name: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  status: string;
  isNew: boolean;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      category: "Pria",
      name: "Kaos Polos Hitam",
      price: 50000,
      oldPrice: 65000,
      discount: 20,
      status: "Tersedia",
      isNew: false,
    },
    {
      id: 2,
      category: "Pria",
      name: "Celana Jeans Biru",
      price: 150000,
      status: "Tersedia",
      isNew: false,
    },
    {
      id: 3,
      category: "Wanita",
      name: "Hoodie Oversize Abu",
      price: 120000,
      status: "Tersedia",
      isNew: true,
    },
    {
      id: 4,
      category: "Aksesoris",
      name: "Kemeja Kotak-Kotak",
      price: 90000,
      status: "Tersedia",
      isNew: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");

  const handleAddProduct = () => {
    if (!name || !price) return;

    setProducts([
      ...products,
      {
        id: products.length + 1,
        name,
        price: Number(price),
        category: "Pria",
        status: "Tersedia",
        isNew: true,
      },
    ]);

    setName("");
    setPrice("");
    setShowForm(false);
  };

  return (
    <div className="mt-6 mb-10 space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Daftar Produk</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          + Tambah Produk
        </button>
      </div>

      {/* FORM TAMBAH */}
      {showForm && (
        <div className="bg-white border rounded-xl p-4 space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Nama produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="number"
            placeholder="Harga"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <button
            onClick={handleAddProduct}
            className="bg-purple-600 text-white px-4 py-2 rounded text-sm"
          >
            Simpan Produk
          </button>
        </div>
      )}

      {/* GRID PRODUK */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-3 shadow-sm"
          >
            <div className="h-36 bg-gray-300 rounded-lg mb-3 relative">
              {item.status && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 rounded">
                  {item.status}
                </span>
              )}
              {item.isNew && (
                <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-2 rounded">
                  Baru
                </span>
              )}
            </div>

            <p className="text-sm font-semibold">{item.name}</p>
            <p className="text-sm font-bold">
              Rp {item.price.toLocaleString("id-ID")}
            </p>

            <Link href={`/dashboard/products/${item.id}`}>
              <button className="w-full border rounded-lg py-2 text-sm mt-3">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
