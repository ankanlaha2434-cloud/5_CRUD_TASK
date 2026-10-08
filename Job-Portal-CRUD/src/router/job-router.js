const express = require("express");
const router = express.Router();

const upload = require("../utils/upload");

const {
    createJob,
    getJobs,
    getJobById,
    updateJob,
    deleteJob
} = require("../controller/job-controller");


// CREATE JOB
router.post(
    "/",
    upload.single("companyLogo"),
    createJob
);


// GET ALL JOBS
router.get(
    "/",
    getJobs
);


// GET JOB BY ID
router.get(
    "/:id",
    getJobById
);


// UPDATE JOB
router.put(
    "/:id",
    upload.single("companyLogo"),
    updateJob
);


// DELETE JOB
router.delete(
    "/:id",
    deleteJob
);


module.exports = router;