import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authrouter from "./api/routes/auth.routes.js";
import organizationRouter from "./api/routes/organization.routes.js";
import productRouter from "./api/routes/product.routes.js";

const app = express();

//  config :
dotenv.config();

//  middlewares:
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

//  routes:
app.use("/api/auth", authrouter);
app.use("/api/organization", organizationRouter);
app.use("/api/product", productRouter);

export default app;
