const Student = require("../models/student-model");

// CREATE STUDENT
const createStudent = async (req, res) => {

    try {

        const studentData = {
            ...req.body
        };

        if (req.file) {
            studentData.profileImage = req.file.filename;
        }

        const student = await Student.create(studentData);

        res.status(201).json({
            success: true,
            message: "Student added successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// GET ALL STUDENTS
const getStudents = async (req, res) => {

    try {

        const students = await Student.find();

        res.status(200).json({
            success: true,
            count: students.length,
            data: students
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// GET STUDENT BY ID
const getStudentById = async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// UPDATE STUDENT
const updateStudent = async (req, res) => {

    try {

        const updateData = {
            ...req.body
        };

        if (req.file) {
            updateData.profileImage = req.file.filename;
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// DELETE STUDENT
const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};