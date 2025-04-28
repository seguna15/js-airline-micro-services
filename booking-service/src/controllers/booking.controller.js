import BookingService from "../services/booking.service.js";
import { successResponse } from "../utils/common/index.js";
import { Logger } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

export default class BookingController {
  constructor() {
    this.bookingService = new BookingService ;
  }

  /**
   * @method : POST
   * @param :
   * @route : {api/v1/bookings}
   */
  healthCheck = async (req, res, next) => {
    Logger.info("Booking API is healthy");
    successResponse.message = "Booking API is healthy";
    return res.status(StatusCodes.OK).json(successResponse);
  };
}
