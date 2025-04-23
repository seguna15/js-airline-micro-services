import express from "express";
import { healthInfo } from "../../controllers/index.js";


const router = express.Router()

router.get("/health", healthInfo)

export default router;