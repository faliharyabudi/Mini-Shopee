import "dotenv/config";
import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API Mini Shop jalan");
});

app.listen(3001, () => {
  console.log("API jalan di http://localhost:3001");
});
