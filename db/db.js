import mongoose from "mongoose";

const connectMongoDb = async (req, res) => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        
    } catch (error) {
        throw 
    }
}