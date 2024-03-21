//importo fs
import { promises as fs } from 'fs'

class ProductManager {
    constructor(path) {
        this.products = []
        this.path = path
    }
    static ultId = 0

    readFile = async (product) => {
        try {
            const response = fs.readFile(this.path, "utf-8")
            const arrayProducts = JSON.parse(response)
            return arrayProducts;
        } catch (error) {
            console.log("error al leer el archivo", error)
        }
    }
    writeFile = async (arrayProducts) => {
        try {
            await fs.writeFile(this.path, JSON.stringify(arrayProducts, "utf-8", null, 2))
        } catch (error) {
            console.log("no se puede sobreescribir el archivo", error)
        }
    }
    async addProducts() {
        try {
            const arrayProducts = await this.readFile();
            if (!title || !description || !price || !thumbnail || !code || !stock) {
                console.log("Todos los campos son obligatorios");
                return;
            }
            if (this.products.some((product) => product.code === code)) {
                console.log("El código debe ser único")
                return;
            }
            const newProduct = {
                id: ++ProductManager.id,
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                category,
                status: true,
                thumbnails: thumbnails || []
            }
            this.products.push(newProduct)

            if (arrayProductos.length > 0) {
                ProductManager.ultId = arrayProductos.reduce((maxId, product) => Math.max(maxId, product.id), 0);
            }

            newProduct.id = ++ProductManager.ultId;

            arrayProducts.push(newProduct);
            await this.writeFile(arrayProductos);
        } catch (error) {
            console.log("Error al agregar producto", error);
            throw error;
        }
    }
    async getProducts () {
        const resp= await JSON.parse(fs.readFile(this.path, "utf-8"));
        const array = JSON.parse(resp);
        return array;
    }

    async getProductsbyId() {
if (this.products.find((product) => product.id == id)) {
            const foundedProduct = this.products.find((product) => product.id == id)
            this.writeFile (foundedProduct)
        }
        else {
            console.log("No existe un producto con ese ID")
        }
    }
    
    async updateProducts() {

    }
    async deleteProducts() {

    }
}

const manager = new ProductManager;

manager.writeProducts();

export default ProductManager;