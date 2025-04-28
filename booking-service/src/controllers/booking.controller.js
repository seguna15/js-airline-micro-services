import { successResponse } from "../utils/common/index.js";
import { Logger } from "../utils/index.js";
import { StatusCodes } from "http-status-codes";

export default class BookingController {
  constructor() {}

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
