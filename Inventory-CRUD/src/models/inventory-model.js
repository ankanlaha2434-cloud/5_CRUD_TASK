const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },

        sku: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        supplier: {
            type: String,
            required: true
        },

        purchasePrice: {
            type: Number,
            required: true
        },

        sellingPrice: {
            type: Number,
            required: true
        },

        quantity: {
            type: Number,
            required: true
        },

        minimumStock: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            default: ""
        },

        warehouseLocation: {
            type: String,
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

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;