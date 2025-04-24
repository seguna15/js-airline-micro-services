import express from "express";
import airplaneRoutes from "./airplane.routes.js";



const router = express.Router()

router.use("/airplane", airplaneRoutes)

export default router;