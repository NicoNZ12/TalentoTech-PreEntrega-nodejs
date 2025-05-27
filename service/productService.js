const BASE_URL = "https://fakestoreapi.com/products"

class productService{

    static async getProducts(){
        const data = await fetch(BASE_URL)
        const results = await data.json();
        
        if(results.length === 0){
            return "Products Not Found"
        }

        const products = results.map(p => {
            return {
                title: p.title,
                price: p.price,
                category: p.category
            }
        })

        return products;

    }

    static async getProduct(id){
        const data = await fetch(`${BASE_URL}/${id}`)
        const results = await data.json();

        if(!results){
            return "Product Not Found"
        }

        const product = {
            title: results.title,
            price: results.price,
            category: results.category
        }

        return product;
    }

    static async createProduct({title, price, category}){
        const data = await fetch(BASE_URL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                price,
                category
            })
        })

        const results = data.json();
        return results
    }

    static async deleteProduct(id){
        const data = await fetch(`${BASE_URL}/${id}`,{
            method: "DELETE",
        })

        const result = data.json()

        return result;
    }

}

export default productService
