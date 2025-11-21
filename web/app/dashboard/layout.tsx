"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const activeMenu: "home" | "produk" | "cart" | "profile" =
    pathname === "/" ? "home" :
    pathname.startsWith("/dashboard") ? "produk" :
    pathname.startsWith("/cart") ? "cart" :
    pathname.startsWith("/profile") ? "profile" :
    "home";

  return (
    <div className="relative pb-20 bg-gray-50 min-h-screen">

      {/* MAIN CONTENT */}
      <div className="p-6 max-w-6xl mx-auto">
        <p className="text-sm text-gray-500 mb-2">Beranda / Produk</p>
        <h1 className="text-xl font-semibold mb-4">Produk</h1>
        {children}
      </div>

      {/* BOTTOM NAVIGATION */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-6 flex justify-between items-center z-50 rounded-t-2xl">

        {/* HOME */}
        <Link
          href="/"
          className={`flex flex-col items-center transition ${
            activeMenu === "home"
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-xl">🏠</span>
          <p className="text-[11px] mt-1">Home</p>
        </Link>

        {/* PRODUK */}
        <Link
          href="/dashboard"
          className={`flex flex-col items-center transition ${
            activeMenu === "produk"
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-xl">🛍️</span>
          <p className="text-[11px] mt-1">Produk</p>
        </Link>

        {/* CART */}
        <Link
          href="/cart"
          className={`flex flex-col items-center transition ${
            activeMenu === "cart"
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-xl">🛒</span>
          <p className="text-[11px] mt-1">Keranjang</p>
        </Link>

        {/* PROFILE */}
        <Link
          href="/profile"
          className={`flex flex-col items-center transition ${
            activeMenu === "profile"
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          }`}
        >
          <span className="text-xl">👤</span>
          <p className="text-[11px] mt-1">Profil</p>
        </Link>

      </nav>
    </div>
  );
}
