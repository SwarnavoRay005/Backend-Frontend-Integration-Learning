import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    Price: {
      type: Number,
      required: [true, "Please enter product price"],
    },
    Image: {
      type: String,
      required: [true, "Please enter product image"],
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("product", productSchema);

export default Product;
