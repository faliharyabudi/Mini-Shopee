"use client";

import { Bell, Mail, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div
      className="
        bg-white border rounded-xl px-6 py-4
        flex flex-col gap-4
      "
    >
      {/* ================= TOP ROW ================= */}
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Hello, Admin 👋
          </h1>
          <p className="text-sm text-gray-500">
            Selamat datang kembali di Mini Shopee Admin
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-purple-600 transition hover:scale-110">
            <Bell className="w-5 h-5" />
          </button>

          <button className="text-gray-500 hover:text-purple-600 transition hover:scale-110">
            <Mail className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition">
            <div
              className="
                w-9 h-9 rounded-full
                bg-gradient-to-br from-purple-500 to-violet-600
                flex items-center justify-center
                text-white font-semibold
                shadow-md
              "
            >
              A
            </div>
            <span className="text-sm font-medium text-gray-800">
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* ================= SEARCH BAR ================= */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search your products"
            className="
              w-full rounded-lg border
              pl-10 pr-4 py-2
              text-sm
              bg-gray-50
              transition-all
              focus:bg-white
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              focus:shadow-md
            "
          />
        </div>
      </div>
    </div>
  );
}
