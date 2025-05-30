import { StatusCodes } from "http-status-codes";
import AirplaneRepository from "../repositories/airplane.repository.js";
import AppError from "../utils/errors/app.error.js";

export default class AirplaneService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane (data) {
    try {
      const airplane = await this.airplaneRepository.create(data);
      return airplane;
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
        ["Something went wrong while creating airplane"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getAirplanes() {
    try {
      const airplanes = await this.airplaneRepository.getAll();
      return airplanes;
    } catch (error) {
      throw new AppError(
        ["Cannot fetch airplanes data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async getAirplane(id) {
    try {
      const airplane = await this.airplaneRepository.get(id);

      return airplane;
    } catch (error) {
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new AppError(
          ["Airplane requested is not present"],
          error.statusCode
        );
      }
      throw new AppError(
        ["Cannot fetch airplane data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  };

  async destroyAirplane(id) {
    try {
      const response = await this.airplaneRepository.destroy(id);
      return response;
    } catch (error) {
     if (error.statusCode === StatusCodes.NOT_FOUND) {
       throw new AppError(
         ["Airplane requested is not present"],
         error.statusCode
       );
     }
      throw new AppError(
        ["Cannot delete airplane data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateAirplane(id, data) {
     try {
          const response = await this.airplaneRepository.update(id, data);
          return response;
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
      if (error.statusCode === StatusCodes.NOT_FOUND) {
        throw new AppError(
          ["Airplane requested is not present"],
          error.statusCode
        );
      }
      throw new AppError(
        ["Unable to update airplane data"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

}   