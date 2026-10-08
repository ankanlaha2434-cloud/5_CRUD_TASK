const express = require("express");
const path = require("path");
require("dotenv").config();

const dbcon = require("./src/config/dbcon");
const jobRouter = require("./src/router/job-router");

const app = express();


// Database
dbcon();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Uploaded company logos
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);


// Job routes
app.use("/api/jobs", jobRouter);


// Home
app.get("/", (req, res) => {
    res.send("Job Portal Management API is running");
});


// Server
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});