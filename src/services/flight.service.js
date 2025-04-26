import { StatusCodes } from "http-status-codes";
import FlightRepository from "../repositories/flight.repository.js";
import AppError from "../utils/errors/app.error.js";
import { Op } from "sequelize";
export default class FlightService {

  constructor() {
    this.flightRepository = new FlightRepository();
  }

  async createFlight (data) {
    try {
      const flight = await this.flightRepository.create(data);
      return flight;
    } catch (error) {
      console.log(error)
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
        ["Something went wrong while creating flight"],
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getAllFlights(query){
    let customFilter =  {}
    let sortFilter = []
    //trips=LOS-LGA
    if(query.trips){
      let trip = query.trips.split('-')
      customFilter.departureAirport = trip[0]
      customFilter.arrivalAirport = trip[1]  
    }

    if(query.price){
      let [minPrice, maxPrice] = query.price.split('-')
      customFilter.price = {
        [Op.between]: [minPrice, ((maxPrice === undefined) ? Number(minPrice)+1000 : maxPrice)]
      }
    }

    if(query.travelers){
      customFilter.totalSeats = {
        [Op.gte]: query.travelers
      }
    }

    if(query.tripDate){
      const endingTripTime = " 23:59:00"
      customFilter.departureTime = {
        [Op.between]: [query.tripDate, query.tripDate+endingTripTime]
      }
    }

    if(query.sort){
      const params = query.sort.split(',')
      const sortFilters = params.map((param) => param.split('_'))
      sortFilter = sortFilters
    }

    try {
      const flights = await this.flightRepository.getAllFlights(customFilter, sortFilter);
      return flights;
    } catch (error) {
       throw new AppError(
          ["Cannot fetch airports data"],
          StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
  }





}   