"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/lib/products";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (product: Product) => void;
  initialData?: Product | null;
};

export default function ProductFormDialog({
  open,
  onClose,
  onSubmit,
  initialData,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        price: initialData.price,
        stock: String(initialData.stock),
      });
    }
  }, [initialData]);

  function handleSubmit() {
    if (!form.name || !form.price || !form.stock) return;

    onSubmit({
      id: initialData?.id ?? Date.now(),
      name: form.name,
      price: form.price,
      stock: Number(form.stock),
      image: initialData?.image ?? "", 
    });

    setForm({ name: "", price: "", stock: "" });
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Edit Product" : "Add Product"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Product Name</Label>
            <Input
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Price</Label>
            <Input
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: e.target.value })
              }
            />
          </div>

          <div>
            <Label>Stock</Label>
            <Input
              type="number"
              value={form.stock}
              onChange={(e) =>
                setForm({ ...form, stock: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
