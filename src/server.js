import app from "./app/index.js";
import  {serverConfig}  from "./config/index.js";

import http from "http";
import { Logger } from "./utils/index.js";




const server = http.createServer(app);

server.listen(serverConfig.PORT, () => {
  Logger.info(`Server is running on port ${serverConfig.PORT}`);
});

server.on("error", (error) => {
  Logger.error(`Server error: ${error.message}`);
  process.exit(1);
});