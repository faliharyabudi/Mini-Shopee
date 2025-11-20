export default function ProductsPage() {
  return (
    <div>
      {/* Grid produk */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Placeholder produk dummy */}
        <div className="border rounded-lg p-4 text-center text-gray-500">
          Produk 1 
        </div>

        <div className="border rounded-lg p-4 text-center text-gray-500">
          Produk 2 
        </div>

        <div className="border rounded-lg p-4 text-center text-gray-500">
          Produk 3 
        </div>

      </div>
    </div>
  );
}
