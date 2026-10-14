import express from "express";

import { upload } from "../middlewares/multer.js";
import { createProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", upload.array("images", 5), createProduct);

export default router;
