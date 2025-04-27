import { StatusCodes } from "http-status-codes"
import { errorResponse } from "../utils/common/index.js"
import AppError from "../utils/errors/app.error.js";
import { compareTime } from "../utils/helpers/datetime.helpers.js";

export const validateFlightRequest = (req,res, next) => {
    if (!req.body.flightNumber) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Flight number is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.airplaneId) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Airplane Id is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.departureAirport) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Departure airport is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.arrivalAirport) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Arrival airport is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.arrivalTime) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Arrival time is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.departureTime) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Departure time is required"],
        StatusCodes.BAD_REQUEST
      );
    }

    if (compareTime(req.body.departureTime, req.body.arrivalTime)) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Departure time cannot be  greater than arrival time"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.price) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Flight Price is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }

    if (!req.body.totalSeats) {
      errorResponse.message = "Something went wrong while creating flight";

      errorResponse.error = new AppError(
        ["Total seats is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next()
}