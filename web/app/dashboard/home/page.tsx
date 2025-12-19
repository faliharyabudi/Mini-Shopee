export default function DashboardHome() {
  const stats = [
    { title: "Total Pelanggan", value: "1.250" },
    { title: "Total Produk", value: "320" },
    { title: "Total Pesanan", value: "540" },
    { title: "Total Penjualan", value: "Rp 75.000.000" },
  ];

  return (
    <div className="space-y-8">
      {/* Judul Dashboard */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Ringkasan data Mini Shopee
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white border rounded-lg p-5"
          >
            <p className="text-sm text-gray-500">
              {item.title}
            </p>
            <h2 className="text-2xl font-bold mt-2">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Pesanan Terbaru */}
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4">
          Pesanan Terbaru
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-gray-500">
                <th className="py-2">ID Pesanan</th>
                <th className="py-2">Pelanggan</th>
                <th className="py-2">Produk</th>
                <th className="py-2">Status</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-2">#ORD001</td>
                <td className="py-2">Andi</td>
                <td className="py-2">Sepatu Sneakers</td>
                <td className="py-2 text-green-600">Selesai</td>
                <td className="py-2">Rp 350.000</td>
              </tr>

              <tr className="border-b">
                <td className="py-2">#ORD002</td>
                <td className="py-2">Budi</td>
                <td className="py-2">Tas Wanita</td>
                <td className="py-2 text-yellow-600">Diproses</td>
                <td className="py-2">Rp 500.000</td>
              </tr>

              <tr>
                <td className="py-2">#ORD003</td>
                <td className="py-2">Siti</td>
                <td className="py-2">Jam Tangan</td>
                <td className="py-2 text-red-600">Dibatalkan</td>
                <td className="py-2">Rp 750.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
