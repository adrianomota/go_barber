import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../../models/Appointment';
import AppointmentsRepository from '../../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentsService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const repo = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const existsApppointmentInsameDate = await repo.findByDate(appointmentDate);

    if (existsApppointmentInsameDate) {
      throw Error('This appointment is already booked');
    }

    const newAppointment = repo.create({
      provider_id,
      date: appointmentDate,
    });

    await repo.save(newAppointment);

    return newAppointment;
  }
}

export default CreateAppointmentsService;
