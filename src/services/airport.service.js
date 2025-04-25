import { StatusCodes } from "http-status-codes";
import AirportRepository from "../repositories/airport.repository.js";
import AppError from "../utils/errors/app.error.js";

export default class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport (data) {
    try {
      const airport = await this.airportRepository.create(data);
      return airport;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }

      throw new AppError(
        ["Something went wrong while creating airport"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getAirports() {
    try {
      const airports = await this.airportRepository.getAll();
      return airports;
    } catch (error) {
      throw new AppError(
        ["Cannot fetch airports data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getAirport(id) {
    try {
      const airport = await this.airportRepository.get(id);

      return airport;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new AppError(
          ["Airport requested is not present"],
          error.statusCode
        );
      }
      throw new AppError(
        ["Cannot fetch airport data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async destroyAirport(id) {
    try {
      const response = await this.airportRepository.destroy(id);
      return response;
    } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
       throw new AppError(
         ["Airport requested is not present"],
         error.statusCode
       );
     }
      throw new AppError(
        ["Cannot delete airport data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAirport(id, data) {
     try {
          const response = await this.airportRepository.update(id, data);
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
                    ["Airport requested is not present"],
                    error.statusCode
               );
          }
          throw new AppError(
               ["Unable to update airport data"],
               StatusCodes.INTERNAL_SERVER_ERROR
          );
     }
  }

}   