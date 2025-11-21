import Link from "next/link";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Detail Produk #{id}</h1>

      <p className="text-gray-600 mb-6">
        Informasi lengkap mengenai produk dengan ID: <strong>{id}</strong>.
      </p>

      <Link
        href="/dashboard/products"
        className="inline-block bg-black text-white px-4 py-2 rounded-lg"
      >
        ← Kembali ke Produk
      </Link>
    </div>
  );
}
