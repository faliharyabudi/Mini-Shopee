const express = require("express");
const app = express();

// dummy data produk
const products = [
  {
    id: 1,
    name: "Kaos Polos Hitam",
    price: 75000,
    stock: 20,
  },
  {
    id: 2,
    name: "Hoodie Oversize",
    price: 150000,
    stock: 10,
  },
];

// endpoint root
app.get("/", (req, res) => {
  res.json({ message: "API Minishop" });
});

// endpoint products
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  });
});

app.listen(3001, () => {
  console.log("API jalan di http://localhost:3001");
});
