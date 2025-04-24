import { StatusCodes } from "http-status-codes";
import AirplaneService from "../services/airplane.service.js";
import { Logger } from "../utils/logger.util.js";
import { successResponse } from "../utils/common/success-response.js";
import { errorResponse } from "../utils/common/error-response.js";

export default class AirplaneController {
  constructor() {
    this.airplaneService = new AirplaneService();
  }

  /**
   * @method : POST
   * @param :
   * @route : {api/v1/airplanes}
   */
  healthInfo = (req, res) => {
    Logger.info("API is healthy");
    successResponse.message = "API is healthy";
    return res.status(StatusCodes.OK).json(successResponse);
  };
  /**
   * @method : POST
   * @param : {modelNumber: 'airbus320', capacity: 200}
   * @route : {api/v1/airplanes}
   * @access: Protected
   */
  createAirplane = async (req, res, next) => {
    try {
      const airplane = await this.airplaneService.createAirplane({
        modelNumber: req.body.modelNumber,
        capacity: req.body.capacity,
      });
      Logger.info("Airplane created successfully");
      successResponse.data = airplane;
      successResponse.message = "Airplane created successfully";
      return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : GET
   * @param :
   * @route : {api/v1/airplanes}
   * @access: Protected
   */
  getAirplanes = async (req, res, next) => {
    try {
      const airplanes = await this.airplaneService.getAirplanes();
      Logger.info("Airplanes fetched successfully");
      successResponse.data = airplanes;
      successResponse.message = "Airplanes fetched successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : GET
   * @param :
   * @route : {api/v1/airplanes/:id}
   * @access: Protected
   */
  getAirplane = async (req, res, next) => {
    try {
      const airplane = await this.airplaneService.getAirplane(req.params.id);
      Logger.info("Airplane fetched successfully");
      successResponse.data = airplane;
      successResponse.message = "Airplane fetched successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : DELETE
   * @param :
   * @route : {api/v1/airplanes/:id}
   * @access: Protected
   */
  destroyAirplane = async (req, res, next) => {
    try {
      const airplane = await this.airplaneService.destroyAirplane(req.params.id);
      Logger.info("Airplane deleted successfully");
      successResponse.data = airplane;
      successResponse.message = "Airplane deleted successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };
}
