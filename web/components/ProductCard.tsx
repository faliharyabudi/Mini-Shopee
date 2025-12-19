"use client";

import Link from "next/link";

type Props = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ id, name, price }: Props) {
  return (
    <div className="bg-white border rounded-xl p-4 space-y-3">
      <div className="relative bg-gray-300 h-40 rounded-lg">
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          Tersedia
        </span>
      </div>

      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </p>
      </div>

      <Link
        href={`/dashboard/products/${id}`}
        className="block w-full text-center border rounded-lg py-2 text-sm hover:bg-gray-100"
      >
        Lihat Detail
      </Link>
    </div>
  );
}
