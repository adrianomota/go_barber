import { getRepository } from 'typeorm';
import User from '../../models/User';

class GetUserService {
  public async execute(): Promise<User[]> {
    const repo = getRepository(User);

    const users = await repo.find();

    return users;
  }
}

export default GetUserService;
