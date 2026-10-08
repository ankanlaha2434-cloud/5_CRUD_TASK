const express = require("express");
const path = require("path");
require("dotenv").config();

const dbcon = require("./src/config/dbcon");
const inventoryRouter = require("./src/router/inventory-router");

const app = express();


// Database connection
dbcon();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Uploaded images
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);


// Inventory routes
app.use("/api/inventory", inventoryRouter);


// Home route
app.get("/", (req, res) => {
    res.send("Inventory Management API is running");
});


// Server
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});