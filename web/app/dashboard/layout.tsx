export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative pb-20 bg-gray-50">

        {/* MAIN CONTENT */}
        <div className="p-6 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-2">Beranda / Produk</p>

          {/* Judul */}
          <h1 className="text-xl font-semibold mb-4">Produk</h1>

          {children}
        </div>

        {/* --- BOTTOM NAVIGATION --- */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-2 px-6 flex justify-between items-center z-50 rounded-t-2xl">

          {/* HOME */}
          <div className="flex flex-col items-center text-gray-500 hover:text-black transition cursor-pointer">
            <span className="text-xl">🏠</span>
            <p className="text-[11px] mt-1">Home</p>
          </div>

          {/* PRODUCTS */}
          <div className="flex flex-col items-center text-gray-900 font-semibold cursor-pointer">
            <span className="text-xl">🛍️</span>
            <p className="text-[11px] mt-1">Produk</p>
          </div>

          {/* CART */}
          <div className="flex flex-col items-center text-gray-500 hover:text-black transition cursor-pointer">
            <span className="text-xl">🛒</span>
            <p className="text-[11px] mt-1">Keranjang</p>
          </div>

          {/* PROFILE */}
          <div className="flex flex-col items-center text-gray-500 hover:text-black transition cursor-pointer">
            <span className="text-xl">👤</span>
            <p className="text-[11px] mt-1">Profil</p>
          </div>
        </nav>
      </body>
    </html>
  );
}
