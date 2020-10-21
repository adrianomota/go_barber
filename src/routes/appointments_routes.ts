import { Router } from 'express';
import { parseISO } from 'date-fns';

import ensureAuthentication from '../middlewares/ensureAuthentication';
import CreateAppointmentsService from '../services/appointments/CreateAppointmentsService';
import GetPaginateAppointmentService from '../services/appointments/GetPaginateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthentication);

appointmentsRouter.get('/v1', async (request, response) => {
  const service = new GetPaginateAppointmentService();

  const appointments = await service.execute();

  return response.json(appointments);
});

appointmentsRouter.post('/v1', async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const service = new CreateAppointmentsService();

    const parsedDate = parseISO(date);

    const newAppointment = await service.execute({
      provider_id,
      date: parsedDate,
    });

    return response.status(200).json(newAppointment);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
