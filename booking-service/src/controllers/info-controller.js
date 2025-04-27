import { StatusCodes } from "http-status-codes"
import { logger } from "../utils/index.js"

export const healthInfo = (req, res) => {
    logger.info("API is healthy");
    return res
        .status(StatusCodes.OK)
        .json({
            success: true,
            message: "API is healthy",
            error: {},
            data: {}
        })
}