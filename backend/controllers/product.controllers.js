import Product from "../models/product.models.js";
import mongoose from "mongoose";

// Get all products:
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Successfully fetched the products",
      products: products,
    });
  } catch (error) {
    res.status(400).json({ message: "Cannot get products" });
  }
};

// Get a single product:
export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product fetched successfully",
      product: {
        ID: product._id,
        Name: product.Name,
        Price: product.Price,
        Image: product.Image,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// Create a new product:
export const createProduct = async (req, res) => {
  const { Name, Price, Image } = req.body;

  if (!Name || !Price || !Image) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const newProduct = await Product.create({
      Name,
      Price,
      Image,
    });

    res.status(201).json({
      message: "Successfully created the product",
      newProduct: {
        Id: newProduct._id,
        Name: newProduct.Name,
        Price: newProduct.Price,
        Image: newProduct.Image,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Cannot create product", error });
  }
};

// update an existing product:
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Prevent empty body updates
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No fields provided for update",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      {
        new: true,
      },
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

// Delete a product:
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const deletedProduct = await Product.findByIdAndDelete(id);

  if (!deletedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct,
  });
};
