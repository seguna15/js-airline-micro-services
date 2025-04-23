import app from "./app/index.js";
import  {serverConfig}  from "./config/index.js";

import http from "http";
import { logger } from "./utils/index.js";




const server = http.createServer(app);

server.listen(serverConfig.PORT, () => {
  logger.info(`Server is running on port ${serverConfig.PORT}`);
});

server.on("error", (error) => {
  console.error("Server error:", error);
  process.exit(1);
});