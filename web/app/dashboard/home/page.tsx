"use client";

export default function DashboardHome() {
  return (
    <div className="space-y-6">

      {/* GREETING */}
      <div>
        <h1 className="text-2xl font-bold">Selamat Datang 👋</h1>
        <p className="text-gray-500 text-sm">
          Mau belanja apa hari ini?
        </p>
      </div>

      {/* BANNER */}
      <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 text-white shadow-md">
        <h2 className="text-lg font-semibold">Promo Spesial!</h2>
        <p className="text-sm opacity-90">Diskon hingga 50% untuk semua kategori</p>
      </div>

      {/* KATEGORI */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Kategori</h3>
        <div className="grid grid-cols-4 gap-3">

          {[
            { name: "Pria", emoji: "👕" },
            { name: "Wanita", emoji: "👗" },
            { name: "Aksesoris", emoji: "⌚" },
            { name: "Sepatu", emoji: "👟" },
          ].map((cat, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-3 flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <p className="text-[12px] mt-1">{cat.name}</p>
            </div>
          ))}

        </div>
      </div>

      {/* PRODUK REKOMENDASI */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Rekomendasi</h3>
        <div className="grid grid-cols-2 gap-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-xl p-3 shadow-sm hover:shadow-md transition"
            >
              <div className="h-28 bg-gray-200 rounded-lg mb-2" />
              <p className="text-sm font-semibold">Produk {item}</p>
              <p className="text-sm text-gray-600">Rp 50.000</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
