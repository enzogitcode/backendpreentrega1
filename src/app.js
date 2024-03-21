//import y const de Express
import express from 'express';
const app = express();
//PUERTO
const PUERTO = 8080;

//importo ProductManager
import ProductManager from './controllers/product-manager.js';

//trabajar con json
app.use (express.json ());
app.use (express.urlencoded ({extended: true}))


app.post ("/products", async (req, res)=> {
    newProduct= req.body 
})

app.listen (PUERTO, () => {
    console.log (`servidor express en Puerto ${PUERTO}`)
    app.get ("/api", productsRouter);
    app.get ("/api", cartsRouter);
})
app.get (PUERTO, (req, res) => {
res.send ({products})
})
app.get ("/", (req, res) => {
    res.send ('funciona')
})

//DOS RUTAS /PRODUCTS Y /CART
/* 
Para el manejo de productos, el
cual tendrá su router en
/api/products/ , configurar las
siguientes rutas:
✓
La ruta raíz GET / deberá
listar todos los productos de
la base.
✓
La ruta GET /:pid deberá traer
sólo el producto con el id
proporcionado */

