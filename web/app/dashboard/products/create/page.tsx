"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("Pria");
  const [status, setStatus] = useState("Tersedia");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // simulasi submit
    alert("Produk berhasil ditambahkan (dummy)");
    router.push("/dashboard/products");
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tambah Produk</h1>
        <p className="text-gray-500">Tambahkan produk baru</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-6 space-y-5"
      >
        {/* Nama */}
        <div>
          <label className="text-sm font-medium">Nama Produk</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Harga */}
        <div>
          <label className="text-sm font-medium">Harga</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* Kategori */}
        <div>
          <label className="text-sm font-medium">Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
          >
            <option>Pria</option>
            <option>Wanita</option>
            <option>Aksesoris</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
          >
            <option>Tersedia</option>
            <option>Habis</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-lg text-sm"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}
