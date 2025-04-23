import express from 'express';
import routes from '../routes/index.js';
import { configureCors } from '../config/cors.config.js';

const app = express();

app.use(configureCors())
app.use(express.json())

app.use("/api", routes)

export default app;