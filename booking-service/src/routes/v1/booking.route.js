import express from "express";
import BookingController from "../../controllers/booking.controller.js";

const bookingController = new BookingController();

const router = express.Router()

router.get("/health", bookingController.healthCheck)

export default router; 
