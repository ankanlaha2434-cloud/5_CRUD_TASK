const express = require("express");
const router = express.Router();

const upload = require("../utils/upload");

const {
    createInventory,
    getInventories,
    getInventoryById,
    updateInventory,
    deleteInventory
} = require("../controller/inventory-controller");


// CREATE INVENTORY
router.post(
    "/",
    upload.single("image"),
    createInventory
);


// GET ALL INVENTORY
router.get(
    "/",
    getInventories
);


// GET INVENTORY BY ID
router.get(
    "/:id",
    getInventoryById
);


// UPDATE INVENTORY
router.put(
    "/:id",
    upload.single("image"),
    updateInventory
);


// DELETE INVENTORY
router.delete(
    "/:id",
    deleteInventory
);


module.exports = router;