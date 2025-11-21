"use client";

import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState("default");
  const [loading, setLoading] = useState(true);

  // Simulasi loading dari server
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

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

  // === FILTER KATEGORI ===
  const filteredCategory =
    selectedCategory === "Semua"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // === FILTER SEARCH ===
  const filteredSearch = filteredCategory.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // === SORTING ===
  const finalProducts = [...filteredSearch].sort((a, b) => {
    if (sortValue === "termurah") return a.price - b.price;
    if (sortValue === "termahal") return b.price - a.price;
    if (sortValue === "az") return a.name.localeCompare(b.name);
    if (sortValue === "za") return b.name.localeCompare(a.name);
    if (sortValue === "terbaru") return Number(b.isNew) - Number(a.isNew);

    return 0;
  });

  return (
    <div className="mt-6 animate-fadeIn">
      {/* SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
        />
      </div>

      {/* FILTER & SORT BAR */}
      <div className="flex items-center justify-between mb-4">
        {/* FILTER KATEGORI */}
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

        {/* SORTING */}
        <select
          className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none hover:border-gray-400 transition"
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="default">Urutkan</option>
          <option value="terbaru">Terbaru</option>
          <option value="termurah">Termurah</option>
          <option value="termahal">Termahal</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>

      {/* === SKELETON LOADING === */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm"
            >
              <div className="h-36 bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
              <div className="h-3 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      ) : (
        /* === GRID PRODUK === */
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {finalProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 animate-fadeIn"
            >
              {/* GAMBAR */}
              <div className="h-36 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-300 hover:scale-110"></div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.8s_linear_infinite]"></div>

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
      )}
    </div>
  );
}
