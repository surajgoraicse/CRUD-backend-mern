import 'dotenv/config'
import app from './app.js';
import connectDB from './db/db.js';
import handleErrorMiddleware from "./middlewares/error.middleware.js"


connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("express app error : ", err);
            throw "express app error "
        })

        app.listen(process.env.PORT || 4000, () => {
            console.log("server is listening at port : ", process.env.PORT || 4000);
        })
    })



// creating product router
// import productRouter from "./routers/product.route.js"
// app.use("/api/product", productRouter)


