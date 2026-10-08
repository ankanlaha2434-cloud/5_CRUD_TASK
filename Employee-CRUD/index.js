const express = require("express");
const path = require("path");
require("dotenv").config();

const dbcon = require("./src/config/dbcon");
const employeeRouter = require("./src/router/employee-router");

const app = express();


// Database connection
dbcon();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Uploaded images access
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);


// Employee routes
app.use("/api/employees", employeeRouter);


// Home route
app.get("/", (req, res) => {
    res.send("Employee Management API is running");
});


// Server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});