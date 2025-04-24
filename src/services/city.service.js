import { StatusCodes } from "http-status-codes";
import CityRepository from "../repositories/city.repository.js";
import AppError from "../utils/errors/app.error.js";
import { Logger } from "../utils/logger.util.js";

export default class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity (data) {
    try {
      const city = await this.cityRepository.create(data);
      return city;
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError"){
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.CONFLICT);
      }
      if (error.name === "SequelizeValidationError") {
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }

      throw new AppError(
        ["Something went wrong while creating city"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getCities() {
    try {
      const cities = await this.cityRepository.getAll();
      return cities;
    } catch (error) {
      throw new AppError(
        ["Cannot fetch cities data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getCity(id) {
    try {
      const city = await this.cityRepository.get(id);

      return city;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new AppError(
          ["City requested is not present"],
          error.statusCode
        );
      }
      throw new AppError(
        ["Cannot fetch city data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async destroyCity(id) {
    try {
      const response = await this.cityRepository.destroy(id);
      return response;
    } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
       throw new AppError(
         ["City requested is not present"],
         error.statusCode
       );
     }
      throw new AppError(
        ["Cannot delete city data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateCity(id, data) {
     try {
          const response = await this.cityRepository.update(id, data);
          return response;
     } catch (error) {
         
          if (error.name === "SequelizeValidationError") {
            let explanation = [];
            error.errors.forEach((err) => {
              explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
          }
          if (error.statusCode === StatusCodes.NOT_FOUND) {
               throw new AppError(
                    ["City requested is not present"],
                    error.statusCode
               );
          }
          throw new AppError(
               ["Unable to update city data"],
               StatusCodes.INTERNAL_SERVER_ERROR
          );
     }
  }

}   