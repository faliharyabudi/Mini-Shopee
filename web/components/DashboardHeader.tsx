"use client";

export default function DashboardHeader() {
  return (
    <div className="bg-white border rounded-xl px-6 py-5 space-y-4">

      {/* ROW 1: TITLE + USER */}
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
          <button className="text-gray-500 hover:text-purple-600">
            🔔
          </button>
          <button className="text-gray-500 hover:text-purple-600">
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

      {/* ROW 2: SEARCH */}
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
