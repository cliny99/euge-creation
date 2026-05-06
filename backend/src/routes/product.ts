import { Router } from "express";
import upload from "../middleware/upload";
import { createProduct } from "../controllers/productController";
import { getProducts } from "../controllers/productController";
const router = Router();
router.get("/", getProducts);
router.post("/", upload.single("image"), createProduct);

export default router;