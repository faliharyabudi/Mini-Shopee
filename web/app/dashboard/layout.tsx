export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">Beranda / Produk</p>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <h1 className="text-xl font-semibold mb-4">Produk</h1>

        {children}
      </div>
    </div>
  );
}
