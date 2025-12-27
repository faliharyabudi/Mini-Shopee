const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Minishop" });
});

app.listen(3001, () => {
  console.log("API jalan di http://localhost:3001");
});
