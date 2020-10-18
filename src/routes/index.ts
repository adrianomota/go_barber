import { Router } from 'express';

import appointmentsRouter from './appointments_routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
