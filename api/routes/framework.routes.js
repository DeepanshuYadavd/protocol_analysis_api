import express from "express";

import { isAdmin, protect } from "../middlewares/auth.middleware.js";
import {
  createFrameWork,
  getFramework,
} from "../controllers/framewors.cotroller.js";

const router = express.Router();
router.post("/create", protect, isAdmin, createFrameWork);
router.get("/get-frameworks", getFramework);

export default router;
