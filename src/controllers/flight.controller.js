import { StatusCodes } from "http-status-codes";
import { Logger } from "../utils/logger.util.js";
import { successResponse } from "../utils/common/success-response.js";
import { errorResponse } from "../utils/common/error-response.js";
import FlightService from "../services/flight.service.js";

export default class FlightController {
  constructor() {
    this.flightService = new FlightService();
  }

  /**
   * @method : POST
   * @param :
   * @route : {api/v1/flights/health}
   */
  healthInfo = (req, res) => {
    Logger.info("API is healthy");
    successResponse.message = "API is healthy";
    return res.status(StatusCodes.OK).json(successResponse);
  };

  /**
   * @method : POST
   * @param : {flightNumber: "UK 808", airplaneId: 1,departureAirport: "LOS",arrivalAirport: "LGA",arrivalTime: "11:10:00",departureTime: "9:10:00",price: 1800,boardingGate: "12A",totalSeats: 120}
   * @route : {api/v1/flights}
   * @access: Protected
   */
  createFlight = async (req, res, next) => {
    try {
      const flight = await this.flightService.createFlight({
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirport: req.body.departureAirport,
        arrivalAirport: req.body.arrivalAirport,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price,
        boardingGate: req.body.boardingGate,
        totalSeats: req.body.totalSeats,
      });
      Logger.info("Flight created successfully");
      successResponse.data = flight;
      successResponse.message = "Flight created successfully";
      return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  }

  /**
   * @method : GET
   * @param :
   * @route : {api/v1/flights?trips=LOS-LGA}
   * @access: public
   */
  getAlLFlights = async (req, res, next) => {
    try {
      const flight = await this.flightService.getAllFlights(req.query);
      Logger.info("Flight created successfully");
      successResponse.data = flight;
      successResponse.message = "Flight created successfully";
      return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
      Logger.error(error);
      errorResponse.error = error;
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
  };


}


