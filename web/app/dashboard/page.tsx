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
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <DashboardHeader />

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white border rounded-xl p-5"
          >
            <p className="text-sm text-gray-500">{s.title}</p>
            <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
          </div>
        ))}
      </div>

      {/* ================= CHART ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesTrendChart />
        </div>
        <ProductViewsChart />
      </div>

      {/* ================= ORDERS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <TopSoldItems />
      </div>

    </div>
  );
}
