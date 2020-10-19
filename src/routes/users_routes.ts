import { Router } from 'express';

import CreateUserService from '../services/users/CreateUserService';
import GetUsersService from '../services/users/GerUserService';

const appointmentsRouter = Router();

appointmentsRouter.get('/v1', async (request, response) => {
  try {
    const service = new GetUsersService();

    const users = await service.execute();

    return response.json(users);
  } catch (err) {
    response.status(422).json({ error: 'Unprocessable Entity' });
  }
});

appointmentsRouter.post('/v1', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const service = new CreateUserService();

    const new_user = await service.execute({
      name,
      email,
      password,
    });

    return response.status(200).json({
      name: new_user.name,
      email: new_user.email,
    });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
