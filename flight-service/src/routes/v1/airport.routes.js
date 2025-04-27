import express from "express";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import AirportController from "../../controllers/airport.controller.js";
import { validateAirportRequest } from "../../middlewares/validate-airport.js";

const airportRoutes = express.Router()
const airportController = new AirportController();

airportRoutes
  .get("/health", catchAsyncError(airportController.healthInfo))
  .post("/", validateAirportRequest, catchAsyncError(airportController.createAirport))
  .get("/", catchAsyncError(airportController.getAirports))
  .get("/:id", catchAsyncError(airportController.getAirport))
  .delete("/:id", catchAsyncError(airportController.destroyAirport))
  .put("/:id", validateAirportRequest, catchAsyncError(airportController.updateAirport));



export default airportRoutes;