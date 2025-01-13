import 'dotenv/config'
import app from './app.js';


import mongoose from "mongoose"
// connect db
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("database connected successfully : ");
    app.listen(process.env.PORT || 4000, () => {
        console.log("server is listening at host : ", process.env.PORT || 4000);
    })
}).catch((error) => {
    console.log("error connecting database : ", error);
})


// creating product router
import productRouter from "./routers/product.route.js"
app.use("/api/product", productRouter)

