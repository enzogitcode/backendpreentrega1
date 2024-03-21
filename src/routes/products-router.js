import { Express, Router } from "express";
const router= express.Router ();

import ProductManager from "../controllers/product-manager";
const productManager= new ProductManager ('./src/models/products.json');

router.get ("/products", (req, res) => {
    try {
        
    } catch (error) {
        
    }
} )

module.exports= router