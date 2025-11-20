export default function ProductsLayout({ children }: { children: React.ReactNode }) {
return (
<div className="p-6">
<h1 className="text-2xl font-semibold mb-4">Manajemen Produk</h1>
{children}
</div>
);
}