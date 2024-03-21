import express from 'express'
const cartsRouter = express.Router();
import CartManager from '../controllers/cart-manager.js';
const cartManager = new CartManager('./src/models/carts.json');
cartsRouter.post("/carts", async (req, res) => {
    try {
        const nuevoCarrito = await cartManager.crearCarrito();
        res.json(nuevoCarrito);
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor"
        });
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