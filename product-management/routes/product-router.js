const express = require("express");
const upload = require("../utils/upload");

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/product-controller");

const router = express.Router();


// CREATE PRODUCT
router.post("/products", upload.single("image"), createProduct);


// GET ALL PRODUCTS
router.get("/products", getAllProducts);


// GET PRODUCT BY ID
router.get("/products/:id", getProductById);


// UPDATE PRODUCT
router.put("/products/:id", updateProduct);


// DELETE PRODUCT
router.delete("/products/:id", deleteProduct);


module.exports = router;