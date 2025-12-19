"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProductViewsChart() {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "This Week",
        data: [8, 10, 6, 9, 12, 11, 14],
        backgroundColor: "#8b5cf6",
        borderRadius: 6,
      },
      {
        label: "Last Week",
        data: [6, 7, 5, 8, 9, 8, 10],
        backgroundColor: "#ef4444",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">Product Views</h3>
      <Bar data={data} />
    </div>
  );
}
