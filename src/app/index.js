import express from 'express';
import routes from '../routes/index.js';
import { configureCors } from '../config/cors.config.js';
import helmet from 'helmet';
import { globalErrorHandler } from '../middlewares/globalErrorHandler.js';

const app = express();

app.use(helmet())
app.use(configureCors())
app.use(express.json())

app.use("/api", routes)

app.use(globalErrorHandler)

export default app;