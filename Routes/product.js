import express from "express"
import {createProduct, deleteProduct, getProducts, updateProduct} from "../controllers/product.js"

const router = express.Router()
router.get("/", getProducts)
router.post("/", createProduct)
router.get("/", updateProduct)
router.post("/", deleteProduct)

export default router