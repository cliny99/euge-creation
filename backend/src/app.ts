import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/product";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// servir imágenes
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// rutas
app.use("/products", productRoutes);

export default app;