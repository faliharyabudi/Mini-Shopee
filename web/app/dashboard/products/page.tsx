import { Button } from "@/components/ui/button";
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,
} from "@/components/ui/table";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Dior",
      price: "Rp 499.000",
      stock: 20,
    },
    {
      id: 2,
      name: "Reebok",
      price: "Rp 699.000",
      stock: 50,
    },
    {
      id: 3,
      name: "Supreme",
      price: "Rp 620.000",
      stock: 15,
    },
  ];

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>

        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
          + Add Product
        </button>
      </div>

      {/* CONTENT */}
      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead className="text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    {product.name}
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button size="sm" variant="secondary">
                      Edit
                    </Button>
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
