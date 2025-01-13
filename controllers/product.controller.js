import { Product } from "../models/product.model.js";



// create document 
const createProduct = async (req, res) => {
    try {
        console.log("body data ", req.body);
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



// read all documents
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        console.log(products);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



//  read a doucument using it's id (taking id from body)
// const getOneProduct = async (req, res) => {
//     try {
//         const product = await Product.findById(req.body.id)
//         console.log("product  : ", product);
//         res.status(200).json({ statusCode: 200, data: product, message: "success" })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



// read a doucument by taking id from params
const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        console.log(product);
        res.status(200).json({ statusCode: 200, data: product, message: "success" })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}



// update a product 
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const newProduct = req.body
        const product = await Product.findByIdAndUpdate(id, newProduct)
        console.log("Data update successfully : ", await Product.findById(id));
        return res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// make a patch update 
// const updateProduct = async (req, res) => {
//     try {
//         const { id } = req.params
//         const newProduct = req.body
//         const product = await Product.findByIdAndUpdate(id, newProduct)
//         console.log("Data update successfully : ", await Product.findById(id));
//         return res.status(200).json({ product })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// }



// delete a product 
const deleteProduct = async (req, res) => {
    try {
        const response = await Product.findByIdAndDelete(req.params.id)
        const check = await Product.findById(req.params.id)
        if (!check) {
            console.log("deleted successfull : ", response);
            return res.status(200).json(response)
        } else {
            return res.status(200).json(response, { message: "failed to delete" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export { createProduct , getProducts , getProduct , updateProduct , deleteProduct }