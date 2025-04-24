import express from "express";
import { catchAsyncError } from "../../middlewares/catchAsyncError.js";
import CityController from "../../controllers/city.controller.js";
import { validateCityRequest } from "../../middlewares/validate-city.js";


const cityRoutes = express.Router()
const cityController = new CityController();

cityRoutes
  .get("/health", catchAsyncError(cityController.healthInfo))
  .post("/", validateCityRequest, catchAsyncError(cityController.createCity))
  .get("/", catchAsyncError(cityController.getCities))
  .get("/:id", catchAsyncError(cityController.getCity))
  .delete("/:id", catchAsyncError(cityController.destroyCity))
  .put("/:id", validateCityRequest, catchAsyncError(cityController.updateCity));



export default cityRoutes;