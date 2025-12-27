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

exports.getAllProducts = (req, res) => {
  res.json({
    success: true,
    data: products,
  });
};
