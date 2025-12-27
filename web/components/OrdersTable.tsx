export default function OrdersTable() {
  const orders = [
    {
      id: "#202394",
      name: "Rizki akbar",
      date: "1 Jan 24",
      price: "Tk 1200",
      status: "Completed",
    },
    {
      id: "#202395",
      name: "fadilah",
      date: "2 Jan 24",
      price: "Tk 1800",
      status: "Pending",
    },
    {
      id: "#202396",
      name: "yoga",
      date: "3 Jan 24",
      price: "Tk 500",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">All Orders</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Order ID</th>
            <th className="text-left py-2">Customer</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Price</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b last:border-0">
              <td className="py-2">{o.id}</td>
              <td>{o.name}</td>
              <td>{o.date}</td>
              <td>{o.price}</td>
              <td
                className={
                  o.status === "Completed"
                    ? "text-green-600"
                    : "text-orange-500"
                }
              >
                {o.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
