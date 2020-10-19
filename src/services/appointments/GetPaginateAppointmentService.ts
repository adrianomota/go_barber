import { getCustomRepository } from 'typeorm';
import Appointment from '../../models/Appointment';
import AppointmentsRepository from '../../repositories/AppointmentsRepository';

class GetPaginateAppointmentService {
  public async execute(): Promise<Appointment[]> {
    const repo = getCustomRepository(AppointmentsRepository);

    const appointments = repo.find();

    return appointments;
  }
}

export default GetPaginateAppointmentService;
