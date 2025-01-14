import { Product } from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js"



// create product
const createProduct = asyncHandler(async (req, res) => {
    console.log("body data ", req.body);
    const product = await Product.create(req.body)
    res.status(200).json(product)
})



// read all products
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    console.log(products);
    res.status(200).json(new ApiResponse(200 , products , "product fetched successfully"))
}
)




// read a doucument by taking id from params
const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    console.log(product);
    res.status(200).json( new ApiResponse(200 , product , "product fetched successfully") )
})



// update a product 
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params
    const newProduct = req.body
    const product = await Product.findByIdAndUpdate(id, newProduct)
    const updatedProduct = await Product.findById(id)
    // console.log("Data update successfully : ", new ApiResponse(200 , updatedProduct , "product updated successfully"));
    return res.status(200).json(new ApiResponse(200 , updatedProduct , "product updated successfully"))
})


// delete a product 
const deleteProduct = asyncHandler(async (req, res) => {
    const response = await Product.findByIdAndDelete(req.params.id)
    const check = await Product.findById(req.params.id)
    if (!check) {
        console.log("deleted successfull : ", response);
        return res.status(200).json(response)
    } else {
        return res.status(200).json(new ApiResponse(200 , response , "Product deleted successfully"))
    }
})

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct }