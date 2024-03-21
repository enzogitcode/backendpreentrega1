import express from 'express'
import { promises as fs } from 'fs'
const cartsRouter = express.Router();
import CartManager from '../controllers/cart-manager.js';
const cartManager = new CartManager('./src/models/carts.json');
cartsRouter.post("/carts", async (req, res) => {
    try {
        const nvoCart = await cartManager.createCarts();
        res.json(cart)
    } catch (error) {
        res.status(500).json({ error: "error interno del servidor" })
    }
})

cartsRouter.get("/carts/:cid", async (req, res) => {
    const cartId = parseInt(req.params.cid)
    try {
        const nvoCart = await cartManager.getCartbyId(cartId);
        res.json(nvoCart.products)
    } catch (error) {
        res.status(500).json({ error: "error interno del servidor GET" })

    }
})



export default cartsRouter