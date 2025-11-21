"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const products = [
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
      oldPrice: null,
      discount: null,
      status: "Tersedia",
      isNew: false,
    },
    {
      id: 3,
      category: "Wanita",
      name: "Hoodie Oversize Abu",
      price: 120000,
      oldPrice: null,
      discount: null,
      status: "Tersedia",
      isNew: true,
    },
    {
      id: 4,
      category: "Aksesoris",
      name: "Kemeja Kotak-Kotak",
      price: 90000,
      oldPrice: null,
      discount: null,
      status: "Tersedia",
      isNew: false,
    },
  ];

  // === PERUBAHAN UTAMA STEP 8 ===
  const filteredProducts =
    selectedCategory === "Semua"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="mt-6">

      {/* === FILTER KATEGORI === */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-700 font-medium">
          Kategori: <span className="font-semibold">{selectedCategory}</span>
        </p>

        <select
          className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none hover:border-gray-400 transition"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Semua</option>
          <option>Pria</option>
          <option>Wanita</option>
          <option>Aksesoris</option>
        </select>
      </div>

      {/* === GRID PRODUK === */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
          >
            {/* GAMBAR */}
            <div className="h-36 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
              <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-110" />

              <div
                className="absolute inset-0
                bg-gradient-to-r from-transparent via-white/40 to-transparent
                animate-[shimmer_1.8s_linear_infinite]"
              ></div>

              {item.status && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
                  {item.status}
                </span>
              )}

              {item.discount && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded">
                  {item.discount}% OFF
                </span>
              )}

              {item.isNew && (
                <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-[2px] rounded">
                  Baru
                </span>
              )}
            </div>

            <p className="text-sm font-semibold text-gray-900">{item.name}</p>

            <div className="mb-3">
              {item.oldPrice && (
                <p className="text-xs text-gray-400 line-through">
                  Rp {item.oldPrice.toLocaleString("id-ID")}
                </p>
              )}
              <p className="text-sm text-gray-900 font-semibold">
                Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>

            <button className="w-full border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100 active:scale-95 transition font-medium">
              Lihat Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
