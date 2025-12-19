"use client";

import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  if (!product) notFound();

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
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">
              Edit Produk
            </button>
            <Link
              href="/dashboard/products"
              className="px-4 py-2 border rounded-lg"
            >
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
