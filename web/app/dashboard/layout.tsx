export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">

        {/* BREADCRUMB */}
        <p className="text-xs text-gray-400 mb-3">
          Beranda / <span className="text-gray-600">Produk</span>
        </p>

        {/* SEARCH BAR */}
        <div className="mb-5">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm focus:ring-1 focus:ring-gray-300 outline-none"
          />
        </div>

        {/* TITLE + BUTTON */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-semibold text-gray-900">Produk</h1>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 active:scale-95 transition">
            Tambah Produk
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
