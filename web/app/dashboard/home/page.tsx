export default function DashboardHome() {
  const stats = [
    {
      title: "Total Pelanggan",
      value: "1.250",
    },
    {
      title: "Total Produk",
      value: "320",
    },
    {
      title: "Total Pesanan",
      value: "540",
    },
    {
      title: "Total Penjualan",
      value: "Rp 75.000.000",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Judul */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Ringkasan data Mini Shopee
        </p>
      </div>

      {/* Statistik Horizontal */}
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
    </div>
  );
}
