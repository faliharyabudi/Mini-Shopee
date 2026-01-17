import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient({
  accelerateUrl: "postgresql://postgres:050422@localhost:5432/mini_shopee",
});

// GET
router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal ambil produk" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        stock: Number(stock),
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal tambah produk" });
  }
});

export default router;
