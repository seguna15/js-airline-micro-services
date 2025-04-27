import express from "express";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import FlightController from "../../controllers/flight.controller.js";
import { validateFlightRequest } from "../../middlewares/validate-flight.js";


const flightRoutes = express.Router()
const flightController = new FlightController();

flightRoutes
  .get("/health", catchAsyncError(flightController.healthInfo))
  .post(
    "/",
    validateFlightRequest,
    catchAsyncError(flightController.createFlight)
  )
  .get("/", catchAsyncError(flightController.getAlLFlights))




export default flightRoutes;