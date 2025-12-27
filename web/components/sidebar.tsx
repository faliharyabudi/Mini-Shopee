"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Layers,
} from "lucide-react";

const menus = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Produk", href: "/dashboard/products", icon: Package },
  { name: "Pesanan", href: "/dashboard/orders", icon: ShoppingCart },
  { name: "Kategori", href: "/dashboard/categories", icon: Layers },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r flex flex-col shadow-sm">
      
      {/* LOGO */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-bold text-purple-600">
          Mini Shopee Admin
        </h1>
      </div>

      {/* MENU */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menus.map((menu) => {
          const isActive =
            pathname === menu.href ||
            pathname.startsWith(menu.href + "/");

          const Icon = menu.icon;

          return (
            <Link
              key={menu.name}
              href={menu.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon className="w-5 h-5" />
              {menu.name}
            </Link>
          );
        })}
      </nav>

      {/* USER */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
