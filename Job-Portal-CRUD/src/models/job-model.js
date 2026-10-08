const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        companyName: {
            type: String,
            required: true
        },

        companyLogo: {
            type: String,
            default: ""
        },

        location: {
            type: String,
            required: true
        },

        salary: {
            type: String,
            required: true
        },

        experience: {
            type: String,
            required: true
        },

        employmentType: {
            type: String,
            required: true
        },

        skills: {
            type: String,
            required: true
        },

        qualification: {
            type: String,
            required: true
        },

        applicationDeadline: {
            type: Date,
            required: true
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

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;