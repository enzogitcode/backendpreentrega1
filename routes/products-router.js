import { Express, Router } from "express";
const router= express.Router ();

import ProductManager from "../src/controllers/product-manager";
const productManager= new ProductManager ('./src/models/products.json');


//export default products-Router;
