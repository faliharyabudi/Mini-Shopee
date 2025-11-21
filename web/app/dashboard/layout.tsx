export default function ProductsPage() {
  return (
    <div>

      {/* Judul section */}
      <h2 className="text-lg font-semibold mb-4">Daftar Produk</h2>

      {/* Grid produk */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {/* PRODUK 1 */}
        <div className="border rounded-xl p-3 hover:shadow transition hover:-translate-y-1 bg-white">
          <div className="h-32 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] opacity-0 hover:opacity-100"></div>
            </div>

            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>

            <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded">
              20% OFF
            </span>
          </div>

          <p className="text-sm font-medium">Kaos Polos Hitam</p>

          <div className="mb-2">
            <p className="text-xs text-gray-400 line-through">Rp 65.000</p>
            <p className="text-sm font-semibold text-gray-800">Rp 50.000</p>
          </div>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 active:scale-95 transition">
            Lihat Detail
          </button>
        </div>

        {/* PRODUK 2 */}
        <div className="border rounded-xl p-3 hover:shadow transition hover:-translate-y-1 bg-white">
          <div className="h-32 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] opacity-0 hover:opacity-100"></div>
            </div>

            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>
          </div>

          <p className="text-sm font-medium">Celana Jeans Biru</p>
          <p className="text-sm font-semibold text-gray-800 mb-2">Rp 150.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 active:scale-95 transition">
            Lihat Detail
          </button>
        </div>

        {/* PRODUK 3 */}
        <div className="border rounded-xl p-3 hover:shadow transition hover:-translate-y-1 bg-white">
          <div className="h-32 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] opacity-0 hover:opacity-100"></div>
            </div>

            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>

            <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-[10px] px-2 py-[2px] rounded">
              Baru
            </span>
          </div>

          <p className="text-sm font-medium">Hoodie Oversize Abu</p>
          <p className="text-sm font-semibold text-gray-800 mb-2">Rp 120.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 active:scale-95 transition">
            Lihat Detail
          </button>
        </div>

        {/* PRODUK 4 */}
        <div className="border rounded-xl p-3 hover:shadow transition hover:-translate-y-1 bg-white">
          <div className="h-32 bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded-lg transform transition-transform duration-200 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite] opacity-0 hover:opacity-100"></div>
            </div>

            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>
          </div>

          <p className="text-sm font-medium">Kemeja Kotak-Kotak</p>
          <p className="text-sm font-semibold text-gray-800 mb-2">Rp 90.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 active:scale-95 transition">
            Lihat Detail
          </button>
        </div>

      </div>
    </div>
  );
}
