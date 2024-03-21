import express from "express"
const productsRouter = express.Router();

/* const express = require("express");
const router = express.Router();

const ProductManager = require("../controllers/product-manager.js");
const productManager = new ProductManager("./src/models/productos.json"); */
import ProductManager from "../controllers/product-manager.js";
const productManager = new ProductManager("./src/models/products.json");


productsRouter.get("/products", async (req, res) => {
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
            error: "error interno del servidor qwerty"
        })

    }
})


export default productsRouter;