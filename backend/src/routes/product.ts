import { Router } from "express";
import upload from "../middleware/upload";
import { createProduct } from "../controllers/productController";

const router = Router();

router.post("/", upload.single("image"), createProduct);

export default router;