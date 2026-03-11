import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.config.js";
import productRouter from "./routes/product.routes.js";
import cors from "cors";

// Middlewares:
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);

app.use(express.json());

// Setting the routes:
app.use("/api/products", productRouter);

// Connect database and start server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
