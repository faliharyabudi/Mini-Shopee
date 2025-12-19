"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "@/lib/products";

type Props = {
  params: {
    id: string;
  };
};

export default function EditProductPage({ params }: Props) {
  const router = useRouter();

  const product = products.find(
    (item) => item.id === Number(params.id)
  );

  const [name, setName] = useState(product?.name ?? "");
  const [price, setPrice] = useState(product?.price ?? 0);
  const [category, setCategory] = useState("Pria");
  const [status, setStatus] = useState("Tersedia");

  if (!product) {
    return <p className="text-red-500">Produk tidak ditemukan</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Produk berhasil diperbarui (dummy)");
    router.push("/dashboard/products");
  };

  return (
    <div className="max-w-2xl space-y-6">
      ...
    </div>
  );
}
