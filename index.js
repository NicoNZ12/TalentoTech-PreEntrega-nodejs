import { showProducts, createProduct, deleteProduct } from "./controllers/productController.js";

const args = process.argv.slice(2);

export const [method, resource, ...argumentos] = args

console.log("Welcome to Nico's Store")
    console.log("\t-- Menu --")
    console.log(`
    1) npm start GET products
    2) npm start GET products id
    3) npm start POST products title price category
    4) npm start DELETE id
    `)

const main = () => {
    switch(method){
        case 'GET':
            showProducts();
            break;
        case 'POST':
            createProduct()
            break;
        case 'DELETE':
            deleteProduct()
            break;
        default:
            console.log("Run one of the scripts in the console.")
    }
}

main()