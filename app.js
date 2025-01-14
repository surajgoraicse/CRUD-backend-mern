import express from "express"
import handleErrorMiddleware from "./middlewares/error.middleware.js"

const app = express()

// middleware configuration to accept payload
app.use(express.json({
    limit: "16kb",
}))
app.use(express.urlencoded({
    extended: false, limit: "16kb"
}))


import router from "./routers/product.route.js"
app.use("/api/product" , router)


// error handling middleware
app.use(handleErrorMiddleware)

export default app