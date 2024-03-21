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

productsRouter.get("/products/:pid", async (req, res) => {

    const id = req.params.pid;

    try {
        const product = await productManager.getProductbyId(parseInt(id));
        if (!product) {
            return res.json({
                error: "Producto no encontrado"
            });
        }
        res.json(product);
    } catch (error) {
        res.status.json ("error al obtener el producto")
        console.error("Error", error);
        throw error;

    }
})


export default productsRouter;