//importo fs
import { promises as fs } from 'fs'

class ProductManager {
    constructor() {
        this.path = './src/products.json'
    }
    
    writeProducts = async (product) => {
        let products= await fs.readFile (this.path, "utf-8")
        let productsParse= JSON.parse (products)
        console.log (productsParse)
    }
}

const manager= new ProductManager;

manager.writeProducts();

export default ProductManager;