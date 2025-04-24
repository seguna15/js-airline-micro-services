import express from "express";
import AirplaneController from "../../controllers/airplane.controller.js";
import { validateCreateRequest } from "../../middlewares/validate-airplane.js";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";


const airplaneRoutes = express.Router()
const airplaneController = new AirplaneController();

airplaneRoutes
  .get("/health", catchAsyncError(airplaneController.healthInfo))
  .get("/health", catchAsyncError(airplaneController.healthInfo))
  .post("/", validateCreateRequest, catchAsyncError(airplaneController.createAirplane))
  .get("/", catchAsyncError(airplaneController.getAirplanes))
  .get("/:id", catchAsyncError(airplaneController.getAirplane))
  .delete("/:id", catchAsyncError(airplaneController.destroyAirplane));



export default airplaneRoutes;