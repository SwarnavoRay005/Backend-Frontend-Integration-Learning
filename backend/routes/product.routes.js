import express from "express";
import { createProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from "../controllers/product.controllers.js";

const productRouter = express.Router();

// Get all products:
productRouter.get("/",getProducts)

// Get a single product:
productRouter.get("/:id",getSingleProduct)

// Create a new product:
productRouter.post("/create",createProduct)

// update a product:
productRouter.patch("/update/:id",updateProduct)

// delete a product:
productRouter.delete("/delete/:id",deleteProduct)

export default productRouter;