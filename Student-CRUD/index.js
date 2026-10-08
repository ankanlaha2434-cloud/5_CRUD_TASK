const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const dbcon = require("./src/config/dbcon");
const studentRouter = require("./src/router/student-router");

dotenv.config();

const app = express();


// DATABASE
dbcon();


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// STATIC UPLOAD FOLDER
app.use("/uploads", express.static("uploads"));


// HOME
app.get("/", (req, res) => {
    res.send("Student Management API is running...");
});


// STUDENT ROUTE
app.use("/api/students", studentRouter);


// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});