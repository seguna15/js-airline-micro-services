import { StatusCodes } from "http-status-codes";
import AirplaneRepository from "../repositories/airplane.repository.js";
import AppError from "../utils/errors/app.error.js";

export default class AirplaneService {
    constructor(){
     this.airplaneRepository = new AirplaneRepository();

    }
     
     createAirplane = async (data) => {
       try {
            const airplane  = await this.airplaneRepository.create(data);
            return airplane;
       } catch (error) {
          if(error.name === "SequelizeValidationError"){
               let explanation = [];
               error.errors.forEach((err) => {
                    explanation.push(err.message)
               })
               throw new AppError(explanation, StatusCodes.BAD_REQUEST)     
          }
          
          throw new AppError(
            ["Something went wrong while creating airplane"],
            StatusCodes.INTERNAL_SERVER_ERROR
          );
       } 
    }

    getAirplanes = async () => {
     try {
          const airplanes = await this.airplaneRepository.getAll();
          return airplanes;
     } catch (error) {
           throw new AppError(
             ["Cannot fetch airplanes data"],
             StatusCodes.INTERNAL_SERVER_ERROR
           );
     }
    }
}   