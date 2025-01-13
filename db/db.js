import mongoose from "mongoose";
import "dotenv/config"
import {DB_NAME} from "../constants.js"

const connectMongoDb = async (req, res) => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Database connected successfully : " , connect.connection.host);
    } catch (error) {
        console.error("Database connection error " , error.message) 
        console.error("error object : " , error) 
        process.exit(1)
    }
}