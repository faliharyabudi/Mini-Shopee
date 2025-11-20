export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

      {/* PRODUK 1 */}
      <div className="border rounded-lg p-3 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
        <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
          <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">Tersedia</span>
          <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded">20% OFF</span>
        </div>

        <p className="text-sm font-medium">Kaos Polos Hitam</p>
        <p className="text-yellow-400 text-[12px]">★★★★★</p>
        <p className="text-[11px] text-gray-500 mb-1">Terjual 320+</p>

        <div className="mb-2">
          <p className="text-xs text-gray-400 line-through">Rp 65.000</p>
          <p className="text-sm text-gray-800 font-medium">Rp 50.000</p>
        </div>

        <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
          Lihat Detail
        </button>
      </div>

      {/* PRODUK 2 */}
      <div className="border rounded-lg p-3 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
        <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
          <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">Tersedia</span>
        </div>

        <p className="text-sm font-medium">Celana Jeans Biru</p>
        <p className="text-yellow-400 text-[12px]">★★★★☆</p>
        <p className="text-[11px] text-gray-500 mb-1">Terjual 190+</p>

        <p className="text-sm text-gray-600 mb-2">Rp 150.000</p>

        <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
          Lihat Detail
        </button>
      </div>

      {/* PRODUK 3 */}
      <div className="border rounded-lg p-3 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
        <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
          <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
          
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">Tersedia</span>

          <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-[2px] rounded">Baru</span>
        </div>

        <p className="text-sm font-medium">Hoodie Oversize Abu</p>
        <p className="text-yellow-400 text-[12px]">★★★★★</p>
        <p className="text-[11px] text-gray-500 mb-1">Terjual 500+</p>

        {/* 🔹 Perubahan baru: Badge Best Seller */}
        <p className="inline-block bg-yellow-400 text-black text-[10px] px-2 py-[2px] rounded mb-2">
          ⭐ Best Seller
        </p>

        <p className="text-sm text-gray-600 mb-2">Rp 120.000</p>

        <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
          Lihat Detail
        </button>
      </div>

      {/* PRODUK 4 */}
      <div className="border rounded-lg p-3 hover:shadow-lg transition-transform duration-200 hover:-translate-y-1">
        <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
          <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">Tersedia</span>
        </div>

        <p className="text-sm font-medium">Kemeja Kotak-Kotak</p>
        <p className="text-yellow-400 text-[12px]">★★★☆☆</p>
        <p className="text-[11px] text-gray-500 mb-1">Terjual 70+</p>

        <p className="text-sm text-gray-600 mb-2">Rp 90.000</p>

        <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
          Lihat Detail
        </button>
      </div>

    </div>
  );
}
