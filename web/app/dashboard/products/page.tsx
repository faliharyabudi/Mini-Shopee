export default function ProductsPage() {
  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          + Add Product
        </button>
      </div>

      {/* CONTENT */}
      <div className="bg-white border rounded-lg p-6">
        <p className="text-gray-500">
          Belum ada produk
        </p>
      </div>

    </div>
  );
}
