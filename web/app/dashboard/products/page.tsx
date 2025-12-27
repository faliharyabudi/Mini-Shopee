"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const searchFromUrl = searchParams.get("search") ?? "";

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortValue, setSortValue] = useState("default");

  // 🔥 searchQuery DIAMBIL LANGSUNG
  const searchQuery = searchFromUrl;

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
  ];

  const filteredCategory =
    selectedCategory === "Semua"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const filteredSearch = filteredCategory.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const finalProducts = [...filteredSearch].sort((a, b) => {
    if (sortValue === "termurah") return a.price - b.price;
    if (sortValue === "termahal") return b.price - a.price;
    if (sortValue === "az") return a.name.localeCompare(b.name);
    if (sortValue === "za") return b.name.localeCompare(a.name);
    if (sortValue === "terbaru") return Number(b.isNew) - Number(a.isNew);
    return 0;
  });

  return (
    <div className="mt-6 mb-10">
      <input
        value={searchQuery}
        readOnly
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4 bg-gray-50"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {finalProducts.map((item) => (
          <div key={item.id} className="bg-white border rounded-xl p-3">
            <div className="h-36 bg-gray-300 rounded-lg mb-3" />
            <p className="font-semibold">{item.name}</p>
            <p>Rp {item.price.toLocaleString("id-ID")}</p>

            <Link href={`/dashboard/products/${item.id}`}>
              <button className="w-full mt-3 border rounded-lg py-2 text-sm">
                Lihat Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
