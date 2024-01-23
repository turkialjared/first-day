const express = require("express");
const app = express();
const accountsRoutes = require("./api/accounts/routes");
const connectdb = require("./database");
const morgan = require("morgan");
app.use(express.json());
const PORT = 8000;
// const products = require("./products");
app.use(morgan("dev"));
app.use("/api/accounts", accountsRoutes);

// not found funcation
app.use((req, res, next) => {
  return res.status(404).json({ massage: "this path is not found " });
});

// error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.massage || "server error");
});

connectdb();
app.listen(PORT, () => {
  console.log(PORT);
});
