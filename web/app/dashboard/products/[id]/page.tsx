"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  // ⛔ JANGAN notFound
  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Produk tidak ditemukan</h1>
        <button
          onClick={() => router.push("/dashboard/products")}
          className="mt-4 border px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Detail Produk</h1>
        <p className="text-gray-500">Informasi produk</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-300 rounded-xl h-80" />

        <div className="bg-white border rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-semibold">{product.name}</h2>

          <p className="text-2xl font-bold">
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <p className="text-sm text-gray-500">
            Data produk masih dummy dan dapat dikembangkan menggunakan API.
          </p>

          <div className="flex gap-3">
            <Link
              href={`/dashboard/products/${product.id}/edit`}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm"
            >
              Edit Produk
            </Link>

            <Link
              href="/dashboard/products"
              className="px-4 py-2 border rounded-lg text-sm"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
