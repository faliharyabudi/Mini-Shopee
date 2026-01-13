"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { useProducts } from "./hooks/useProducts";
import ProductTable from "./components/ProductTable";
import ProductFormDialog from "./components/ProductFormDialog";

export default function ProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct } =
    useProducts();

  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  function handleSubmit(product: Product) {
    editingProduct ? updateProduct(product) : addProduct(product);
    setEditingProduct(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-sm text-gray-500">
            Kelola daftar produk Mini Shopee
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>+ Add Product</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductTable
            products={products}
            onEdit={(product) => {
              setEditingProduct(product);
              setOpen(true);
            }}
            onDelete={deleteProduct}
          />
        </CardContent>
      </Card>

      <ProductFormDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        initialData={editingProduct}
      />
    </div>
  );
}
