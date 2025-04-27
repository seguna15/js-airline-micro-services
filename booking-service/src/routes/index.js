import express from 'express';
import v1Routes  from './v1/index.js';
import v2Routes  from './v2/index.js';

const routes = express.Router();

routes.use('/v1', v1Routes);
routes.use('/v2', v2Routes);

export default routes;

