export default function ProductsPage() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Card produk */}
        <div className="border rounded-lg p-3 hover:shadow-md transition">
          <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
            {/* Gambar placeholder */}
            <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>

            {/* Badge stok */}
            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>
          </div>

          <p className="text-sm font-medium">Kaos Polos Hitam</p>
          <p className="text-sm text-gray-600 mb-2">Rp 50.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
            Lihat Detail
          </button>
        </div>

        {/* Card lainnya — lakukan hal yang sama */}
        <div className="border rounded-lg p-3 hover:shadow-md transition">
          <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>
          </div>

          <p className="text-sm font-medium">Hoodie Premium</p>
          <p className="text-sm text-gray-600 mb-2">Rp 120.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
            Lihat Detail
          </button>
        </div>

        <div className="border rounded-lg p-3 hover:shadow-md transition">
          <div className="h-32 bg-gray-200 rounded mb-3 relative overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded transform transition-transform duration-200 hover:scale-105"></div>
            <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-[2px] rounded">
              Tersedia
            </span>
          </div>

          <p className="text-sm font-medium">Sweater Rajut</p>
          <p className="text-sm text-gray-600 mb-2">Rp 85.000</p>

          <button className="w-full border rounded-lg py-1 text-sm hover:bg-gray-100 transition">
            Lihat Detail
          </button>
        </div>

      </div>
    </div>
  );
}
