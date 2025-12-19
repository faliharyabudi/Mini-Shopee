"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function DashboardHome() {
  const stats = [
    { title: "Total Pelanggan", value: "1.250" },
    { title: "Total Produk", value: "320" },
    { title: "Total Pesanan", value: "540" },
    { title: "Total Penjualan", value: "Rp 75.000.000" },
  ];

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
    datasets: [
      {
        label: "Tahun Ini",
        data: [20, 25, 22, 30, 35, 40, 38, 45, 50, 48, 52, 55],
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        tension: 0.4,
      },
      {
        label: "Tahun Lalu",
        data: [10, 15, 12, 20, 25, 30, 28, 32, 35, 30, 28, 32],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-8">
      {/* Judul */}
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

      {/* Grafik Penjualan */}
      <div className="bg-white border rounded-lg p-5">
        <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
