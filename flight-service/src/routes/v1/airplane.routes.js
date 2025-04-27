import express from "express";
import AirplaneController from "../../controllers/airplane.controller.js";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import { validateAirplaneRequest } from "../../middlewares/validate-airplane.js";


const airplaneRoutes = express.Router()
const airplaneController = new AirplaneController();

airplaneRoutes
  .get("/health", catchAsyncError(airplaneController.healthInfo))
  .post("/", validateAirplaneRequest, catchAsyncError(airplaneController.createAirplane))
  .get("/", catchAsyncError(airplaneController.getAirplanes))
  .get("/:id", catchAsyncError(airplaneController.getAirplane))
  .delete("/:id", catchAsyncError(airplaneController.destroyAirplane))
  .put("/:id", validateAirplaneRequest, catchAsyncError(airplaneController.updateAirplane));



export default airplaneRoutes;