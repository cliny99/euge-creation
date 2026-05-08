import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import productRoutes from "./routes/product";

// Cargar variables de entorno ANTES de cualquier otra cosa
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

// servir imágenes
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// rutas
app.use("/products", productRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

export default app;