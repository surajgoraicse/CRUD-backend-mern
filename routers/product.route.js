import  { Router } from "express"
import { createProduct, getProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = Router()

router.route("/create").post(createProduct)
router.route("/get-products").get(getProducts)
router.route("/get-product/:id").get(getProduct)
router.route("/update-product/:id").put(updateProduct)
router.route("/delete-product/:id").delete(deleteProduct)


export default router;
