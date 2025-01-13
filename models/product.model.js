import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    quantity: {
        type: Number,
        required: [true ,"enter quantity"],
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: false
    }

}, { timestamps: true })


export const Product = mongoose.model("Product", productSchema)