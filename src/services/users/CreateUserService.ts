import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const repo = getRepository(User);

    const existsUser = await repo.findOne({
      where: { email },
    });

    if (existsUser) {
      throw new Error('Email address already used');
    }

    const hashedPassword = await hash(password, 8);

    const new_user = repo.create({
      name,
      email,
      password: hashedPassword,
    });

    await repo.save(new_user);

    return new_user;
  }
}

export default CreateUserService;
