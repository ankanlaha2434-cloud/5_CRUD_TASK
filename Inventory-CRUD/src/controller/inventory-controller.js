const Inventory = require("../models/inventory-model");

// CREATE INVENTORY
const createInventory = async (req, res) => {
    try {
        const inventory = new Inventory({
            ...req.body,
            image: req.file ? req.file.filename : ""
        });

        const savedInventory = await inventory.save();

        res.status(201).json({
            success: true,
            message: "Inventory item created successfully",
            data: savedInventory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL INVENTORY
const getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find();

        res.status(200).json({
            success: true,
            count: inventories.length,
            data: inventories
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET INVENTORY BY ID
const getInventoryById = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id);

        if (!inventory) {
            return res.status(404).json({
                success: false,
                message: "Inventory item not found"
            });
        }

        res.status(200).json({
            success: true,
            data: inventory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// UPDATE INVENTORY
const updateInventory = async (req, res) => {
    try {
        const updateData = {
            ...req.body
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        const inventory = await Inventory.findByIdAndUpdate(
            req.params.id,
            updateData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!inventory) {
            return res.status(404).json({
                success: false,
                message: "Inventory item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Inventory item updated successfully",
            data: inventory
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// DELETE INVENTORY
const deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);

        if (!inventory) {
            return res.status(404).json({
                success: false,
                message: "Inventory item not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Inventory item deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createInventory,
    getInventories,
    getInventoryById,
    updateInventory,
    deleteInventory
};