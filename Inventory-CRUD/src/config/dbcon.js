const mongoose = require("mongoose");

const dbcon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed:", error.message);
    }
};

module.exports = dbcon;