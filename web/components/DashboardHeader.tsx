"use client";

import { Search, Bell, Mail } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="bg-white border rounded-2xl px-6 py-5 shadow-sm">

      {/* ROW 1: TITLE + USER */}
      <div className="flex items-center justify-between">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold">
            Hello, Admin 👋
          </h1>
          <p className="text-sm text-gray-500">
            Selamat datang kembali di Mini Shopee Admin
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500 hover:text-purple-600 cursor-pointer" />
          <Mail className="w-5 h-5 text-gray-500 hover:text-purple-600 cursor-pointer" />

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>

      {/* ROW 2: SEARCH */}
      <div className="mt-4 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search your products"
            className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

    </div>
  );
}
