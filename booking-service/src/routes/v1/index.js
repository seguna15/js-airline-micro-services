import express from "express";
import bookingRoutes from "./booking.route.js"

const router = express.Router()

router.get("/booking", bookingRoutes);

export default router;