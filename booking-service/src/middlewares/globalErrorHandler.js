import { Logger } from "../utils/index.js"

export const globalErrorHandler = async (err, req, res, next) => {
    Logger.error(err.message)
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Something went wrong',
        data: null,
        error: err.stack
    }) 
}