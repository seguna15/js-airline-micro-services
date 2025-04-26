import { StatusCodes } from "http-status-codes"
import { errorResponse } from "../utils/common/index.js"
import AppError from "../utils/errors/app.error.js";

export const validateAirportRequest = (req,res, next) => {
    if(!req.body.name){
        errorResponse.message = "Something went wrong while creating airport";
       
        errorResponse.error = new AppError(
          ["Airport name is required"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    if (!req.body.code) {
      errorResponse.message = "Something went wrong while creating airport";

      errorResponse.error = new AppError(
        ["Airport code is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if (!req.body.cityId) {
      errorResponse.message = "Something went wrong while creating airport";

      errorResponse.error = new AppError(
        ["Airport city identifier is required"],
        StatusCodes.BAD_REQUEST
      );
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next()
}