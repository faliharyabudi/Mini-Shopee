export default function TopSoldItems() {
  const items = [
    { name: "Jeans", percent: 75 },
    { name: "Jacket", percent: 90 },
    { name: "Sweater", percent: 80 },
    { name: "T-Shirt", percent: 60 },
    { name: "Cap", percent: 50 },
  ];

  return (
    <div className="bg-white border rounded-xl p-5">
      <h3 className="font-semibold mb-4">Top Sold Items</h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-purple-500 rounded"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
