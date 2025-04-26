import { StatusCodes } from "http-status-codes"
import { errorResponse } from "../utils/common/index.js"
import AppError from "../utils/errors/app.error.js";

export const validateCityRequest = (req,res, next) => {
    if(!req.body.name){
        errorResponse.message = "Something went wrong while creating city";
       
        errorResponse.error = new AppError(
          ["City name is required"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next()
}