import { Router } from 'express';
import AuthenticateUserService from '../services/sessions/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/v1', async (request, response) => {
  try {
    const { email, password } = request.body;

    const service = new AuthenticateUserService();

    const { user, token } = await service.execute({
      email,
      password,
    });

    return response.json({ user, token });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
