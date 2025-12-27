"use client";

import DashboardHeader from "@/components/DashboardHeader";
import SalesTrendChart from "@/components/SalesTrendChart";
import ProductViewsChart from "@/components/ProductViewsChart";
import OrdersTable from "@/components/OrdersTable";
import TopSoldItems from "@/components/TopSoldItems";

export default function DashboardPage() {
  const stats = [
    { title: "Total Customers", value: "2000+" },
    { title: "Total Products", value: "140+" },
    { title: "Total Orders", value: "1600+" },
    { title: "Total Sales", value: "2000+" },
  ];

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <DashboardHeader />

      {/* ================= STATS ================= */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.title}
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              <p className="text-sm text-gray-500">{s.title}</p>
              <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHARTS ================= */}
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* SALES TREND */}
          <div className="xl:col-span-2 bg-white border rounded-xl p-5 shadow-sm">
            <SalesTrendChart />
          </div>

          {/* PRODUCT VIEWS */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <ProductViewsChart />
          </div>

        </div>
      </section>

      {/* ================= ORDERS ================= */}
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* ORDERS TABLE */}
          <div className="xl:col-span-2 bg-white border rounded-xl p-5 shadow-sm">
            <OrdersTable />
          </div>

          {/* TOP SOLD */}
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <TopSoldItems />
          </div>

        </div>
      </section>

    </div>
  );
}
