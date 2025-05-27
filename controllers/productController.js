import productService from "../service/productService.js";
import { resource, argumentos } from "../index.js";

export const showProducts = () => {
    try{
        if(resource !== "products"){
            throw new Error("Not valid Resource. It must be 'products'.")
        }

        if(argumentos[0]){
            const product = productService.getProduct(argumentos[0])
            product.then(data => console.log(data))
            return

        }

        const products = productService.getProducts()
        products.then(data => console.log(data))
        return

    }catch(error){
        console.log({message: "Error getting the products", log: error.message})
    }
}

export const createProduct = () => {
    try{
        if(resource !== "products"){
            throw new Error("Not valid Resource. It must be 'products'.")
        }

        if(!argumentos[0] && !argumentos[1], !argumentos[2]){
            throw new Error("Arguments (title, price, category) are required.")
        }

        const [title, price, category] = argumentos

        const newProduct = {
            title: title,
            price: price,
            category: category
        }

        const product = productService.createProduct(newProduct)
        product.then(data => console.log(data))

    }catch(error){
        console.log({message: "Error adding a product", log: error.message})
    }
}

export const deleteProduct = () => {
    try{
        if(resource !== "products"){
            throw new Error("Not valid Resource. It must be 'products'.")
        }

        if(!argumentos[0]){
            throw new Error("Id is required to delete a product.")
        }

        const result = productService.deleteProduct(argumentos[0])

        result.then(data => console.log("Product deleted: ", {
            title: data.title, 
            price: data.price, 
            category: data.category
        }))

    }catch(error){
        console.log({message: "Error deleting a product", log: error.message})
    }
}