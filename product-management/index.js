const express = require("express");
const dotenv = require("dotenv");

const dbConnection = require("./config/dbcon");
const productRouter = require("./routes/product-router");

dotenv.config();

const app = express();

const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// DATABASE CONNECTION
dbConnection();


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ROUTER
app.use("/api", productRouter);


// HOME
app.get("/", (req, res) => {
    res.send("Product CRUD API is running");
});


// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});