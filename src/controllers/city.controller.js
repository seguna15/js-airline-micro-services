import { StatusCodes } from "http-status-codes";
import CityService from "../services/city.service.js";
import { Logger } from "../utils/logger.util.js";
import { successResponse } from "../utils/common/success-response.js";
import { errorResponse } from "../utils/common/error-response.js";

export default class CityController {
  constructor() {
    this.cityService = new CityService();
  }

  /**
   * @method : POST
   * @param :
   * @route : {api/v1/cities}
   */
  healthInfo = (req, res) => {
    Logger.info("API is healthy");
    successResponse.message = "API is healthy";
    return res.status(StatusCodes.OK).json(successResponse);
  };
  /**
   * @method : POST
   * @param : {name: 'London', }
   * @route : {api/v1/cities}
   * @access: Protected
   */
  createCity = async (req, res, next) => {
    try {
      const city = await this.cityService.createCity({
        name: req.body.name,
      });
      Logger.info("City created successfully");
      successResponse.data = city;
      successResponse.message = "City created successfully";
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
   * @route : {api/v1/cities}
   * @access: Protected
   */
  getCities = async (req, res, next) => {
    try {
      const cities = await this.cityService.getCities();
      Logger.info("Cities fetched successfully");
      successResponse.data = cities;
      successResponse.message = "Cities fetched successfully";
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
   * @route : {api/v1/cities/:id}
   * @access: Protected
   */
  getCity = async (req, res, next) => {
    try {
      const city = await this.cityService.getCity(req.params.id);
      Logger.info("City fetched successfully");
      successResponse.data = city;
      successResponse.message = "City fetched successfully";
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
   * @route : {api/v1/cities/:id}
   * @access: Protected
   */
  destroyCity = async (req, res, next) => {
    try {
      const city = await this.cityService.destroyCity(
        req.params.id
      );
      Logger.info("City deleted successfully");
      successResponse.data = city;
      successResponse.message = "City deleted successfully";
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
   * @route : {api/v1/cities/:id}
   * @access: Protected
   */
   updateCity = async (req, res, next) => {
     try {
       const city = await this.cityService.updateCity(
         req.params.id, {
          name: req.body.name,
         }
       );
       Logger.info("City updated successfully");
       
       successResponse.data = city[0];
       successResponse.message = "City updated successfully";
       return res.status(StatusCodes.OK).json(successResponse);
     } catch (error) {
      Logger.error(error);
       errorResponse.error = error;
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
     }
  }
}
