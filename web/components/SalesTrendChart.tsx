"use client";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function SalesTrendChart() {
  const data = {
    labels: [
      "January",
      "March",
      "May",
      "July",
      "September",
      "December",
    ],
    datasets: [
      {
        label: "Tahun Ini",
        data: [20, 30, 40, 50, 48, 55],
        borderColor: "#8b5cf6",
        backgroundColor: "#8b5cf6",
        tension: 0.4,
      },
      {
        label: "Tahun Lalu",
        data: [10, 20, 30, 35, 30, 20],
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">Sales Trend</h3>
      <Line data={data} />
    </div>
  );
}
