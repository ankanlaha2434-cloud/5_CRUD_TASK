const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        phone: {
            type: String,
            required: true
        },

        dateOfBirth: {
            type: Date,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        employeeId: {
            type: String,
            required: true,
            unique: true
        },

        designation: {
            type: String,
            required: true
        },

        department: {
            type: String,
            required: true
        },

        salary: {
            type: Number,
            required: true
        },

        joiningDate: {
            type: Date,
            required: true
        },

        address: {
            type: String,
            required: true
        },

        profileImage: {
            type: String,
            default: ""
        },

        status: {
            type: String,
            default: "Active"
        }
    },
    {
        timestamps: true
    }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;