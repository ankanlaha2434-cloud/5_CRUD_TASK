const express = require("express");

const router = express.Router();

const upload = require("../utils/upload");

const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controller/student-controller");


// CREATE
router.post(
    "/",
    upload.single("profileImage"),
    createStudent
);


// GET ALL
router.get(
    "/",
    getStudents
);


// GET BY ID
router.get(
    "/:id",
    getStudentById
);


// UPDATE
router.put(
    "/:id",
    upload.single("profileImage"),
    updateStudent
);


// DELETE
router.delete(
    "/:id",
    deleteStudent
);


module.exports = router;