import winston, { createLogger, format, transports } from "winston";
import { serverConfig } from "../config/index.js";

const {combine, timestamp, label, printf} = format;

const customFormat = printf(({level, message, timestamp}) => {
    return `${timestamp} : ${level} : ${message}`;
});


export const logger = createLogger({
  level: serverConfig.ENV === "production" ? "info" : "debug",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),

    customFormat
  ),
  transports: [
    new transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new transports.File({ filename: "combined.log" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
});

