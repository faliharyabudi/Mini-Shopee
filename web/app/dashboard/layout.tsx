export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-semibold mb-4">Produk</h1>
        {children}
      </div>
    </div>
  );
}
