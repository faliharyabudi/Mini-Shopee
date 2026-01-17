"use client";

import type { Product } from "@/lib/products";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-purple-50">
          <TableHead>Gambar</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Harga</TableHead>
          <TableHead>Stok</TableHead>
          <TableHead className="text-right">Aksi</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center text-gray-500">
              Belum ada produk
            </TableCell>
          </TableRow>
        ) : (
          products.map((product) => (
            <TableRow
              key={product.id}
              className="hover:bg-purple-50 transition"
            >
              {/* IMAGE */}
              <TableCell>
                <img
                  src={product.image || "/products/images/placeholder.png"}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-md border"
                />
              </TableCell>

              {/* NAME */}
              <TableCell className="font-medium">
                {product.name}
              </TableCell>

              {/* PRICE */}
              <TableCell>
                Rp {Number(product.price).toLocaleString("id-ID")}
              </TableCell>

              {/* STOCK */}
              <TableCell>
                <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                  {product.stock}
                </span>
              </TableCell>

              {/* ACTION */}
              <TableCell className="text-right space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="destructive">
                      Hapus
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Hapus produk ini?
                      </AlertDialogTitle>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Batal</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(product.id)}
                      >
                        Hapus
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
 