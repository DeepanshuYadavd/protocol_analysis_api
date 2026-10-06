import express from "express";
import {
  createOrganization,
  getOrganization,
} from "../controllers/organizaton.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protect, createOrganization);
router.get("/get", protect, getOrganization);

export default router;
