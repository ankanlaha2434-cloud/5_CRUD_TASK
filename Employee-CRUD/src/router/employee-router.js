const express = require("express");
const router = express.Router();

const upload = require("../utils/upload");

const {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require("../controller/employee-controller");


// CREATE EMPLOYEE
router.post(
    "/",
    upload.single("profileImage"),
    createEmployee
);


// GET ALL EMPLOYEES
router.get(
    "/",
    getEmployees
);


// GET EMPLOYEE BY ID
router.get(
    "/:id",
    getEmployeeById
);


// UPDATE EMPLOYEE
router.put(
    "/:id",
    upload.single("profileImage"),
    updateEmployee
);


// DELETE EMPLOYEE
router.delete(
    "/:id",
    deleteEmployee
);


module.exports = router;