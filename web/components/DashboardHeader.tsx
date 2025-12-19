"use client";

import { Bell, Mail } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="bg-white border rounded-xl px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* LEFT */}
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            Hello, Admin 👋
          </h1>
          <p className="text-sm text-gray-500">
            Selamat datang kembali di Mini Shopee Admin
          </p>

          {/* SEARCH */}
          <div className="mt-3 max-w-sm">
            <input
              type="text"
              placeholder="Search your products"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <Mail className="w-5 h-5 text-gray-600 cursor-pointer" />

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              A
            </div>
            <span className="text-sm font-medium">Admin</span>
          </div>
        </div>

      </div>
    </div>
  );
}
