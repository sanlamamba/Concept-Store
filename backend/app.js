const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const categoriesRoutes = require("./routes/categorie");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/users", userRoutes);
module.exports = app;
