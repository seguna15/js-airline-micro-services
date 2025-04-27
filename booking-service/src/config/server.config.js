import dotenv from "dotenv";
dotenv.config();

export const serverConfig = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
}


