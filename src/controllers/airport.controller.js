import { StatusCodes } from "http-status-codes";
import AirportService from "../services/airport.service.js";
import { Logger } from "../utils/logger.util.js";
import { successResponse } from "../utils/common/success-response.js";
import { errorResponse } from "../utils/common/error-response.js";

export default class AirportController {
  constructor() {
    this.airportService = new AirportService();
  }

  /**
   * @method : POST
   * @param :
   * @route : {api/v1/airports}
   */
  healthInfo = (req, res) => {
    Logger.info("API is healthy");
    successResponse.message = "API is healthy";
    return res.status(StatusCodes.OK).json(successResponse);
  };
  
  /**
   * @method : POST
   * @param : {name: "Murtala Mohammed International Airport", code: 'MM2', address: "", cityId: 1} 
   * @route : {api/v1/airports}
   * @access: Protected
   */
  createAirport = async (req, res, next) => {
    try {
      console.log(req.body)
      const airport = await this.airportService.createAirport({
        code: req.body.code,
        name: req.body.name,
        address: req.body.address,
        cityId: req.body.cityId,
      });
      Logger.info("Airport created successfully");
      successResponse.data = airport;
      successResponse.message = "Airport created successfully";
      return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : GET
   * @param :
   * @route : {api/v1/airports}
   * @access: Protected
   */
  getAirports = async (req, res, next) => {
    try {
      const airports = await this.airportService.getAirports();
      Logger.info("Airports fetched successfully");
      successResponse.data = airports;
      successResponse.message = "Airports fetched successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : GET
   * @param :
   * @route : {api/v1/airports/:id}
   * @access: Protected
   */
  getAirport = async (req, res, next) => {
    try {
      const airport = await this.airportService.getAirport(req.params.id);
      Logger.info("Airport fetched successfully");
      successResponse.data = airport;
      successResponse.message = "Airport fetched successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : DELETE
   * @param :
   * @route : {api/v1/airports/:id}
   * @access: Protected
   */
  destroyAirport = async (req, res, next) => {
    try {
      const airport = await this.airportService.destroyAirport(req.params.id);
      Logger.info("Airport deleted successfully");
      successResponse.data = airport;
      successResponse.message = "Airport deleted successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };

  /**
   * @method : PUT
   * @param :
   * @route : {api/v1/airports/:id}
   * @access: Protected
   */
  updateAirport = async (req, res, next) => {
    try {
      const airport = await this.airportService.updateAirport(req.params.id, {
        code: req.body.code,
        name: req.body.name,
        address: req.body.address,
        cityId: req.body.cityId,
      });
      Logger.info("Airport updated successfully");

      successResponse.data = airport[0];
      successResponse.message = "Airport updated successfully";
      return res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };
}
