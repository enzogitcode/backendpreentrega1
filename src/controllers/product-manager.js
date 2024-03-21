//importo fs
import { promises as fs } from 'fs'
//const fs = require("fs").promises;


class ProductManager {
    static ultId = 0
    constructor(path) {
        this.products = []
        this.path = path
    }

    readFile = async () => {
        try {
            const response = fs.readFile(this.path, "utf-8")
            const arrayProducts = JSON.parse(response)
            return arrayProducts;
        } catch (error) {
            console.log("error al leer el archivo", error)
        }
    }
    saveFile = async (arrayProducts) => {
        try {
            await fs.saveFile(this.path, JSON.stringify(arrayProducts, "utf-8", null, 2))
        } catch (error) {
            console.log("no se puede sobreescribir el archivo", error)
        }
    }
    async addProducts({ title, description, price, img, code, stock, category, thumbnails }) {
        try {
            const arrayProducts = await this.readFile();
            if (!title || !description || !price || !thumbnails || !code || !stock ||!category ) {
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
            await this.saveFile(arrayProductos);
        } catch (error) {
            console.log("Error al agregar producto", error);
            throw error;
        }
    }
    async getProducts() {
        const resp = await JSON.parse(fs.readFile(this.path, "utf-8"));
        const array = JSON.parse(resp);
        return array;
    }

    async getProductsbyId(id) {
        if (this.products.find((product) => product.id == id)) {
            const foundedProduct = this.products.find((product) => product.id == id)
            this.saveFile(foundedProduct)
        }
        else {
            console.log("No existe un producto con ese ID")
        }
    }

    async updateProduct(id, updatedProduct) {
        try {
            const arrayProductos = await this.readFile();

            const index = arrayProductos.findIndex(item => item.id === id);

            if (index !== -1) {
                arrayProductos[index] = { ...arrayProductos[index], ...updatedProduct };
                await this.saveFile(arrayProductos);
                console.log("Producto actualizado");
            } else {
                console.log("No se encontró el producto");
            }
        } catch (error) {
            console.log("Error al actualizar el producto", error);
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const arrayProductos = await this.readFile();

            const index = arrayProductos.findIndex(item => item.id === id);

            if (index !== -1) {
                arrayProductos.splice(index, 1);
                await this.saveFile(arrayProductos);
                console.log("Producto eliminado");
            } else {
                console.log("No se encontró el producto");
            }
        } catch (error) {
            console.log("Error al eliminar el producto", error);
            throw error;
        }
    }

}

//module.exports = ProductManager;
export default ProductManager;