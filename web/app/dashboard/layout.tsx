export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-3">
          Beranda / Produk
        </p>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full border rounded-lg px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Judul + Tombol */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Produk</h1>

          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 active:scale-95 transition">
            Tambah Produk
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
