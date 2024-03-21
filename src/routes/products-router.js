import express from "express"
const router = express.Router();

import ProductManager from "../controllers/product-manager.js";
const productManager = new ProductManager('./src/models/products.json');
/* const express = require("express");
const router = express.Router();

const ProductManager = require("../controllers/product-manager.js");
const productManager = new ProductManager("./src/models/productos.json"); */


router.get("/products", async (req, res) => {
    try {
        const limit = req.query.limit;
        const products = await productManager.getProducts();
        if (limit) {
            res.json(products.slice(0, limit))
        }
        else {
            res.json(products)
        }
    } catch (error) {
        console.error("error en el servidor", error)
        res.status(500).json({
            error: "error interno del servidor"
        })

    }
})

//module.exports = router

export default router;