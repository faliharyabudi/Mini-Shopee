const express = require("express");
const app = express();

const productRoutes = require("./routes/productRoutes");

app.get("/", (req, res) => {
  res.json({ message: "API Minishop" });
});

app.use("/api/products", productRoutes);

app.listen(3001, () => {
  console.log("API jalan di http://localhost:3001");
});
