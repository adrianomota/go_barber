import { Router } from 'express';
import { parseISO } from 'date-fns';

import CreateAppointmentsService from '../services/CreateAppointmentsService';
import GetPaginateAppointmentService from '../services/GetPaginateAppointmentService';

const appointmentsRouter = Router();

appointmentsRouter.get('/v1', async (request, response) => {
  const service = new GetPaginateAppointmentService();

  const appointments = await service.execute();

  return response.json(appointments);
});

appointmentsRouter.post('/v1', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const service = new CreateAppointmentsService();

    const parsedDate = parseISO(date);

    const newAppointment = await service.execute({
      provider,
      date: parsedDate,
    });

    return response.status(200).json(newAppointment);
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
