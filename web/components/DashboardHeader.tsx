"use client";

export default function DashboardHeader() {
  return (
    <div className="bg-white border rounded-2xl px-6 py-5 space-y-4 relative shadow-sm">

      {/* AKSEN WARNA */}
      <div className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-l-2xl" />

      {/* ROW 1 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Hello, Admin 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Selamat datang kembali di Mini Shopee Admin
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-purple-600 transition">
            🔔
          </button>
          <button className="text-gray-500 hover:text-purple-600 transition">
            ✉️
          </button>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search your products"
          className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

    </div>
  );
}
