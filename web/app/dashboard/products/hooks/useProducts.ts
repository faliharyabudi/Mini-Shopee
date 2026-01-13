import { useState } from "react";
import { products as initialProducts } from "@/lib/products";
import type { Product } from "@/lib/products";
import { useToast } from "@/components/ui/use-toast";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const { toast } = useToast();

  function addProduct(product: Product) {
    setProducts((prev) => [...prev, product]);

    toast({
      title: "Produk ditambahkan",
      description: `${product.name} berhasil ditambahkan`,
    });
  }

  function updateProduct(product: Product) {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p))
    );

    toast({
      title: "Produk diperbarui",
      description: `${product.name} berhasil diperbarui`,
    });
  }

  function deleteProduct(id: number) {
    setProducts((prev) => prev.filter((p) => p.id !== id));

    toast({
      title: "Produk dihapus",
      variant: "destructive",
    });
  }

  return { products, addProduct, updateProduct, deleteProduct };
}
