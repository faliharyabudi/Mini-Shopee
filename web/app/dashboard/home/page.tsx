"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function DashboardHome() {
  /* ===== DATA PRODUK (SUMBER KONSISTEN) ===== */
  const products = [
    { id: 1, name: "Kaos Polos Hitam", price: 50000 },
    { id: 2, name: "Celana Jeans Biru", price: 150000 },
    { id: 3, name: "Hoodie Oversize Abu", price: 120000 },
    { id: 4, name: "Kemeja Kotak-Kotak", price: 90000 },
  ];

  /* ===== STATISTIK ===== */
  const stats = [
    { title: "Total Pelanggan", value: "1.250" },
    { title: "Total Produk", value: "320" },
    { title: "Total Pesanan", value: "540" },
    { title: "Total Penjualan", value: "Rp 75.000.000" },
  ];

  /* ===== SALES TREND ===== */
  const chartData = {
    labels: ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],
    datasets: [
      {
        label: "Tahun Ini",
        data: [20,25,22,30,35,40,38,45,50,48,52,55],
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
      {
        label: "Tahun Lalu",
        data: [10,15,12,20,25,30,28,32,35,30,28,32],
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.2)",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  /* ===== PRODUCT VIEWS ===== */
  const productViewsData = {
    labels: ["Min","Sen","Sel","Rab","Kam","Jum","Sab"],
    datasets: [
      {
        label: "Minggu Ini",
        data: [8,10,12,14,13,15,16],
        backgroundColor: "#8b5cf6",
        borderRadius: 6,
      },
      {
        label: "Minggu Lalu",
        data: [6,9,10,11,10,12,13],
        backgroundColor: "#ef4444",
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  /* ===== TOP SOLD ITEMS (NAMA DISAMAKAN) ===== */
  const topProducts = [
    { name: "Kaos Polos Hitam", value: 75 },
    { name: "Celana Jeans Biru", value: 60 },
    { name: "Hoodie Oversize Abu", value: 50 },
    { name: "Kemeja Kotak-Kotak", value: 40 },
  ];

  /* ===== RECENT ORDERS (NAMA DISAMAKAN) ===== */
  const orders = [
    {
      id: "#ORD001",
      customer: "Andi",
      product: "Kaos Polos Hitam",
      total: "Rp 50.000",
      status: "Selesai",
    },
    {
      id: "#ORD002",
      customer: "Budi",
      product: "Celana Jeans Biru",
      total: "Rp 150.000",
      status: "Diproses",
    },
    {
      id: "#ORD003",
      customer: "Citra",
      product: "Hoodie Oversize Abu",
      total: "Rp 120.000",
      status: "Dikirim",
    },
    {
      id: "#ORD004",
      customer: "Dewi",
      product: "Kemeja Kotak-Kotak",
      total: "Rp 90.000",
      status: "Selesai",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Ringkasan data Mini Shopee</p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white border rounded-lg p-5">
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Grafik */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white border rounded-lg p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
          <div className="h-72">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="bg-white border rounded-lg p-5">
          <h2 className="text-lg font-semibold mb-4">Product Views</h2>
          <div className="h-72">
            <Bar data={productViewsData} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Top Sold Items */}
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4">Top Sold Items</h2>
        <div className="space-y-4">
          {topProducts.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.name}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3">Order ID</th>
                <th className="text-left p-3">Customer</th>
                <th className="text-left p-3">Product</th>
                <th className="text-left p-3">Total</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3">{order.total}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
