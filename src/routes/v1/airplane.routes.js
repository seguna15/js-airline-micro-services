import express from "express";
import AirplaneController from "../../controllers/airplane.controller.js";
import { validateCreateRequest } from "../../middlewares/validate-airplane.js";


const airplaneRoutes = express.Router()
const airplaneController = new AirplaneController();

airplaneRoutes
  .get("/health", airplaneController.healthInfo)
  .post("/", validateCreateRequest, airplaneController.createAirplane)
  .get("/", airplaneController.getAirplanes)
  .get("/:id", airplaneController.getAirplane)



export default airplaneRoutes;