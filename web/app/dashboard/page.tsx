export default function ProductsPage() {
  return (
    <div>
      {/* Grid produk */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Card produk dummy */}
        <div className="border rounded-lg p-3">
          <div className="h-32 bg-gray-200 rounded mb-3"></div>
          <p className="text-sm font-medium">Kaos Polos Hitam</p>
          <p className="text-sm text-gray-600">Rp 50.000</p>
        </div>

        <div className="border rounded-lg p-3">
          <div className="h-32 bg-gray-200 rounded mb-3"></div>
          <p className="text-sm font-medium">Hoodie Premium</p>
          <p className="text-sm text-gray-600">Rp 120.000</p>
        </div>

        <div className="border rounded-lg p-3">
          <div className="h-32 bg-gray-200 rounded mb-3"></div>
          <p className="text-sm font-medium">Sweater Rajut</p>
          <p className="text-sm text-gray-600">Rp 85.000</p>
        </div>

      </div>
    </div>
  );
}
