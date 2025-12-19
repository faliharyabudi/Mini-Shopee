import Link from "next/link";

export default function Sidebar() {
  const menuAdmin = [
    { label: "Dashboard", href: "/dashboard/home" },
    { label: "Produk", href: "/dashboard/products" },
    { label: "Pesanan", href: "/dashboard/orders" },
    { label: "Kategori", href: "/dashboard/categories" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-4">
      <h1 className="text-xl font-bold mb-6">
        Mini Shopee Admin
      </h1>

      <nav className="flex flex-col gap-2">
        {menuAdmin.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
