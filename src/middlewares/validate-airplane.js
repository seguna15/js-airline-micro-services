import { StatusCodes } from "http-status-codes"
import { errorResponse } from "../utils/common/index.js"
import AppError from "../utils/errors/app.error.js";

export const validateRequest = (req,res, next) => {
    if(!req.body.modelNumber){
        errorResponse.message = "Something went wrong while creating request";
       
        errorResponse.error = new AppError(
          ["Model number is required"],
          StatusCodes.BAD_REQUEST
        );
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse)
    }
    next()
}