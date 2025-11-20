export default function ProductsPage() {
  return (
    <div>
      {/* Grid produk */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder produk */}
        <div className="border rounded-lg p-4 text-center text-gray-500">
          Belum ada produk
        </div>
      </div>
    </div>
  );
}
